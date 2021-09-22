import React, { Component } from "react";

// export default class Skills extends Component{
//     render(){
//         retutrn(

//         )
//     }
// }

class Skills extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <div class="progress gray lighten-1">
                <div class="determinate blue" style={{ width: "90%" }}></div>
              </div>

              <p>JAVASCRIPT</p>
              <div class="progress gray lighten-1">
                <div class="determinate blue" style={{ width: "80%" }}></div>
              </div>

              <p>PHP</p>
              <div class="progress gray lighten-1">
                <div class="determinate blue" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="col s6">
              <p>CSS</p>
              <div class="progress gray lighten-1">
                <div class="determinate blue" style={{ width: "99%" }}></div>
              </div>

              <p>JAVA</p>
              <div class="progress gray lighten-1">
                <div class="determinate blue" style={{ width: "85%" }}></div>
              </div>
              <p>MYSQL</p>
              <div class="progress gray lighten-1">
                <div class="determinate blue" style={{ width: "60%" }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
