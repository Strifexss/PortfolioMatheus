import styled from "styled-components"
import ProjetosCom from "./Reusaveis/ProjetosReusaveis"
import SecuritySite from "../imgs/AgencySecurity.PNG"
import PortfolioSite from "../imgs/PortfolioSite.PNG"
import Foodie from "../imgs/Foodie.PNG"
import StyledProject from "../imgs/StyledProject.PNG"
import RBSite from "../imgs/RbSite.PNG"
const Main = styled.div`
    width: 100vw;
    height: 100%;
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
                <ProjetosCom imagem = {SecuritySite} titulo = "Site de CyberSegurança" Repositorio = 'https://github.com/Strifexss/SecurityAgencySite'  Site = 'https://strifexss.github.io/SecurityAgencySite/'/>
                <ProjetosCom imagem = {PortfolioSite} titulo = "Portfolio Pessoal" Site = "portfolio-matheus-eta.vercel.app" Repositorio = "https://github.com/Strifexss/PortfolioMatheus"/>
                <ProjetosCom imagem = {Foodie} titulo = "Restaurante Foodie"/>
                <ProjetosCom imagem = {RBSite} titulo = "RBDesigners"/>
                <ProjetosCom imagem = {StyledProject} titulo = "Ui Gamer"/>
            </section>
        </Main>
    )
}