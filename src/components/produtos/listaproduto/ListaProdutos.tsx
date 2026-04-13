import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { Link } from "react-router-dom";
import { RiSettings3Line } from "react-icons/ri";
import CardProduto from "../cardproduto/CardProduto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    await buscar("/produtos", setProdutos);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-sky-700">Produtos</h2>
        <Link
          to="/gerenciarProdutos"
          className="flex items-center gap-2 bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition"
        >
          <RiSettings3Line size={16} />
          Gerenciar Produtos
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ListaProdutos;