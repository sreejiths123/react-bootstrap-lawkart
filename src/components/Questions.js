import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './css/style.css';
import './Questions.css';
import './css/mdb.css';

import AllQuestions from './AllQuestions'
import QUESTIONS from '../Data/Questions';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: null
    };
  }

  async componentDidMount() {
    const questions = (await axios.get('http://localhost:8081/')).data;
    this.setState({
      questions,
    });
  }
  
  filterQuestions(event){
	  
	    var updatedList = this.state.questions;
		updatedList = updatedList.filter(function(item){
		  return item.toLowerCase().search(
			event.target.value.toLowerCase()) !== -1;
		});
		this.setState({questions: updatedList});
  }

  render() {
    return (
	
      <div className="container">
        <div className="row">
          <Link to="/new-question">
            <div className="card text-white bg-light-blue mb-3">
              <div className="card-header">Need help? Ask here!</div>
              <div className="card-body">
                <h4 className="card-title">+ New Question</h4>
                <p className="card-text">Don't worry. Help is on the way!</p>
              </div>
            </div>
          </Link>
		
		 <div class="banner-search">
                <div class="input-group">       
                        <input type="text" class="" name="x" placeholder="Search term..." onChange={this.filterQuestions}/>
                        <span class="input-group-btn">
                            <button class="button" type="button"><span class="fa fa-search"></span></button>
                        </span>
                </div>
                <div class="lawyer-online">
                        1000 +  Questions available now online
                </div>
        </div>	
		<AllQuestions filter={this.state.questions}/>
          {this.state.questions === null && <p>Loading questions...</p>}
          {
            this.state.questions && this.state.questions.map(question => (
              <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/question/${question.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Answers: {question.answers}</div>
                    <div className="card-body">
                      <h4 className="card-title">{question.title}</h4>
                      <p className="card-text">{question.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Questions);