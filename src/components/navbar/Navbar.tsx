import { Link } from "react-router-dom";
import logo from "../../assets/ciaFarma.png";
import {
  RiHome2Line,
  RiLayoutGridLine,
  RiCapsuleLine,
  RiAddCircleLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
      <>
    <nav className="bg-sky-700 text-white px-8 py-3">
      <div className="flex justify-between items-center">
        <Link to="/home" className="flex items-center gap-3">
          <img src={logo} alt="CiaFarma" className="h-12 w-12 object-contain" />
          <span className="text-xl font-bold tracking-wide">CiaFarma</span>
        </Link>

        <ul className="hidden lg:flex gap-6 text-sm font-medium items-center">
          <li>
            <Link
              to="/home"
              className="flex items-center gap-1 hover:text-sky-200 transition"
            >
              <RiHome2Line size={18} />
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/categorias"
              className="flex items-center gap-1 hover:text-sky-200 transition"
            >
              <RiLayoutGridLine size={18} />
              Categorias
            </Link>
          </li>
          <li>
            <Link
              to="/produtos"
              className="flex items-center gap-1 hover:text-sky-200 transition"
            >
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

        {/* Botão hambúrguer */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuAberto(true)}
            aria-label="Abrir menu"
          >
            <RiMenuLine size={26} />
          </button>
        </div>
      </nav>

      {menuAberto && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuAberto(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-sky-900 z-50 flex flex-col p-6 gap-2 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="CiaFarma" className="h-9 w-9 object-contain" />
                <span className="text-white font-bold text-lg">CiaFarma</span>
              </div>
              <button onClick={() => setMenuAberto(false)} className="text-sky-300 hover:text-white p-1">
                <RiCloseLine size={24} />
              </button>
            </div>

            {[
              { to: "/home",       icon: <RiHome2Line size={18} />,      label: "Início" },
              { to: "/categorias", icon: <RiLayoutGridLine size={18} />, label: "Categorias" },
              { to: "/produtos",   icon: <RiCapsuleLine size={18} />,    label: "Produtos" },
            ].map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuAberto(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sky-100 hover:bg-sky-700 hover:text-white transition font-medium"
              >
                {icon} {label}
              </Link>
            ))}

          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
