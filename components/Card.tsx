import { Post } from "../@types/post.d.ts";
type Props = {
  post: Post;
};
export default function Card({ post }: Props) {
  return (
    <div class="w-full md:w-3/5 flex p-4 h-30 flex-col gap-4 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl ">
      <h2 class="text-2xl font-bold">
        <a class="hover:text-blue-500" href={`/blog/${post.id}`}>
          {post.title}
        </a>
      </h2>
      <time>
        {Intl.DateTimeFormat("pt-BR", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }).format(post.date)}
      </time>
    </div>
  );
}
