import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="gray-text">
            Diligent software engineer with 5+ years experience in commercial
            application development. Eager to join Cyclone Inc. to build
            innovative and cutting edge business solutions for the impressive
            suite of clients within its global reach. In previous roles, slashed
            downtime by 25% and ensured 98% on-time project completion. Also
            identified and dealt with a significant process bottleneck that
            boosted coding efficiency by 35% when resolved. 
          </p>
        </div>

        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>PERSONAL INFO</strong>
          </h6>
         <div className="row mt">
             <div className="col s12 m6 l6 xl6">
                 <p><strong>Address :</strong>&nbsp;&nbsp;10 Downing Street &nbsp;London &nbsp;UK</p>
                 <p><strong>Email :</strong>&nbsp;&nbsp;peterparker34@gmail.com</p>
                 <p><strong>Phone :</strong>&nbsp;&nbsp;0652314078</p>
             </div>

             <div className="col s12 m6 l6 xl6">
                 <p><strong>DOB :</strong>&nbsp;&nbsp;30-12-1995</p>
                 <p><strong>Status :</strong>&nbsp;&nbsp;Unmarried</p>
                 <p><strong>Nationality :</strong>&nbsp;&nbsp;British</p>
             </div>
         </div>
        </div>
      </div>
    );
  }
}

export default About;
