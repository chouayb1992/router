import React from 'react';
import {Card , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function MovieCard ({movie}) {

 const {title, description, posterURL, rating} = movie;
    
 return(

     <div> 
       
              <Card  style={{ width: '19rem' }}>
              <Card.Img variant="top"  src={posterURL}  alt={title} />
              <Card.Body>
              <h3>{title}</h3> 
              <h6>{description} </h6>
              <p>rating:</p><h1>{rating} </h1>
              <Link to={`/trailer/${movie.id}`}><Button>Trailer</Button></Link>
              </Card.Body>
            </Card>
      
    </div>
    
        
    )}