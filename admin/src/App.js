import './App.css';
import Login from './routes/login'
import Main from './routes/main'
import { Switch, Route, useLocation} from 'react-router-dom'

// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <Switch>
      <Route path="/login" children={<Login/>}></Route>
      <Route path="/main" children={<Main/>}></Route>
    </Switch>
  );
}

export default App;
