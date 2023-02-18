import { loadPost } from "./posts.ts";

import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadPost() return null if the post does not exist", async () => {
  const post: string | null = await loadPost("non-existent");
  assertEquals(post, null);
});
