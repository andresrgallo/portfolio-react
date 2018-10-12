import React, {Component} from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/profilepic.png"
                alt="my pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                {' '}
                I am a resent graduate from{' '}
                <a
                  href="https://coderacademy.edu.au/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Coder Academy fastrack bootcamp
                </a>
                . I am also a process engineer that loves challenges and
                learning. I am an inquisitive thinker, constantly looking for
                solutions to daily problems. I was an Operations Manager for the
                last 15 years, role that gave me the skills to lead teams and
                also solidified my understanding of team cohesion.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br />
                    <span>
                      {resumeData.address}
                      <br />
                      {resumeData.suburbstate}
                    </span>
                    <br />
                    <span>mob: {resumeData.mobile}</span>
                    <br />
                    <span>email: {resumeData.email}</span>
                  </p>
                </div>
              </div>{' '}
              {/* end row */}
            </div>{' '}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
