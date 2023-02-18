import { Post } from "../@types/post.d.ts";
type Props = {
  post: Post;
};
export default function Card({ post }: Props) {
  console.log(post.body);
  return (
    <div class="w-full flex p-4 h-30 flex-col gap-4 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl ">
      <h2 class="text-2xl font-bold">
        <a class="hover:text-blue-500" href={`/blog/${post.id}`}>
          {post.title}
        </a>
      </h2>
      <div class="w-full flex items-center gap-2 justify-between">
        <p class="truncate w-45">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          numquam. Reprehenderit doloremque, consequuntur corporis enim quos
          fugiat veniam vitae? Nam natus id, eaque pariatur fuga neque nulla aut
          aliquid enim?
        </p>
        <time>{Intl.DateTimeFormat("pt").format(post.date)}</time>
      </div>
    </div>
  );
}
