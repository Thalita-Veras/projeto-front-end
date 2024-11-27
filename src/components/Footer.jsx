import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`

`;
const Footer = () => {
    return (  
        <FooterContainer>
            <div>
                <h2>Digital Store</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque ratione doloribus nihil blanditiis, suscipit molestiae ea iste adipisci soluta laboriosam temporibus rem maiores veritatis itaque, dicta, quas at saepe!</p>
                <img src="" alt="Facebook" />
                <img src="" alt="Instagram" />
                <img src="" alt="Twitter" />
            </div>

            <div>
                <h2>Informação</h2>
                <nav>
                    <ul>
                        <li><NavLink>Sobre Drip Store</NavLink></li>
                        <li><NavLink>Segurança</NavLink></li>
                        <li><NavLink>Wishlist</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                        <li><NavLink>Trabalhe Conosco</NavLink></li>
                        <li><NavLink>Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
            </div>

            <div>
                <h2>Categotias</h2>
                <nav>
                    <ul>
                        <li><NavLink>Camisetas</NavLink></li>
                        <li><NavLink>Calças</NavLink></li>
                        <li><NavLink>Bonés</NavLink></li>
                        <li><NavLink>Headphones</NavLink></li>
                        <li><NavLink>Tênis</NavLink></li>
                    </ul>
                </nav>
            </div>

            <div>
                <h2>Contato</h2>
                <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                <p>(85) 3051-3411</p>
            </div>
            
            <hr></hr>

            <div>
                <p>@2024 Digital College</p>
            </div>
        </FooterContainer>
    );
}
 
export default Footer;