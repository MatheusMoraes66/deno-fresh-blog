import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../@types/post.d.ts";
import Counter from "../islands/Counter.tsx";
import { listPost } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const posts: Post[] = await listPost();

    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props.data;
  return (
    <main class="p-4">
      <h1 class="text-4xl font-bold">
        My Blog
      </h1>
      {posts.map((post: Post) => (
        <article class="p-4">
          <h2 class="text-2xl font-bold">
            <a class="hover:text-blue-500" href={`/blog/${post.id}`}>
              {post.title}
            </a>
          </h2>
          <time>{Intl.DateTimeFormat("pt").format(post.date)}</time>
        </article>
      ))}
    </main>
  );
}
