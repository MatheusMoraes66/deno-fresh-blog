// deno-lint-ignore-file
import { Handlers, PageProps } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "https://deno.land/x/gfm@0.2.0/mod.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;

    const post: any = await loadPost(id);

    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};
  return (
    <main class="w-full flex px-8 flex-col justify-center items-center gap-x-8 gap-y-4">
      <div class="w-full flex p-4 flex-col md:w-3/5">
        <h1 class="text-5xl mb-4 text-center font-bold">{post.title}</h1>

        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div
          class="markdown-body"
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        />
      </div>
    </main>
  );
}
