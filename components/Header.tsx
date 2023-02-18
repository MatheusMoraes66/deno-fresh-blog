import { PageProps } from "https://deno.land/x/fresh@1.1.3/server.ts";

type Props = {
  active: string;
};

export default function Header() {
  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">
          My Blog
        </div>
      </div>
      <ul class="flex items-center gap-6">
      </ul>
    </div>
  );
}
