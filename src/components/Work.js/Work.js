import React from 'react';
import './Work.css';
import Card from '../Card/Card';

const Work = (props) => {
  return (
    <>
      <div className="work_container">
        <span><h1>Work</h1> &nbsp;&nbsp;&nbsp;&nbsp;
          <hr /></span>

        <div class="wrapper">
          <div class="lamp swing"></div>
        </div>
      </div>

      <div className="card_space">
        <div className="row">
          <Card project_name="Smart Attendance System" description="An attendance system based on facial recognition"/>
        </div>
      </div>
    </>
  )
}

export default Work
