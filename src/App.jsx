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
import AdminPanel from './AdminPanel';
import Cart from './Cart';
import PaymentForm from './PaymentForm';
import ShowCategories from './ShowCategories';
import AddCollection from './AddCollections';
import ShowCollections from './ShowCollections';

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
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/payment/:amount" element={<PaymentForm />} />
        <Route path="/admin-dashboard/showcategories" element={<ShowCategories />} />
        <Route path="/addcollection" element={<AddCollection />} />
        <Route path="/admin-dashboard/addcollection/:id" element={<AddCollection />} />
        <Route path="/admin-dashboard/showcollections" element={<ShowCollections />} />

        <Route path='/cart' element={<Cart />} />

        {/* Route for logged-in users */}
        <Route path="/user-panel" element={<UserPanel />} />

        {/* Route for admin-panel and its sub-routes */}
        <Route path="/admin-dashboard/*" element={<AdminPanel />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;