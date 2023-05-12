import React, {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {createMovie, reset } from '../redux/movie/movieSlice'
import { toast} from 'react-toastify'

import { Link } from 'react-router-dom'


const CreateMovieForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [formData, setFormData]  = useState({
		name: '',
		year : '',
		budget : '',
		genre : ''
	})
	const { name, year, budget, genre } = formData
  
	const onChange = (e)=> {
		setFormData((prevState)=>({
			...prevState,
			[e.target.name] : e.target.value
		}))
	}

	const onSubmit = (e)=>{
		e.preventDefault()
		const movieData = {
			name, year, budget, genre
		}
		dispatch(createMovie(movieData))
		toast.success('Added new movie item')
		navigate('/dashboard')

	}



  return (
   <>
   <div className='container'>

  
			<form onSubmit={onSubmit} >
				<div classNameName='container'>
					<div classNameName='mt-4'>
					<Link to='/dashboard' className="btn btn-danger"  >Back</Link>
					</div>
				<div className="modal-header">						
					<h4 className="modal-title">Add Movie</h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Movie Name</label>
						<input
						name='name'
						value={name}
						onChange={onChange}
						type="text" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Year</label>
						<input
						name='year'
						value={year}
						onChange={onChange}
						type="number" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Budget (Million)</label>
						<input
						name='budget'
						value={budget}
						onChange={onChange}
						type="number" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input
						name='genre'
						value={genre}
						onChange={onChange}
						type="text" className="form-control" required/>
					</div>					
				</div>
				<div className="modal-footer">
					<Link  to='/dashboard' className="btn btn-default"  >Cancel</Link>
					<button   type='submit' className="btn btn-success"  >Add</button>
				</div>
				</div>
	
			</form>
			</div>
   </>
  )
}

export default CreateMovieForm