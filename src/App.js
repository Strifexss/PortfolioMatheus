import Landing from "./components/landing";
import Sobre from "./components/Sobre";
import Conhecimentos from "./components/Conhecimentos";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Landing/>
      <Sobre/>
      <Conhecimentos/>
      <Projetos/>
      <Contato/>
      <NavBar/>
    </div>
    );
}

export default App;
