import styled from "styled-components"
import Arquitetura from "../../imgs/Arquitetura.png"
import {motion} from 'framer-motion'
import VideoSite from '../../imgs/VideoSite.mp4'
import Github from '../../imgs/GithubIcon.png'
const Main = styled.div`
    width: 30rem;
    height: 25rem;
    background-color: #fff;
    margin: 2rem;
    display: grid;
    border-radius: 1rem ;
    grid-template-rows: 80% 20%;
    @media screen and (max-width: 900px){
        width: 23rem;
        height: 15rem;
    }

    section {
        width: 100%;
        height: 100%;

        video {
            display: none;
            width: 100%;
            height: 100%;
            object-fit:cover;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }

        img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            object-fit: cover;
        }

        :hover {
            img {
                display: none;
            }

            video {
                display: block;
            }
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

export default function ProjetosCom() {

    return(
        <Main>
            <section>
                <img src={Arquitetura}alt="Projeto" />
                <video controls>
                 <source src={VideoSite} type="video/mp4" />
                </video>
            </section>
            <Texto>
                <h2>Arquitetura Site</h2>
                <a href="https://github.com/Strifexss?tab=repositories">
                <img src={Github} alt="Github" />
                </a>
            </Texto>
        </Main>
    )
} 