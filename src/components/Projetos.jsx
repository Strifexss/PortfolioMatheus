import styled from "styled-components"
import ProjetosCom from "./Reusaveis/ProjetosReusaveis"
const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media screen and (max-width: 900px){
        height: 100%;
    }

    h1 {
        color: #6129E2;
        margin-bottom: 3rem;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`

export default function Projetos() {
    return(
        <Main>
            <h1>Projetos</h1>
            <section>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
                <ProjetosCom/>
            </section>
        </Main>
    )
}