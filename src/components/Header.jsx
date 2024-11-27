import { NavLink } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styled from "styled-components";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-pink/theme.css';
import Logo from "./Logo";
import cart from "../assets/mini-cart.svg";

const HeaderContainer = styled.header`
    width: 1440px;
    height: 192px;
    display: flex;
    background: #FFFFFF;

    & section {
        display: flex;
        margin-top: 34px;
        margin-left:100px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    & div a {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #474747;
    }

    & div Button {
        width: 114px;
        height: 40px;
        background-color: #C92071;
        border-color: #C92071;
        border-radius: 4px;
        font-family: 'Inter';
        font-size: 14px;
        color: #F5F5F5;
        font-weight: bold;
    }

    & nav ul{
        display: flex;
        width: 423px;
        margin-top: 29px;
        margin-left: 10px;
        list-style: none;
        justify-content: space-between;
        & li a {
            color: #C92071;
            display: flex;
            font-family: 'Inter' , sans-serif;
            font-size: 16px;
            text-decoration: none;
            &:hover, &.active{
                color: #474747;
            }
        }
    }
`;

const SearchBar = styled.div`
    max-width: 559px;
    height: 60px;
    color: #FFFFFF;
    

    .p-inputtext {
        font-family: 'Inter' , sans-serif;
        font-size: 16px;
        background: #474747;
        color: #666666;
        border-radius: 8px;
        padding: 15px;
        &:focus {
            border-color: #474747;
            outline: none;
        }
    }

    .p-inputgroup-addon {
        background: #474747;
        border-color: #474747;
        color: #FFFFFF;
        border-radius: 8px;
        cursor: pointer;
    }
`;

const Header = () => {
    return (  
            <HeaderContainer> 
                <section>
                    <Logo />
                    <SearchBar className="p-inputgroup">
                        <InputText placeholder="Pesquisar produtos.."/>
                        <span className="p-inputgroup-addon"> 
                            <i className="pi pi-search"></i> 
                        </span>
                    </SearchBar>  

                    <div>
                        <NavLink>Cadastre-se</NavLink>
                    </div>

                    <div className="card flex justify-content-center">
                        <Button label="Entrar"/>
                    </div>
            
                    <img src={cart} alt="Carrinho de Compras"/>

                    <nav>
                        <ul>
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Produtos</NavLink></li>
                            <li><NavLink>Categorias</NavLink></li>
                            <li><NavLink>Meus Pedidos</NavLink></li>
                        </ul>
                    </nav>
                </section>
        </HeaderContainer>
    );
} 
 
export default Header;

