import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import User from './components/User';
import Error from './components/Error';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signUp' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<Error />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
