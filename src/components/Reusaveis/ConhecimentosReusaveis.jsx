import styled from "styled-components"
import Instagram from "../../imgs/Instagram.png"
const Main = styled.div`
    margin: 1.5rem;
    height: 6rem;
    width: 7rem;
    border-radius: 1rem;
    border: solid 2px #6129E2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #13101b;
    cursor: pointer;

    :hover {
        transform: scale(110%);
    }

    img {
        width: 3.5rem;
        height: 3.5rem;
    }
`

export default function ConhecimentosReusaveis(props) {

    

    return(
        <Main onClick={() => {
            const Nome = document.getElementById('Nome')
            const Texto = document.getElementById('Texto')
            
            Nome.innerHTML = props.Nome
            Texto.innerHTML = props.Texto
        }}>
            <img src={props.imagem} alt="Instagram"  />
        </Main>
    )
}