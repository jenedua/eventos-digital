/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/shared/templates/Pagina";

export default function Layout(props: any) {
    return (
        <Pagina>
            {props.children}
        </Pagina>
    )
}