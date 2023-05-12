import React, {useState, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {updateMovie, getMovies, reset } from '../redux/movie/movieSlice'
import Spinner from '../component/Spinner'
import {toast } from 'react-toastify'

const EditMovieForm = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { movies, isLoading, isError, messsage } = useSelector((state)=> state.movie)
	const { user } = useSelector((state)=> state.auth)
	const dispatch = useDispatch()

	const [formData, setFormData ] = useState({
		name : '' ,
		year : '',
		budget : '',
		genre : ''

	})
	const { name, year, budget, genre }  = formData

	useEffect(()=> {
		if(movies) {
			dispatch(getMovies())
		}
	  if(id){
		const singleMovie = movies.find((movie)=>movie._id === id)
		setFormData(singleMovie)
	  }
		

	}, [dispatch])

	const onChange = (e)=> {
		setFormData((prevState)=> ({
			...prevState,
			[e.target.name] : e.target.value
		}))

	}

	const onSubmit = (e)=>{
		e.preventDefault()
		const movieData = {
			name, year, budget, genre, id

		}
		console.log(movieData)
		
		dispatch(updateMovie(movieData))
		toast.success('Edit Successful')
		dispatch(getMovies())
		navigate('/dashboard')

		


	}
	if(isLoading) {
		return <Spinner />
	}

  return (
    <>

	
	
	<form onSubmit={onSubmit}>
		<div className='container'>
	         <div classNameName='mt-4'>
					<Link to='/dashboard' className="btn btn-danger"  >Back</Link>
					</div>
				<div className="modal-header">						
					<h4 className="modal-title">Edit Movie  </h4>
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
						type="text" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Budget</label>
						<input
						name = 'budget'
						value={budget}
						onChange={onChange}
						type="text" className="form-control" required/>
					</div>	
					<div className="form-group">
						<label>Genre</label>
						<input
						name = 'genre'
						value={genre}
						onChange={onChange}
						type="text" className="form-control" required/>
					</div>					
				</div>
				<div className="modal-footer">
				<Link to='/dashboard'  className='btn btn-default'>Cancel</Link>
					<button type='submit' className='btn btn-success'> Update </button>
				</div>
				</div>
			</form>

	

		

    </>
  )
}

export default EditMovieForm