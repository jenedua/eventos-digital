import { Evento } from "core";
import QRCode from "react-qr-code";

export interface AcessarViaQrcodeProps {
  evento: Evento;
}
export default function AcessarViaQrcode(props: AcessarViaQrcodeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
      <span className="text-zinc-400 text-sm font-light">
        Acesse via mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: props.evento.id,
          senha: props.evento.senha,
        })}
        className="w-32 h-32"
      />
    </div>
  );
}
