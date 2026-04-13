import { RiMedicineBottleLine, RiMagicLine, RiLeafLine, RiHeartPulseLine, RiToothLine, RiRunLine, RiStethoscopeLine, RiEmotionHappyLine } from "react-icons/ri";
import { RiTruckLine, RiBankCardLine, RiShieldCheckLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <div className="bg-sky-700 text-white">
        <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Saúde, beleza e bem-estar <br /> para toda a família
            </h2>
            <p className="text-sky-100 text-lg mb-8">
              Medicamentos, cosméticos, vitaminas e muito mais 
              com qualidade e preço justo.
            </p>
            <Link to ="/categorias"
            className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-green-500 transition">
              Ver Categorias
            </Link >
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src= "https://ik.imagekit.io/9yqf3fqpw/Hero.png"
              alt="Farmácia"
              className="h-[500px] scale-130 translate-x-40 object-contain"
            />
          </div>
        </div>
      </div>

{/* CATEGORIAS */}
<div className="max-w-5xl mx-auto px-8 py-12">
  <h2 className="text-xl font-semibold text-sky-700 mb-6">Nossas Categorias</h2>
  <div className="grid grid-cols-4 gap-3">
    {[
      { icon: <RiMedicineBottleLine size={32} className="text-sky-500" />, nome: "Medicamentos", desc: "Remédios e genéricos" },
      { icon: <RiMagicLine size={32} className="text-sky-500" />, nome: "Cosméticos", desc: "Maquiagem e beleza" },
      { icon: <RiLeafLine size={32} className="text-sky-500" />, nome: "Dermocosméticos", desc: "Cuidados com a pele" },
      { icon: <RiHeartPulseLine size={32} className="text-sky-500" />, nome: "Vitaminas", desc: "Suplementos e naturais" },
      { icon: <RiEmotionHappyLine size={32} className="text-sky-500" />, nome: "Bebê", desc: "Fraldas e higiene" },
      { icon: <RiToothLine size={32} className="text-sky-500" />, nome: "Higiene Bucal", desc: "Escova, fio e creme" },
      { icon: <RiRunLine size={32} className="text-sky-500" />, nome: "Ortopedia", desc: "Suportes e palmilhas" },
      { icon: <RiStethoscopeLine size={32} className="text-sky-500" />, nome: "Equipamentos", desc: "Aferidor, glicosímetro" },
    ].map((cat) => (
      <div
        key={cat.nome}
        className="border border-sky-200 rounded-xl p-5 text-center hover:border-sky-400 transition"
      >
        <div className="flex justify-center mb-2">{cat.icon}</div>
        <strong className="block text-sm font-semibold text-sky-600 mb-1">{cat.nome}</strong>
        <small className="text-xs text-gray-500">{cat.desc}</small>
      </div>
    ))}
  </div>
</div>

{/* POR QUE ESCOLHER CiaFarma? */}
<div className="bg-green-50 py-10 px-8">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-xl font-semibold text-sky-700 mb-6">Por que a CiaFarma?</h2>
    <div className="grid grid-cols-3 gap-6">
      {[
        { icon: <RiTruckLine size={28} className="text-green-600" />, titulo: "Entrega Rápida", desc: "Receba em até 24h" },
        { icon: <RiBankCardLine size={28} className="text-green-600" />, titulo: "Pagamento Fácil", desc: "Pix, cartão e boleto" },
        { icon: <RiShieldCheckLine size={28} className="text-green-600" />, titulo: "Compra Segura", desc: "Site certificado" },
      ].map((item) => (
        <div key={item.titulo} className="flex items-center gap-3">
          <div>{item.icon}</div>
          <div>
            <strong className="block text-sm font-semibold text-green-700">{item.titulo}</strong>
            <small className="text-xs text-green-600">{item.desc}</small>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* BANNER */}
      <div className="bg-green-600 text-white text-center py-12 px-6">
        <h3 className="text-2xl font-bold mb-2">Cuide da sua saúde hoje</h3>
        <p className="text-green-100 mb-6">Explore nossas categorias e encontre o que precisa</p>
        <Link to = "/categorias" 
        className="bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition">
          Explorar Agora
        </Link>
      </div>

    </div>
  );
}

export default Home;