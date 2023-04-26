import logo from './logo.svg';
import './app.css'; 
import 'animate.css'; 
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
