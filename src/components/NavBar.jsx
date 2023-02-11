import styled from "styled-components"

const Main = styled.div`
    width: 100vw;
    height: 4rem;
    background-color: #040405;
    position: fixed;
    top: 0;
    border-bottom: solid 3px #581de2;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 900px){
        display: none;
    }

    h2 {
        color: #fff;
        cursor: pointer;
    }

    h3 {
        color: #ffffffb0;
        margin: 1rem;
        cursor: pointer;

        :hover {
            color: #ffffff6a;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function NavBar() {
    return(
        <Main>
            <a href="https://github.com/Strifexss" target="_blank">
            <h2>Matheus Henrique</h2>
            </a>
            <Links>
                <a href="#Landing"><h3>Inicio</h3></a>
                <a href="#Sobre"><h3>Sobre</h3></a>
                <a href="#Conhecimentos"><h3>Conhecimentos</h3></a>
                <a href="#Projetos"><h3>Projetos</h3></a>
                <a href="#Contato"><h3>Contato</h3></a>
            </Links>
        </Main>
    )
}