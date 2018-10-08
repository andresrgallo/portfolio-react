import React, {Component} from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                Please do not hesitate in sending me a message at{' '}
                {resumeData.email}, I would like to here from you.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
