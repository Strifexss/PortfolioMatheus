import styled from "styled-components"
import LinkedinIcon from "../imgs/Linkedin.png"
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
        <Main>
            <h1>Contato</h1>
            <Box>
              <Icone>
                <a href="">
                <img src={LinkedinIcon} alt="Linkedin" />
                </a>
              </Icone>
              <Icone>
                <a href="">
                <img src={LinkedinIcon} alt="Linkedin" />
                </a>
              </Icone>
              <Icone>
                <a href="">
                <img src={LinkedinIcon} alt="Linkedin" />
                </a>
              </Icone>
              <Icone>
                <a href="">
                <img src={LinkedinIcon} alt="Linkedin" />
                </a>
              </Icone>
            </Box>
        </Main>
    )
}