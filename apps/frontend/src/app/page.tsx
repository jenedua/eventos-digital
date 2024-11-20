import Logo from "@/components/shared/templates/Logo";

export default function Home() {
  return (
      <div className="
          h-screen flex flex-col items-center justify-center
          bg-[url('/background-inicio.svg')] bg-cover text-white-500
      ">
        <div>
          <Logo />
          <p className="text-zinc-500 font-light w-96 leading-6">
            Crie e gerencie o convite de seu evento de forma rapida e simples, sem complexidade
          </p>
        </div>
      </div>
  );  
}
