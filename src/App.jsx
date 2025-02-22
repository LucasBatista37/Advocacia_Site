import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Escritório de Advocacia</h1>
        <ul className="flex space-x-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Áreas de Atuação</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <button className="bg-blue-500 px-4 py-2 rounded">Agende uma Consulta</button>
      </nav>
      
      {/* Banner Principal */}
      <header className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <h2 className="text-4xl font-bold">Assessoria Jurídica Especializada em Cidadania e Documentação</h2>
        <p className="text-lg mt-2">Regularizamos sua documentação e garantimos seus direitos.</p>
        <div className="mt-4">
          <button className="bg-blue-500 px-6 py-2 rounded mr-2">Entre em Contato</button>
          <button className="bg-gray-700 px-6 py-2 rounded">Agende uma Consulta</button>
        </div>
      </header>

      {/* Serviços */}
      <section id="services" className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-6">Nossos Serviços</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded shadow-md">
            <h4 className="text-xl font-bold">Cidadania</h4>
            <p>Assessoria completa para obtenção de cidadania estrangeira.</p>
          </div>
          <div className="p-6 border rounded shadow-md">
            <h4 className="text-xl font-bold">Regularização de Documentação</h4>
            <p>Ajuda na regularização de passaporte, vistos e outros documentos.</p>
          </div>
          <div className="p-6 border rounded shadow-md">
            <h4 className="text-xl font-bold">Consultoria Jurídica</h4>
            <p>Esclarecimento de dúvidas sobre processos e direitos legais.</p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="bg-gray-100 p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Sobre Nós</h3>
        <p className="max-w-2xl mx-auto">Com anos de experiência, nosso escritório atua com seriedade e dedicação para garantir a regularização da documentação de nossos clientes.</p>
      </section>

      {/* Contato */}
      <section id="contact" className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
        <form className="max-w-lg mx-auto grid gap-4">
          <input type="text" placeholder="Nome" className="border p-2 rounded" />
          <input type="email" placeholder="E-mail" className="border p-2 rounded" />
          <input type="tel" placeholder="Telefone" className="border p-2 rounded" />
          <textarea placeholder="Mensagem" className="border p-2 rounded" rows="4"></textarea>
          <button className="bg-blue-500 px-6 py-2 rounded text-white">Enviar</button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>© 2025 Escritório de Advocacia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
