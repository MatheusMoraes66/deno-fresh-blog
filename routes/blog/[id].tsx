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
    <div class="p-4">
      <h1 class="text-2xl font-bold">{post.title}</h1>
      <time>{Intl.DateTimeFormat("pt").format(post.date)}</time>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{
          __html: post.body,
        }}
      />
    </div>
  );
}
