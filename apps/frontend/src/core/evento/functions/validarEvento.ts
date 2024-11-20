import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {

    const erros: string[] = []; 

    if (!evento.alias) erros.push("O campo de alias é obrigatório.");
    if (!evento.senha) erros.push("O campo de senha é obrigatório.");
    if (!evento.nome) erros.push("O campo de nome é obrigatório.");
    if (!evento.data) erros.push("O campo de data é obrigatório.");
    if (!evento.local) erros.push("O campo de local é obrigatório.");
    if (!evento.descricao) erros.push("O campo de descricao é obrigatório.");
    if (!evento.imagem) erros.push("O campo de imagem é obrigatório.");
    if (!evento.imagemBackground) erros.push("O campo de imagemBackground é obrigatório.");
    if (!evento.publicoEsperado || evento.publicoEsperado < 1) erros.push("O campo de publicoEsperado é obrigatório.");

    return erros

}