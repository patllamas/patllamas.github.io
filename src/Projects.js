import React from "react";
import "./Projects.css";

class Projects extends React.Component {
  render(props) {
    return (
      <div className='column' className="Projects">
        <h3>{this.props.title}</h3>
        <p>{this.props.jobtitle}</p>
        <img
          // class="image is-128x128"
          src={this.props.image}
        />
      </div>
    );
  }
}

export default Projects;