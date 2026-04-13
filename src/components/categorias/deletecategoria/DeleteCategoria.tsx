import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";

function DeleteCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id) buscarPorId(id);
  }, [id]);

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      alert("Erro ao deletar categoria. Tente novamente.");
    }
  }

  return (
    <div className="max-w-md mx-auto px-8 py-12 text-center">
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        Deletar Categoria
      </h2>
      <p className="text-gray-600 mb-2">
        Tem certeza que deseja deletar a categoria:
      </p>
      <p className="font-bold text-sky-700 text-lg mb-6">{categoria.nome}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/categorias")}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Cancelar
        </button>
        <button
          onClick={deletarCategoria}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-400 transition"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default DeleteCategoria;
