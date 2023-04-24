import logo from './logo.svg';
import './App.css';
import main from './assets/images/modern-kitchen-living-room-black-vinyl-flooring.png'
import pencilRuler from './assets/images/pencilRuler.svg'
import pencilPaint from './assets/images/pencilPaint.svg'
import paintRoller from './assets/images/paintRoller.svg'
import checklist from './assets/images/checklist.svg'
import layers from './assets/images/layers.png'
import wallPaint from './assets/images/wallPaint.jpeg'
import handyMan from './assets/images/handyman.jpeg'
import houseRemodel from './assets/images/houseRemodel.jpeg'
import vinylFlooring from './assets/images/vinylFlooring.png'
import zebraShades from './assets/images/zebraShades.webp'
import doors from './assets/images/doors.jpeg'
import drivewaySeal from './assets/images/drivewaySeal.png'
import powerWash from './assets/images/powerWash.png'
import 'animate.css';
import Sidebar from './SideBar';
import ContactForm from './ContactForm';
import Testimonials from './testimonials';
import ReactGA from 'react-ga';
import { BrowserRouter, Route } from 'react-router-dom';
import QuoteForm from './QuoteForm';
import Home from './Home';

function App() {
  ReactGA.initialize('G-BD5MF5NH2F');
  return (
    <BrowserRouter>
    <Route path='/' exact component={Home}/>
     <Route path='/quoteForm' exact component={QuoteForm}/>
     </BrowserRouter>
  );
}

export default App;
