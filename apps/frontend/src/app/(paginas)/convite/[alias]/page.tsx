export default function PageConvite(props: any) {
    console.log("paginaConvite ",props)
    return (
        <div>{props.params.alias}</div>    
    )
}