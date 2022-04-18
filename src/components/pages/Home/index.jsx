import { useHistory, useParams } from "react-router-dom"
import { ContainerSection } from "./style";

const Home = () => {
      const { name } = useParams();

      const history = useHistory();

      return (
            <ContainerSection>
                  <h1>Seja Bem vindo, {name}!</h1>
                  <p>Parabéns! Login realizado!</p>
                  <button onClick={() => history.push('/login')}>Desconectar</button>
            </ContainerSection>
      )
}

export default Home