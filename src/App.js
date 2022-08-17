import './App.css';
import {Container,Row,Col} from 'reactstrap'
import Navi from './components/navi/Navi';
import CategoryList from './components/categories/CategoryList';
import ProductList from './components/products/ProductList';
function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Row>
          <Col xs="3"><CategoryList/></Col>
          <Col xs="9"><ProductList/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
