import { Evento } from "core";
import Informacao from "../shared/Informacao";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}
export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;
  return (
    <div className={` flex flex-col gap-2 ${props.className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-4 rounded-lg">
        <span className="text-2xl font-black">{evento.alias}</span>
        <span className="text-xl text-zinc-400">{evento.nome}</span>
      </div>
      <div className="flex gap-2">
        <Informacao label="Data:">
          <span>
            {new Date(evento.data!).toLocaleDateString()}
            {"ás"}
            {new Date(evento.data!).toLocaleTimeString()}
          </span>
        </Informacao>

        <Informacao label="Local:">
          <span>{evento.local}</span>
        </Informacao>
      </div>
      <div>
        <Informacao label="Descrição:">
          <span>{evento.descricao}</span>
        </Informacao>
      </div>
    </div>
  );
}
