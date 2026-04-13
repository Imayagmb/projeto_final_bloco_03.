import { useEffect, useState, type ChangeEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdicao = id !== undefined;

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (isEdicao) buscarPorId(id);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (isEdicao) {
        await atualizar(`/categorias`, categoria, setCategoria);
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
      }
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
      alert("Erro ao salvar categoria. Tente novamente.");
    }
  }

  return (
    <div className="w-full max-w-xl px-4 mx-auto md:px-8 py-8 md:py-12">
      <h2 className="text-xl font-semibold text-sky-700 mb-6">
        {isEdicao ? "Editar Categoria" : "Nova Categoria"}
      </h2>
      <form onSubmit={gerarNovaCategoria} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Nome</label>
          <input
            type="text"
            name="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            placeholder="Nome da categoria"
            className="border border-sky-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-sky-700 text-white font-semibold py-2 rounded-lg hover:bg-sky-600 transition"
        >
          {isEdicao ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;