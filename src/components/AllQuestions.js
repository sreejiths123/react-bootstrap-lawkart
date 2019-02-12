//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

//Internals
import QUESTIONS from '../Data/Questions';

const AllQuestions = (props) => (
    <Grid>
    {map(QUESTIONS, (question)=> (
	 <Jumbotron key={question.id} >
      
        <Link to={`/questions/${question.id}`}>
        <div >
          
        </div>
        <div >
          <h3 >{question.name}</h3>
          <h4 >{question.description}</h4>
        </div>
        </Link>
      
      </Jumbotron>
    ))}
  </Grid>
)

export default AllQuestions;
