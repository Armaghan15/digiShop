import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Imports for external Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            {/* <h1>Welcome to DigiShop</h1> */}
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
