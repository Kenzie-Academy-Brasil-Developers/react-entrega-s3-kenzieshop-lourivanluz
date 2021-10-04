import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Routes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
