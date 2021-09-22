import React, { Component } from 'react';
import Educations from './Educations';
import Experiences from './Experiences';
import Portfolios from './Portfolios';
import Profile from './Profile';
import Skills from './Skills';
import Navbar from './Navbar';




// export default class Home extends Component{
//     render(){
//         retutrn(
//             <section>
//                 <Navbar/>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col s12 m4 l3">
//                             <Profile/>
//                         </div>
//                         <div className="col s12 m8 l9">
//                             <About/>
//                             <Skills/>
//                             <Experience/>
//                             <Education/>
//                             <Portfolios/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

class Home extends React.Component {
    render() { 
        return (
            <section>
                 <Navbar/>
                 <div className="container">
                     <div className="row">
                         <div className="col s12 m4 l3">
                             <Profile/>
                         </div>
                         <div className="col s12 m8 l9">
                             <Skills/>
                             <Experiences/>
                             <Educations/>
                             <Portfolios/>
                         </div>
                     </div>
                 </div>
             </section>
        );
    }
}
 
export default Home;