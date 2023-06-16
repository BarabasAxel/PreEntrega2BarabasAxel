import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsListContainer from './components/pages/itemListContainer/ProductsListContainer';
import ProductDetailContainer from './components/pages/productDetail/ProductDetail.jsx';

import{ BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './components/layout/Layout.jsx';
import CartContainer from './components/pages/cart/CartContainer.jsx';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<ProductsListContainer />}/>
          <Route path="/category/:categoryName" element={<ProductsListContainer />}/>
          <Route path="/itemDetail/:id" element={<ProductDetailContainer />}/>
          <Route path="/cart" element={<CartContainer />}/>
        </Route>
        <Route path="*" element={<h1>404 not found</h1>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
