import { RiCapsuleLine } from "react-icons/ri";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}


function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="border border-sky-200 rounded-xl overflow-hidden hover:border-sky-400 transition bg-white">
      {produto.foto ? (
        <img
          src={produto.foto}
          alt={produto.nome}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-sky-50 flex items-center justify-center">
          <RiCapsuleLine size={40} className="text-sky-200" />
        </div>
      )}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-semibold text-sky-700 text-base">{produto.nome}</h3>
        <span className="text-xs text-gray-400">{produto.categoria?.nome}</span>
        <p className="text-green-700 font-bold text-sm mt-1">
          R$ {Number(produto.preco).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CardProduto;