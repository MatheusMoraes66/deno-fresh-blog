import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../@types/post.d.ts";
import Card from "../components/Card.tsx";
import { Hero } from "../components/Hero.tsx";
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
    <main class="w-full flex px-2 md:px-8 flex-col justify-center items-center gap-x-8 gap-y-4 mt-6">
      <Hero />
      <div class="w-full flex p-2 flex-col md:w-3/5">
        <h2 class="text-2xl font-bold mb-2">Blog</h2>
        <hr />
      </div>

      {posts.map((post: Post) => <Card post={post} />)}
    </main>
  );
}
