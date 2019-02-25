import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import {userAPI} from "../../utils/API";
import Logo from "../../components/Logo";

require('./Detail.css');


class Detail extends Component {
  state = {
    userForm: {},
    user: {}
  };
  componentDidMount() {
    userAPI.getUserForm(this.props.match.params.id)
      .then(res => this.setState({ userForm: res.data }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
      <Logo/>
      <Row>
          <Col size="md-12">
              <h2>Job Application Detailed Info</h2>
          </Col>
      </Row>
        <Row>
          <Col size="md-7">
           <div className="row detailInfo">  
           <dt className="col-sm-3">Company Name: </dt>
           <dd className="col-sm-9">{this.state.userForm.company}</dd>
          <dt className="col-sm-3">Position:</dt>
          <dd className="col-sm-9"> {this.state.userForm.position} 
            {/* <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p> */}
          </dd>

          <dt className="col-sm-3">Location:</dt>
          <dd className="col-sm-9">{this.state.userForm.location}</dd>
          <dt className="col-sm-3">Date applied:</dt>
          <dd className="col-sm-9">{this.state.userForm.date}</dd>
          </div>
          </Col>
          <Col size="md-5">
            <div id="comment">
              <h2>Your Comment</h2>
              <p>
                {this.state.userForm.detail}
              </p>
           </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col size="md-12">
          <blockquote className="blockquote text-center">
            <p className="mb-0">“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.”</p>
            <footer className="blockquote-footer"> Helen Keller <cite title="Source Title"></cite></footer>
          </blockquote>
          </Col>
        </Row>
        
        <Row>
          <Col size="md-6">
            <a id="backLink" href="/userForm" onClick={() => this.props.history.goBack()}>← Back to main page</a>
          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Detail;