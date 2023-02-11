import styled from "styled-components"
import Gmail from "../imgs/Gmail.png"
import Linkedin from "../imgs/Linkedin.png"
import SobreImg from "../imgs/SobreImagem.jpg"

const Main = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px) {
        height: 110%;
    }

    

`

const Box = styled.div`
    width: 60vw;
    height: 60vh;
    background-color: #16161B;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 0;
        justify-content: center;
        align-items: center;
}

@media screen and (max-width: 1350px) and (min-width: 901px) {
     width: 95vw ;
    }

@media screen and (max-width: 1630px) and (min-width: 1350px) {
     width: 80vw ;
    }


`

const Texto = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 3rem;
    padding: 1rem;

    @media screen and (max-width: 900px) {
        align-items: center;
        padding: 1rem;
        transform: translateX(-1.5rem);
    }
    h1 {
        color: #6129E2;
        margin-top: 2rem ;
    }

    h4 {
        color: #fff;
        margin-top: 2rem;
        text-align: left;
        @media screen and (max-width: 900px) {
            text-align: center;
        }
    }

    p {
        color: #fff;
    }

    section {
        display: flex;
        justify-content: flex-start;

        @media screen and (max-width: 900px) {
            justify-content: center;
        }

        img {
            padding: 1rem;
            background-color: #040405;
            border-radius: 1rem;
            margin: 0.5rem;
            margin-top: 2rem;
            width: 4rem;
            height: 4rem;
            cursor: pointer;
            transition: 1rem;
            :hover {
                transform: scale(110%);
            }
        }
    }

`

const Imagem = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30rem;
        height: auto;
        border-radius: 2rem;

        @media screen and (max-width: 900px) {
            width: 20rem;
            margin-top: 2rem;
        }
    }
`


export default function Sobre() {
    return(
        <Main id="Sobre">
            <Box>
                <Imagem>
                    <img src={SobreImg} alt="Eu" />
                </Imagem>
                <Texto>
                    <h1>Quem sou eu?</h1>
                    <h1>Matheus Henrique</h1>
                    <p>Front-Developer</p>
                    <h4>Prazer me chamo Matheus, sou estudante de Ciências da Computação e sou um Desenvolvedor Web, apaixonado por tecnologia desde muito pequeno, no momento estudo bibliotecas e framworks voltados para o front-end porém possuo conhecimento em tecnologias back-end como NodeJs, Express e Sql, busco uma primeira oportunidade no mercado de trabalho, estou apto a aprender qualquer nova tecnologia que for necessária.</h4>
                   <section>
                    <img src={Linkedin} alt="Instagram" />
                    <img src={Gmail} alt="Instagram" />
                   </section>
                </Texto>
            </Box>
        </Main>
    )
}