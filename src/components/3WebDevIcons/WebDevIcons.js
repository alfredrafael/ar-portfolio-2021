import React from "react";
import "./cssWebDevIcons.css";

const WebDevIcons = (props) => {
  return (
    <React.Fragment>
      <div className="icons-row-container">
        <div className="icons-row">
          <div className="js-div" id="js-icon">
            <i className="devicon-javascript-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="js-icon" className=''>
                Javascript
            </UncontrolledTooltip> */}
          </div>

          <div className="react-div" id="react-icon">
            <div>
              <i className="devicon-react-original-wordmark dev-icons"></i>

              {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="react-icon" className=''>
                React
            </UncontrolledTooltip> */}
            </div>
          </div>

          <div className="css-div" id="css-icon">
            <i className="devicon-css3-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="css-icon" className=''>
                CSS3
            </UncontrolledTooltip> */}
          </div>

          <div className="jquery-div" id="jquery-icon">
            <i className="devicon-jquery-plain-wordmark dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="jquery-icon" className=''>
                jQuery
            </UncontrolledTooltip> */}
          </div>

          <div className="wordpress-div" id="wp-icon">
            <i className="devicon-wordpress-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="wp-icon" className=''>
                WordPress
               </UncontrolledTooltip> */}
          </div>

          <div className="git-div" id="git-icon">
            <i className="devicon-git-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="git-icon" className=''>
                GIT
            </UncontrolledTooltip> */}
          </div>

          <div className="node-div" id="node-icon">
            <i className="devicon-nodejs-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="node-icon" className=''>
                Node.js
            </UncontrolledTooltip> */}
          </div>

          <div className="express-div" id="express-icon">
            <i className="devicon-express-original dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="express-icon" className=''>
                Express.js
            </UncontrolledTooltip> */}
          </div>

          <div className="html-div" id="html-icon">
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="html-icon" className=''>
                HTML 5
            </UncontrolledTooltip> */}
            <i className="devicon-html5-plain dev-icons"></i>
          </div>

          <div className="sql-div" id="postgres-icon">
            <i className="devicon-postgresql-plain dev-icons"></i>
            {/*                         <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="postgres-icon" className=''> 
                            PostgreSQL
            </UncontrolledTooltip> */}
          </div>

          <div className="bootstrap-div" id="bootstrap-icon">
            <i className="devicon-bootstrap-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="bootstrap-icon" className=''>
                Bootstrap
            </UncontrolledTooltip> */}
          </div>

          <div className="github-div" id="github-icon">
            <i className="devicon-github-plain dev-icons"></i>
            {/* <UncontrolledTooltip style={{ backgroundColor: '#040182' }} placement="bottom" target="github-icon" className=''>
                GitHub
            </UncontrolledTooltip> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebDevIcons;
