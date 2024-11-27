import styled from 'styled-components';
import logo from '../assets/logo-header.svg';

const LogoContainer = styled.div`
    width: 253px;
    height: 44px;
    position: relative;
`;

const Logo = () => {
    return (  
        <LogoContainer>
            <img src={logo} alt="Logo" />
        </LogoContainer>
    );
}
 
export default Logo;