import React, { useEffect } from 'react'
import './profile.css'
import {useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'


const Profile = () => {
    const navigate  = useNavigate()
    const { user } = useSelector((state)=> state.auth)
    const { movies } = useSelector((state)=> state.movie)

    useEffect(()=> {
        if(!user){
            navigate('/')
        }

    }, [navigate, user])


  return (
   <>

<div className="container bootstrap snippets bootdey">
<div className="panel-body inf-content">
    <div className="row">
        <div className="col-md-4">
            <img  className="img-circle img-thumbnail isTooltip masti" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            <ul title="Ratings" className="list-inline ratings text-center">
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
            </ul>
        </div>
        <div className="col-md-6">
            <strong>Information</strong><br/>
            <div className="table-responsive">
            <table className="table table-user-information">
                <tbody>
              
                    <tr>    
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-user  text-primary"></span>    
                                Name                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            { user && user.name }     
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-cloud text-primary"></span>  
                                Email                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            { user && user.email }
                        </td>
                    </tr>

                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-bookmark text-primary"></span> 
                                Total Movie                                                 
                            </strong>
                        </td>
                        <td className="text-primary">
                           { movies.length > 0 ? movies.length : 'No movie added yet' }
                        </td>
                    </tr>                                  
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div>                     
   </>
  )
}

export default Profile