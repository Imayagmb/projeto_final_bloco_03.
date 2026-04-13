import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import { useNavigate, useParams } from "react-router-dom";

function DeleteProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto>({} as Produto);

  async function buscarPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`);
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto. Tente novamente.");
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 md:px-8 py-12 text-center">
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        Deletar Produto
      </h2>
      <p className="text-gray-600 mb-2">
        Tem certeza que deseja deletar o produto:
      </p>
      <p className="font-bold text-sky-700 text-lg mb-6">{produto.nome}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/produtos")}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Cancelar
        </button>
        <button
          onClick={deletarProduto}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-400 transition"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default DeleteProduto;
