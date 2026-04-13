import { useEffect, useState } from "react";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { Link } from "react-router-dom";
import { RiSettings3Line } from "react-icons/ri";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
  <div className="max-w-5xl mx-auto px-8 py-12">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-sky-700">Categorias</h2>
        <Link
          to="/gerenciarCategorias"
          className="flex items-center gap-2 bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition"
        >
          <RiSettings3Line size={16} />
          Gerenciar Categorias
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>

    </div>
  );
}

export default ListaCategorias;