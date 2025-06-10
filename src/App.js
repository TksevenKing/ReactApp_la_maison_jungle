import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ShoppingList from './components/ShoppingList';
import logo from '../src/assets/leafLogo.png';
// import QuestionForm from './components/QuestionForm';
import Footer from './components/Footer';
import { useState } from 'react';


  function App() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Card cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}



export default App;
