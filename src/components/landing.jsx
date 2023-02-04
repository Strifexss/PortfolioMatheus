import styled from "styled-components"
import backgroundImg from "../imgs/BlackMontain.jpg"
import {motion} from "framer-motion"

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
    button {
        width: 10rem;
        height: 3rem;
        border: none;
        border-radius: 0.8rem;
        background: rgb(97,41,226);
        background: linear-gradient(90deg, rgba(97,41,226,1) 0%, rgba(36,14,87,1) 100%);
        color: #fff;
        margin-top: 3rem;
        cursor: pointer;
        transition: 0.1s;
        a {
            text-decoration: none;
            color: inherit;
        }

        :hover {
            background-color: #300f7c;
        }
    }

    h1 {
        text-align: center;
        color: #fff;
        font-size: 3rem;
        span {
            color: #6129E2;
        }
    }

    h2 {
        color: #ffffff;
        font-weight: normal;
        text-align: center;
    }

`

export default function Landing() {
    return(
        <Main style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: 'fixed'
          }}>
            <motion.h1
            initial={{
                opacity: 0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                delay: 0.5,
                duration: 2                
            }}
            >
            Olá, eu me chamo <span>Matheus Henrique</span> <br />
            Seja bem vindo ao meu Portfolio
            </motion.h1>
            <h2>
             Desenvolvedor Front-End
            </h2>
            <motion.button
            initial={{
                y: 1000
            }}
            animate={{
                y:0
            }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
            >
               <a href="#Sobre"> <h3>Explorar</h3></a>
            </motion.button>
        </Main>
    )
}