import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-twitter.tsx";

export default function Header() {
  return (
    <div class="bg-white w-full py-6 px-8 flex flex-col items-center md:flex-row gap-2 md:gap-4 shadow-md">
      <div class="min-w-0 flex-1 flex justify-center md:justify-start">
        <a class="hover:text-blue-500" href={`/`}>
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Matheus Moraes
          </h2>
        </a>
      </div>
      <div class="mt-5 w-16 flex lg:mt-0 lg:ml-4 justify-self-center justify-between md:mt-1 ">
        <a
          href="https://github.com/MatheusMoraes66"
          target="_blank"
          class="inline-block text-gray-700 hover:text-black"
        >
          <IconBrandGithub class="text-gray-700 hover:text-black" />
        </a>
        <a
          href="https://twitter.com/Matheus77819912"
          target="_blank"
          class="inline-block text-gray-700 hover:text-black"
        >
          <IconBrandTwitter class="text-gray-700 hover:text-black" />
        </a>
      </div>
    </div>
  );
}
