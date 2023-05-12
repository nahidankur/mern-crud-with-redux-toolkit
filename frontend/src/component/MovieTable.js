import React, {useEffect} from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import {getMovies, reset, deleteMovie } from '../redux/movie/movieSlice'
import {useSelector, useDispatch } from 'react-redux'
import {toast } from 'react-toastify'

const MovieTable = ({movies}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()


  return (
    <>
      <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Movie <b>Table</b></h2>
					</div>
					<div className="col-sm-6">
						<Link to='/create' className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Movie Item</span></Link>
						
					</div>
				</div>
			</div>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						
						<th>Movie Name</th>
						<th>Year</th>
						<th>Budget (Million)</th>
						<th>Genre</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
						{
							movies.length > 0 ? (<>
							{movies.map((movie)=> {
								return ( <> 
								<tr key={movie._id}>
									<td>{movie.name}</td>
						<td>{movie.year}</td>
						<td>{movie.budget}</td>
						<td>{movie.genre}</td>
						<td>
							<Link to={`/edit/${movie._id}`} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
							<Link onClick={()=>{
								dispatch(deleteMovie(movie._id))
								toast.success('Delete Successful')
							} } className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Link>
						</td>
						</tr>
								</> )
							})}
							</>) : (<>
							</>)
						}
						
					
					
				
				
				
				</tbody>
			</table>
			{movies.length == 0 && <h2>Click the add button to add new entry</h2>}
			<div className="clearfix">
				<div className="hint-text">Showing <b>{movies.length}</b> { movies.length > 1 ? 'entries' : 'entry' } </div>
			
			</div>
		</div>
	</div>        
</div>
    </>
  )
}

export default MovieTable