import LogoGrande from "@/components/shared/templates/LogoGrande";
import Link from "next/link";

export default function Home() {
  return (
      <div className="
          h-screen flex flex-col items-center justify-center gap-10
          bg-[url('/background-inicio.svg')] bg-cover text-white-500
      ">
        <div className="flex flex-col items-center gap-4">
          <LogoGrande />
          <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
            Crie e gerencie o convite de seu evento de forma rapida e simples, sem complexidade
          </p>
        </div>
        <Link href="/evento" className="botao azul text-lg uppercase"> Crie o seu evento</Link>

      </div>
  );  
}
