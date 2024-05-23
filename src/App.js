import React, { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Loading from './Loading';
import professional_headshot from './professional_headshot.png'
import Navbar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Schedule from "./pages/schedule";
import BecomeATutor from "./pages/becomeatutor";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  displayInfo = () => {
    this.setState({ showInfo: true });
  }

  render(){
    return (
      <Router>
          <Navbar />
          <Routes>
              
              <Route path= "/home" element = {<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route
                  path="/becomeatutor"
                  element={<BecomeATutor />}
              />
              <Route
                  path="/contact"
                  element={<Contact/>}
              />
          </Routes>
      </Router>
    );
  }

}

export default App;



  // aboutSection = () => {
  //   return{
  //     "888Math is a tutoring website that connects students in America with teachers in India for only $8.88 an hour. We provide high-quality, problem-focused tutoring. "
  //   };
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <h2 style={{ color: 'red' }}>Welcome to 888Math!</h2>
  //       <button onClick={this.displayInfo}>Contact Information</button>
  //       {this.state.showInfo && <h3>Email: hganesh@umich.edu</h3>}
  //       <hr />
  //       <p>
  //         888Math is a tutoring website that connects students in America with teachers in India for only $8.88 an hour. 
  //         We provide high-quality, problem-focused tutoring. 
  //       </p>
        
  //     </div>
  //   );
  // }

// class App extends Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       users: [], 
//       loading:  false
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   getUsers(){
//     this.setState({
//       loading: true
//     })

//     axios('https://api.randomuser.me/?nat=US&results=5').then(response=>
//       this.setState({
//       users: [...this.state.users, ...response.data.results],
//       loading: false
//     })
//     );
//   }
//   //state
  
//   componentWillMount(){

//     this.getUsers();

//     //make some API calls; before the component mounts
//     //how to actually check console?
//     //add react developer tools
//   }

//   handleSubmit = e =>{
//     e.preventDefault();
//     this.getUsers();
//     console.log('more users loaded');
//   }


//   render(){
//     const {loading, users} = this.state
//     return(
//       <div className="App"> 
//       <form onSubmit = {this.handleSubmit}>
//           <input type = "submit" value = "load users" />
//       </form>
//       <hr /> 
//         {
//           !loading ? (
//             users.map(user => (
//               <div key={user.id.value}>
//                 <h3 style={{ color: 'red' }}>{user.name.first}</h3>
//                 <p>{user.email}</p>
//                 <hr />
                
//               </div>
//             ))
//           ) : <Loading message =  "hey hey hey" />
//         }
//       </div>
//     );
//   }
// }

//props = properties
//<hr> = horizontal line


