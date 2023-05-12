import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EditMovieeForm from './pages/EditMovieForm';
import CreateMovieForm from './pages/CreateMovieForm';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {removeUser } from './redux/auth/authSlice'
import { useDispatch} from 'react-redux'

function App() {
  // const dispatch = useDispatch()
  // window.addEventListener('beforeunload', () => {
  //   dispatch(removeUser())
  // }); for remove user and log out when refreshing tab or close window. Currently Disabled
  return (
<>
<Router>
<Navbar />

  <Routes>
    <Route path='/' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/create' element={<CreateMovieForm />} />
    <Route path='/edit/:id' element={<EditMovieeForm />} />
  </Routes>
</Router>
<ToastContainer/>

</>
  );
}
export default App;
