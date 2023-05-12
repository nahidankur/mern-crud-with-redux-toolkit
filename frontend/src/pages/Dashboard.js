import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { Link, useNavigate} from 'react-router-dom'

import MovieTable from '../component/MovieTable'
import {getMovies, reset } from '../redux/movie/movieSlice'
import {useDispatch, useSelector } from 'react-redux'
import Spinner from '../component/Spinner'
import { toast } from 'react-toastify'


const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state)=> state.auth)
    const { movies, isLoading, isError, message } = useSelector((state)=> state.movie)

    const [loading, setLoading] = useState(true);

    useEffect(()=> {
       
        if(!user){
            navigate('/')
        }

        dispatch(getMovies()).then(()=>setLoading(false))


    }, [navigate, user, dispatch, message, isError])

    if(isLoading){
        return <Spinner />
    }  
  return (
 <>
 
{ !loading && <MovieTable movies={movies} /> }


 </>
  )
}

export default Dashboard