import { Container } from "react-bootstrap";

// Imports for external Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          {/* <h1>Welcome to DigiShop</h1> */}
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
