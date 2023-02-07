import styled from "styled-components"
import ProjetosCom from "./Reusaveis/ProjetosReusaveis"
import SecuritySite from "../imgs/AgencySecurity.PNG"
import PortfolioSite from "../imgs/PortfolioSite.PNG"
import Foodie from "../imgs/Foodie.PNG"
import StyledProject from "../imgs/StyledProject.PNG"
import RBSite from "../imgs/RbSite.PNG"
import SecurityVideo from "../imgs/videos/VideoSite.mp4"
import RbEditVideo from "../imgs/videos/RBEdit.mkv"
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
                <ProjetosCom video = {SecurityVideo} imagem = {SecuritySite} titulo = "Site de CyberSegurança" Repositorio = 'https://github.com/Strifexss/SecurityAgencySite'  Site = 'https://strifexss.github.io/SecurityAgencySite/' texto = 'Projeto desenvolvido com o intuito de prática e estudos, para a criação do site foi utilizada a biblioteca Reactjs junto com outras bibliotecas como Syled-Components e React-Reveal, projeto 100% responsivo'/>
                <ProjetosCom imagem = {PortfolioSite} titulo = "Portfolio Pessoal" Site = "portfolio-matheus-eta.vercel.app" Repositorio = "https://github.com/Strifexss/PortfolioMatheus"/>
                <ProjetosCom imagem = {Foodie} titulo = "Restaurante Foodie"/>
                <ProjetosCom video = {RbEditVideo} imagem = {RBSite} titulo = "RBDesigners" Site = "https://strifexss.github.io/RBPORTFOLIO/" Repositorio = "https://github.com/Strifexss/RBPORTFOLIO"/>
                <ProjetosCom imagem = {StyledProject} titulo = "Ui Gamer"/>
                
            </section>
        </Main>
    )
}