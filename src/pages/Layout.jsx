import React from 'react';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            

            {/* Conteúdo dinâmico das páginas */}
            {children}

            {/* Componente do rodapé */}
            <Footer />
        </div>
    );
};

export default Layout;