import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
