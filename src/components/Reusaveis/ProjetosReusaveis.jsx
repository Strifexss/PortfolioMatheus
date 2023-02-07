import styled from "styled-components"
import Arquitetura from "../../imgs/Arquitetura.png"
import {motion} from 'framer-motion'

import Github from '../../imgs/GithubIcon.png'
import { useState } from "react"
const Main = styled.div`
    width: 35rem;
    height: 25rem;
    background-color: #fff;
    margin: 2rem;
    display: grid;
    border-radius: 1rem ;
    grid-template-rows: 80% 20%;
    cursor: pointer;
    transition: 0.1s;
    :hover {
        transform: scale(110%);
    }

    @media screen and (max-width: 900px){
        width: 23rem;
        height: 15rem;
    }

    section {
        width: 100%;
        height: 100%;


        img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            object-fit: cover;
        }

      

    }
`

const Texto = styled.div`
    width: 100%;
    height: 100%;
    background-color: #6129E2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius:1rem;
    cursor: pointer;

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 1rem;

        :hover {
            scale: 110%;
        }
    }

    h2 {
        color: #fff;
    }

  
`

const Modal = styled.div`
    width: 80rem;
    height: 40rem;
    background-color: #1d123a;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
      left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: grid;
    grid-template-rows: 15% 85%;
    border-radius: 2rem;
    section {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            border: 2px solid #4924a7;
            width: 7rem;
            height: 3rem;
            border-radius: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1rem;
            cursor: pointer;
            :hover {
                border: 2px solid #301674;
            }
        }
    }

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: cennter;
        width: 100vw;
        height: 100vh;
    }

   
`

const ModalPrincipal  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;


video {
        width: 40rem;
        height: auto;
        margin: 1rem;

        @media screen and (max-width: 900px){
            width: 25rem;
        }
        }

`

const Atalhos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        margin: 1rem;
        background-color: #6129E2;
        width: 7rem;
        height: 3rem;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 1rem;
        cursor: pointer;

        :hover {
            background-color: #311574;
        }
    }
`


const TextoModal = styled.div`
    text-align: center;
    color: #9b9b9b;
    margin-top: 1rem;
    padding: 1rem;
    h1 {
        margin: 0;
    }
`
const Flexar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export default function ProjetosCom(props) {
    const [abrir, setAbrir] = useState(false)

    return(
        <>
        <Main onClick={() => {
                    setAbrir(!abrir)
                    console.log(abrir)
                }}>
            <section>
                <img src={props.imagem}alt="Projeto" />
            </section>
            <Texto>
                <h2 >{props.titulo}</h2>
            </Texto>
          
        </Main>
        {abrir &&
            <Modal as={motion.div}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{}}
          
            > 
            <section>
            <h1 onClick={() => {
                setAbrir(!abrir)
            }}> Fechar</h1>
            </section>
             <Flexar>
                <ModalPrincipal>
                    <video src={props.video} autoPlay loop controls></video>
                    <Atalhos>
                        <a href={props.Site}><button>Acessar Site</button></a>
                        <a href={props.Repositorio}><button>Repositorio</button></a> 
                    </Atalhos>
                </ModalPrincipal>
                <TextoModal>
                    <h1>{props.titulo}</h1>
                        <h2>{props.texto}</h2>
                    </TextoModal>
                    </Flexar>
            </Modal>
        }
        </>
    )
} 