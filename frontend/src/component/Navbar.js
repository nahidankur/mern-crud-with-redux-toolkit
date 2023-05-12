import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {useSelector, useDispatch } from 'react-redux'
import {logout, reset } from '../redux/auth/authSlice'
import {useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify'



const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {user} = useSelector((state)=> state.auth)

	const onClick = ()=> {
		toast.success('Logout Successful')
		dispatch(logout())
		dispatch(reset())
		navigate('/')

	}


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
	<Link to='/' className="navbar-brand">Movie<b>Table</b></Link>  		
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>

	<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
		<div className="navbar-nav">			
			<div className="nav-item dropdown">
				<Link to='/profile'   className="nav-item nav-link "> {user && user.name} </Link>
            </div>

		</div>
	
		<div className="navbar-nav ml-auto action-buttons">
			{
				user ? (<>
				  <div className="nav-item ">
				<Link to='/dashboard'  className="nav-link dropdown-toggle mr-4">Dashboard</Link>
			</div>
			<div className="nav-item">
				<Link onClick={onClick}   className="btn btn-primary dropdown-toggle sign-up-btn">Logout</Link>
            
			</div>
				</>) : (<>
				<div className="nav-item ">
				<Link to='/login'  className="nav-link dropdown-toggle mr-4">Login</Link>
			</div>
            <div className="nav-item ">
				<Link to='/'  className="nav-link dropdown-toggle mr-4">Register</Link>
			</div>
				</>)
			}
			
          
        </div>
	</div>
</nav>
    </> 
  )
}

export default Navbar