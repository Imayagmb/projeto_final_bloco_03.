import { RiLayoutGridLine } from "react-icons/ri";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}


function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-sky-200 rounded-xl p-5 flex items-center gap-4 hover:border-sky-400 transition">
      <div className="bg-sky-100 p-3 rounded-lg">
        <RiLayoutGridLine size={24} className="text-sky-600" />
      </div>
      <h3 className="font-semibold text-sky-700 text-base">{categoria.nome}</h3>
    </div>
  );
}
export default CardCategoria;