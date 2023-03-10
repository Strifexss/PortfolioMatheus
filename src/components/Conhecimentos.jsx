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
        margin-top: 5rem;
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
    @media screen and (max-width: 1450px) {
        height: 110vh;
        margin-bottom: 8rem;
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
            <p>Clique nos icones para mais informa????es</p>
            </section>
            <Box>
                <Texto>
                    <h1 id="Nome">Html</h1>
                    <h1 id="Texto">Sigla para HyperText Markup Language ??? Linguagem de Marca????o de Hipertexto ???, o HTML ?? o componente base da web. Isso quer dizer que ele permite a constru????o de websites e a inser????o de novos conte??dos, como imagens e v??deos, por meio dos hipertextos.</h1>
                </Texto>
                <Icones>
                    <ConhecimentosComp imagem = {HtmlIcon} Nome = "Html" Texto = 'Sigla para HyperText Markup Language ??? Linguagem de Marca????o de Hipertexto ???, o HTML ?? o componente base da web. Isso quer dizer que ele permite a constru????o de websites e a inser????o de novos conte??dos, como imagens e v??deos, por meio dos hipertextos.'/>
                    <ConhecimentosComp imagem = {CssIcon} Nome = "Css" Texto = 'O CSS tem a tarefa de separar o conte??do do site de sua apresenta????o visual, alterando elementos como cor do texto, fonte e espa??amento entre blocos, assim como todo o aspecto est??tico de uma p??gina.'/>
                    <ConhecimentosComp imagem = {JavaScriptIcon} Nome = "JavaScript" Texto = "JavaScript ?? uma linguagem de programa????o que permite a voc?? implementar itens complexos em p??ginas web ??? toda vez que uma p??gina da web faz mais do que simplesmente mostrar a voc?? informa????o est??tica ??? mostrando conte??do que se atualiza em um intervalo de tempo, mapas interativos ou gr??ficos 2D/3D animados, etc."/>
                    <ConhecimentosComp imagem = {ReactIcon} Nome = "ReactJs" Texto = "O React, mais conhecido como ReactJS, ?? uma biblioteca do Java Script, desenvolvido pelo Facebook, utilizado em desenvolvimentos Web de front end, que tem por objetivo aprimorar as interfaces dos projetos, tornando-as mais harm??nicas, r??pidas, impossibilitando qualquer tipo de complexidade entre elas, facilitando o processo de programa????o."/>
                    <ConhecimentosComp imagem = {NextJsIcon} Nome = "NextJs" Texto = "Foco em produ????o e efici??ncia, o Nextjs busca reunir diversas funcionalidades como renderiza????o hibrida e est??tica de conte??do, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para voc?? iniciar seu projeto."/>
                    <ConhecimentosComp imagem = {TailwindIcon} Nome = "Tailwind" Texto = "O Tailwind ?? um framework do CSS que nos fornece classes utilit??rias de prop??sito ??nico que s??o, em sua maioria, opinativas e que nos ajudam a projetar nossas p??ginas da web diretamente de dentro de nossos arquivos de marca????o ou . js/. jsx/."/>
                    <ConhecimentosComp imagem = {StyledComponentsIcon} Nome = "Styled Components" Texto = "O Styled Components ?? uma biblioteca (lib) do React e do React Native que nos permite criar componentes de estilo ao escrever c??digos CSS dentro de um arquivo JavaScript."/>
                    <ConhecimentosComp imagem = {AxiosIcon} Nome = "Axios" Texto = "O Axios ?? um biblioteca que permite uma integra????o do seu projeto React para qualquer servi??o de API dispon??vel. Ele ?? uma biblioteca leve e tamb??m uma alternativa para quem usa o fetch api."/>
                    <ConhecimentosComp imagem = {NodeJsIcon} Nome = "NodeJs" Texto = "Como um ambiente de execu????o JavaScript ass??ncrono orientado a eventos, o Node.js ?? projetado para desenvolvimento de aplica????es escal??veis de rede."/>
                    <ConhecimentosComp imagem = {ExpressIcon} Nome = "Express" Texto = "O Express oferece solu????es para: Gerenciar requisi????es de diferentes verbos HTTP em diferentes URLs. Integrar view engines para inserir dados nos templates. Definir as configura????es comuns da aplica????o web, como a porta a ser usada para conex??o e a localiza????o dos modelos que s??o usados para renderizar a resposta."/>
                </Icones>
            </Box>
        </Main>
    )
}