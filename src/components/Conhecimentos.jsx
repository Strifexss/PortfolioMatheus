import styled from "styled-components"
import ConhecimentosComp from "./Reusaveis/ConhecimentosReusaveis"
import HtmlIcon from "../imgs/Icons/html.png"
import CssIcon from "../imgs/Icons/CssIcon.png"
import JavaScriptIcon from "../imgs/Icons/js.png"
import ReactIcon from "../imgs/Icons/ReactIcon.png"
import NextJsIcon from "../imgs/Icons/NextJsIcon.png"
import TailwindIcon from "../imgs/Icons/TailwindIcon.png"
import StyledComponentsIcon from "../imgs/Icons/Styled-ComponentsIcon.png"
import AxiosIcon from "../imgs/Icons/AxiosIcon.svg"
import NodeJsIcon from "../imgs/Icons/NodeJsIcon.png"
import ExpressIcon from "../imgs/Icons/ExpressIcon.png"
import React from "react"

const Main = styled.div`
    width: 100vw;
    height: 90vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        height: 110vh;
    }

    section {
        h1 {
            color: #6129E2;
            font-size: 2rem;
            text-align: center;            
        }

        p {
            color: #9c9797;
            margin-bottom: 2rem;
        }
    }
`
const Box = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: #16161B;
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90vh;
}
`
const Texto = styled.div`
    margin: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    
    @media screen and (max-width: 900px) {
      display: none;
        
    }

    h1 {
        margin: 2rem;
    }
`

const Icones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export default function Conhecimentos() {
    return(
        <Main id="Conhecimentos">
            <section>
            <h1>Conhecimentos</h1>
            <p>Clique nos icones para mais informações</p>
            </section>
            <Box>
                <Texto>
                    <h1 id="Nome">Html</h1>
                    <h1 id="Texto">Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.</h1>
                </Texto>
                <Icones>
                    <ConhecimentosComp imagem = {HtmlIcon} Nome = "Html" Texto = 'Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.'/>
                    <ConhecimentosComp imagem = {CssIcon} Nome = "Css" Texto = 'O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.'/>
                    <ConhecimentosComp imagem = {JavaScriptIcon} Nome = "JavaScript" Texto = "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc."/>
                    <ConhecimentosComp imagem = {ReactIcon} Nome = "ReactJs" Texto = "O React, mais conhecido como ReactJS, é uma biblioteca do Java Script, desenvolvido pelo Facebook, utilizado em desenvolvimentos Web de front end, que tem por objetivo aprimorar as interfaces dos projetos, tornando-as mais harmônicas, rápidas, impossibilitando qualquer tipo de complexidade entre elas, facilitando o processo de programação."/>
                    <ConhecimentosComp imagem = {NextJsIcon} Nome = "NextJs" Texto = "Foco em produção e eficiência, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto."/>
                    <ConhecimentosComp imagem = {TailwindIcon} Nome = "Tailwind" Texto = "O Tailwind é um framework do CSS que nos fornece classes utilitárias de propósito único que são, em sua maioria, opinativas e que nos ajudam a projetar nossas páginas da web diretamente de dentro de nossos arquivos de marcação ou . js/. jsx/."/>
                    <ConhecimentosComp imagem = {StyledComponentsIcon} Nome = "Styled Components" Texto = "O Styled Components é uma biblioteca (lib) do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript."/>
                    <ConhecimentosComp imagem = {AxiosIcon} Nome = "Axios" Texto = "O Axios é um biblioteca que permite uma integração do seu projeto React para qualquer serviço de API disponível. Ele é uma biblioteca leve e também uma alternativa para quem usa o fetch api."/>
                    <ConhecimentosComp imagem = {NodeJsIcon} Nome = "NodeJs" Texto = "Como um ambiente de execução JavaScript assíncrono orientado a eventos, o Node.js é projetado para desenvolvimento de aplicações escaláveis de rede."/>
                    <ConhecimentosComp imagem = {ExpressIcon} Nome = "Express" Texto = "O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. Integrar view engines para inserir dados nos templates. Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta."/>
                </Icones>
            </Box>
        </Main>
    )
}