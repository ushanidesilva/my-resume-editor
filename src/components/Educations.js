import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

class Educations extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h6><strong>EDUCATIONS</strong></h6>
            <table className="striped">
                <tr>
                    <th>Qualification/ Certificate</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Web Development</td>
                    <td>Jan 2019</td>
                    <td><Link to="#" className="btn blue lighten-2">View</Link></td>
                </tr>
                <tr>
                    <td>Web Development</td>
                    <td>Jan 2019</td>
                    <td><Link to="#" className="btn blue lighten-2">View</Link></td>
                </tr>
                <tr>
                    <td>Web Development</td>
                    <td>Jan 2019</td>
                    <td><Link to="#" className="btn blue lighten-2">View</Link></td>
                </tr>
            </table>
        </div>
      </div>
    );
  }
}

export default Educations;
