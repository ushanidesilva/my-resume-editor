import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../images/person2.jpg";

class Profile extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="card">
          <div className="card-image">
              <img className="activator" src={ImgProfile} alt="Peter Parker"/>
              <Link className="btn-floating halfway-fab waves-effect wave-light red">
                  <i className="material-icons activator">more_vert</i>
              </Link>
          </div>
          <div className="card-content">
              <span className="card-title activator gray-text text-darken-4">
                  Peter Parker
              </span>
              <p>Full Stack Web Developer</p>
          </div>
        </div> */}
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={ImgProfile} />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
            Kim Taehyung<i class="material-icons right">more_vert</i>
            </span>
            <p>
              Full Stack Web Developer
            </p>
          </div>
          <div class="card-reveal">
          <span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
