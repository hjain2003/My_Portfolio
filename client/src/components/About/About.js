import React from 'react';
import './About.css';
import img from '../../Assets/Harsh Jain.jpeg'

const About = () => {
  return (
    <>
      <div className="about_container">
        <span><h1>About Me</h1> &nbsp;&nbsp;&nbsp;&nbsp;
          <hr /></span>

        <div className="AboutContent_pic">
          <div className="abt_content">
            {/* <br /> */}
            <p> Hello! My name is Harsh Jain, currently a third-year student at<br/> Thapar University, Patiala, pursuing a Bachelor's degree in Computer<br/> Engineering. I have been immersed in various courses that have<br/> provided me with a solid foundation in computer science and engineering.</p>
            <br />
             <p> I am a dedicated full-stack web and app developer with a passion for<br/> building dynamic and user-friendly applications. Currently, I am also <br/>exploring the fascinating realms of machine learning and artificial<br/> intelligence to expand my knowledge and skills in these domains.</p>
            <br />
              <p>When I'm not coding, you can find me indulging in my hobbies of playing<br/> cricket, table tennis, and swimming.</p>
          </div>
          <div className="abt_pic">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
