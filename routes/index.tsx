import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class="p-4">
      <h1 class="text-4xl font-bold">
        My Blog
      </h1>
      <a class="underline hover:text-blue-500" href="/blog/hello-world">
        Entrar no primeiro post
      </a>
    </main>
  );
}
