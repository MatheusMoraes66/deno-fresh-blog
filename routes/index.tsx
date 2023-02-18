import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../@types/post.d.ts";
import Card from "../components/Card.tsx";
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
      {posts.map((post: Post) => (
        <article class="p-4">
          <Card post={post} />
        </article>
      ))}
    </main>
  );
}
