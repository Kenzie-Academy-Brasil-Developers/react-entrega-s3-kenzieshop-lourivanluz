import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Routes } from "./routes/routes";

function App() {
  // teria um state de list pra mostar passaria ela para o header
  return (
    <div className="App">
      <Header>header</Header>
      <Main>
        <Routes />
      </Main>
      <Footer>footer</Footer>
    </div>
  );
}

export default App;
