import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeleteCategoria from "./components/categorias/deletecategoria/DeleteCategoria";
import GerenciarCategorias from "./components/categorias/gerenciacategorias/GerenciarCategorias";
import ListaProdutos from "./components/produtos/listaproduto/ListaProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeleteProduto from "./components/produtos/deleteproduto/DeleteProduto";
import GerenciarProdutos from "./components/produtos/gerenciarprodutos/GerenciaProdutos";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/gerenciarCategorias"
              element={<GerenciarCategorias />}
            />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeleteCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/gerenciarProdutos" element={<GerenciarProdutos />} />
            <Route path="/cadastrarProduto" element={<FormProduto />} />
            <Route path="/editarProduto/:id" element={<FormProduto />} />
            <Route path="/deletarProduto/:id" element={<DeleteProduto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
