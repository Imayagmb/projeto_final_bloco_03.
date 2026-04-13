import { Link } from "react-router-dom";
import logo from "../../assets/ciaFarma.png";
import { RiHome2Line, RiLayoutGridLine, RiCapsuleLine, RiAddCircleLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="bg-sky-700 text-white px-8 py-3 flex justify-between items-center">
      <Link to="/home" className="flex items-center gap-3">
        <img src={logo} alt="CiaFarma" className="h-12 w-12 object-contain" />
        <span className="text-xl font-bold tracking-wide">CiaFarma</span>
      </Link>

      <ul className="flex gap-8 text-sm font-medium items-center">
        <li>
          <Link to="/home" className="flex items-center gap-1 hover:text-sky-200 transition">
            <RiHome2Line size={18} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/categorias" className="flex items-center gap-1 hover:text-sky-200 transition">
            <RiLayoutGridLine size={18} />
            Categorias
          </Link>
        </li>
        <li>
          <Link to="/produtos" className="flex items-center gap-1 hover:text-sky-200 transition">
            <RiCapsuleLine size={18} />
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/cadastrarCategoria"
            className="flex items-center gap-1 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            <RiAddCircleLine size={18} />
            Nova Categoria
          </Link>
        </li>
        <li>
          <Link
            to="/cadastrarProduto"
            className="flex items-center gap-1 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            <RiAddCircleLine size={18} />
            Novo Produto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;