import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './footer';
import Header from './header';
import Carousel from './Carousel';
import Categories from './Categories';
import ShopByCollection from './Collection';
import AllCategories from './AllCategories';
import AllProducts from './AllProducts';        
import Allcollections from './Allcollection';
import PerticularGift from './PerticularGift';
import Login from './Login';
import Register from './Register';
import ProductDetails from './Product';
import UserPanel from './Home'; 

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Categories />
              <ShopByCollection />
            </>
          }
        />
        <Route path="/categories" element={<Categories />} />
        <Route path='/collections' element={<Allcollections />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path="/collection/gift" element={<PerticularGift />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/collections' element={<ShopByCollection />} />
        <Route path='/product' element={<ProductDetails />} />

        {/* New route for logged-in users */}
        <Route path="/user-panel" element={<UserPanel />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
