import { extract } from "$std/encoding/front_matter/any.ts";
import { Post } from "../@types/post.d.ts";
import { render } from "https://deno.land/x/gfm@0.2.0/mod.ts";

export async function loadPost(id: string): Promise<Post | null> {
  const raw: string | null = await Deno.readTextFile(`./content/posts/${id}.md`)
    .catch(
      () => null,
    );

  if (!raw) return null;

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    body: render(body),
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}

export async function listPost(): Promise<Post[]> {
  const promises: any[] = [];

  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts = await Promise.all(promises) as Post[];

  posts.sort((a: Post, b: Post) => {
    return b.date.getTime() - a.date.getTime(); // DESC
  });
  return posts;
}
