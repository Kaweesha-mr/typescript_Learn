import { Routes, Route } from "react-router";
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar/>
      <Container className="mb-4">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />



        </Routes>
      </Container>
    </>



  )

}
export default App;