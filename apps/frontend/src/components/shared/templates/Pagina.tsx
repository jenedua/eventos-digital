import Logo from "./Logo";

export interface PaginaProps {
    children?: React.ReactNode;
    className?: string;
}
export default function Pagina(props: PaginaProps) {
    return (
        <div className="
            flex flex-col items-center bg-zinc-500 py-10  min-h-screen
            bg-[url('/background.png')] bg-cover 
            "
        >
            <Logo />
            <main className={`
                flex-1 flex flex-col justify-center items-center py-10
               container ${props.className}
                `}
            >
                {props.children}
            </main>

        </div>
    )
}
    