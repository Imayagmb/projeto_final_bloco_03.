import { Link } from "react-router-dom";
import logo from "../../assets/ciaFarma.png";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiHeartPulseLine,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-sky-700 text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e nome */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="CiaFarma"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg">CiaFarma</span>
          </div>
          <p className="text-sky-200 text-sm">
            Saúde e bem-estar para toda a família.
          </p>
          <div className="flex items-center gap-1 text-sky-200 text-sm">
            <RiHeartPulseLine size={16} />
            Cuidando de você sempre
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <Link
            to="/home"
            className="text-sky-200 text-sm hover:text-white transition"
          >
            Início
          </Link>
          <Link
            to="/categorias"
            className="text-sky-200 text-sm hover:text-white transition"
          >
            Categorias
          </Link>
          <Link
            to="/produtos"
            className="text-sky-200 text-sm hover:text-white transition"
          >
            Produtos
          </Link>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-base mb-1">Contato</h4>
          <div className="flex items-center gap-2 text-sky-200 text-sm">
            <RiMapPinLine size={16} />
            Estrada da água branca, 21862 — Rio de Janeiro
          </div>
          <div className="flex items-center gap-2 text-sky-200 text-sm">
            <RiPhoneLine size={16} />
            (21) 91234-5678
          </div>
          <div className="flex items-center gap-2 text-sky-200 text-sm">
            <RiMailLine size={16} />
            contato@ciafarma.com
          </div>
        </div>
      </div>

      <div className="border-t border-sky-600 mt-8 pt-6 text-center text-sky-300 text-xs">
        © 2026 CiaFarma — Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;
