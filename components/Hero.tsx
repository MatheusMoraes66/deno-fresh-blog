import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Hero() {
  return (
    <div class="w-full flex p-4 flex-col md:w-3/5">
      <h2 class="text-2xl font-bold mb-2">
        Ola, eu sou o Matheus
      </h2>
      <hr />
      <p class="p-2">
        Eu tenho 24 anos, e trabalho como desenvolvedor de software, minhas
        tecnologias favoritas são React, Node, Spring.
      </p>
    </div>
  );
}
