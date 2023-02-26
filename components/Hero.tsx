import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Hero() {
  return (
    <div class="w-full flex p-2 flex-col md:w-3/5">
      <h2 class="text-2xl font-bold mb-2">
        Ola, esse é meu pequeno espaço.
      </h2>
      <hr />
      <p class="p-2">
        Eu tenho 24 anos e 5 anos na área, hoje trabalho como desenvolvedor
        full-stack, minhas stack principal é Java no Back-end e Javascript no
        Front-end. Mais gosto também de variar com alguma tecnologia que acho
        legal. Por isso criei esse Blog para me manter mais na ativa.
      </p>
    </div>
  );
}
