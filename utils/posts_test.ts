import { loadPost } from "./posts.ts";

import { assertEquals } from "$std/testing/asserts.ts";
import { Post } from "../@types/post.d.ts";

Deno.test("loadPost() return null if the post does not exist", async () => {
  const post: Post | null = await loadPost("non-existent");
  assertEquals(post, null);
});

Deno.test("loadPost() return post if the post exist", async () => {
  const post: Post | null = await loadPost("hello-world");
  assertEquals(post?.id, "hello-world");
});
