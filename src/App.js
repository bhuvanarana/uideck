import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import Services from './components/services'
import Price from './components/pricing.jsx'
import Calltoaction from './components/calltoaction'
import Testimonial from './components/testimonialcontainer/testimonial'
import Contact from './components/contact'
import Footer from './components/footer'



import './components/assets/css/bootstrap.min.css'
import './components/assets/css/default.css'
import './components/assets/css/LineIcons.css'
import './components/assets/css/magnific-popup.css'
import './components/assets/css/style.css'
import './components/assets/css/style.css.map'



function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Price/>
      <Calltoaction/>
    
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
