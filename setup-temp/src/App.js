import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route path='/:id?' component={HomeScreen} />
      </div>
    </Router>
  );
};

export default App;
