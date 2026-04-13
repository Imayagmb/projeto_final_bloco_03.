import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { RiAddCircleLine, RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function GerenciarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    await buscar("/produtos", setProdutos);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3 mb-6">
        <h2 className="text-xl font-semibold text-sky-700">
          Gerenciar Produtos
        </h2>
        <Link
          to="/cadastrarProduto"
          className="flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-500 transition w-fit"
        >
          <RiAddCircleLine size={16} />
          Novo Produto
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="flex flex-col items-center sm:flex-row sm:justify-between border border-sky-200 rounded-xl px-5 py-4 hover:border-sky-400 transition bg-white gap-3"
          >
            <div>
              <h3 className="font-semibold text-sky-700">{produto.nome}</h3>
              <span className="text-xs text-gray-400">
                R$ {Number(produto.preco).toFixed(2)}
              </span>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/editarProduto/${produto.id}`}
                className="flex items-center gap-1 bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition"
              >
                <RiEditLine size={14} />
                Editar
              </Link>
              <Link
                to={`/deletarProduto/${produto.id}`}
                className="flex items-center gap-1 bg-white text-red-500 border border-red-200 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-red-50 transition"
              >
                <RiDeleteBinLine size={14} />
                Deletar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GerenciarProdutos;
