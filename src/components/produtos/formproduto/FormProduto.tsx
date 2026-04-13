import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { useEffect, useState, type ChangeEvent } from "react";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdicao = id !== undefined;

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: { id: 0, nome: "" },
  });

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  async function buscarPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  useEffect(() => {
    buscarCategorias();
    if (id) buscarPorId(id);
  }, [id]);

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setProduto({
    ...produto,
    [e.target.name]: e.target.name === "preco" ? Number(e.target.value) : e.target.value,
  });
}

  function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    setProduto({
      ...produto,
      categoria: { id: Number(e.target.value), nome: "" },
    });
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (isEdicao) {
        await atualizar("/produtos", produto, setProduto);
      } else {
        await cadastrar("/produtos", produto, setProduto);
      }
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert("Erro ao salvar produto. Tente novamente.");
    }
  }

  return (
    <div className="w-full max-w-xl px-4 mx-auto md:px-8 py-8 md:py-12">
      <h2 className="text-xl font-semibold text-sky-700 mb-6">
        {isEdicao ? "Editar Produto" : "Novo Produto"}
      </h2>
      <form onSubmit={gerarNovoProduto} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Nome</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={atualizarEstado}
            placeholder="Nome do produto"
            className="border border-sky-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Preço</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={atualizarEstado}
            placeholder="0.00"
            step="0.01"
            min="0"
            className="border border-sky-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Foto (URL)</label>
          <input
            type="url"
            name="foto"
            value={produto.foto}
            onChange={atualizarEstado}
            placeholder="https://..."
            className="border border-sky-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Categoria</label>
          <select
            value={produto.categoria?.id}
            onChange={atualizarCategoria}
            className="border border-sky-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-sky-400 bg-white"
            required
          >
            <option value={0} disabled>Selecione uma categoria</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
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

export default FormProduto;