import styled from "styled-components"
import LinkedinIcon from "../imgs/Linkedin.png"
import GithubIcon from "../imgs/IconsGithub.png"
import GmailIcon from "../imgs/Gmail.png"
import WhatsIcon from "../imgs/IconWhats.png"
const Main = styled.div`
    width: 100vw;
    height: 40vh;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 2rem;
        color: #300f7c;
    }
`

const Box = styled.div`
    height: 40vh;
    width: 100%;
    background-color: #16161B;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Icone = styled.div`
background-color: black;
    border: solid 4px #4115a8;
    margin: 2rem;
    border-radius: 1rem;
    width: 5.5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    :hover {
        transform: scale(110%);
    }
`

export default function Contato() {
    return(
        <Main id="Contato">
            <h1>Contato</h1>
            <Box>
              <Icone>
                <a href="https://www.linkedin.com/in/matheus-henrique-lins-de-melo-662b27235/" target="_blank">
                <img src={LinkedinIcon} alt="Linkedin" />
                </a>
              </Icone>
              <Icone>
                <a href="https://github.com/Strifexss" target="_blank">
                <img src={GithubIcon} alt="Github" />
                </a>
              </Icone>
              <Icone>
                <a href="https://wa.me/5583988003516" target="_blank">
                <img src={WhatsIcon} alt="Whatsapp" />
                </a>
              </Icone>
            </Box>
        </Main>
    )
}