import React from 'react'
import './Mainpage.css'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const Mainpage = () => {
  return (
    <>
    {/* <Cursor isGelly={true} /> */}
      <div className="main_page_container" data-cursor-size="40px" data-cursor-color="#61dbfb" >
        <div className="mainpage_content">
          <span className='title'>Hello! I am</span>
          <h1>HARSH JAIN</h1>
          <h2>Driven By Passion,Fueled By Code</h2>
          <br /><br />
          <div className="mainContent_coffee">
            <p>Welcome to my portfolio! I'm a passionate Full-Stack Developer dedicated<br /> to crafting functional websites and applications that solves real-life<br /> problems.Additionally, I'm an ML/AI enthusiast, currently expanding <br /> my knowledge in this exciting field to unlock the potential of <br />intelligent technologies.</p>

            <div id="container">
              <div class="steam" id="steam1"> </div>
              <div class="steam" id="steam2"> </div>
              <div class="steam" id="steam3"> </div>
              <div class="steam" id="steam4"> </div>

              <div id="cup">
                <div id="cup-body">
                  <div id="cup-shade"></div>
                </div>
                <div id="cup-handle"></div>
              </div>

              <div id="saucer"></div>

              <div id="shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainpage
