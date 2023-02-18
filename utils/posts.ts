export async function loadPost(id: string): Promise<string | null> {
  let raw: string;

  try {
    raw = await Deno.readTextFile(`.content/posts/${id}.md`);
  } catch (error) {
    console.log(error);
    return null;
  }

  return raw;
}
