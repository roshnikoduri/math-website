import React, { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import Loading from './Loading';
import professional_headshot from './professional_headshot.png'

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

  // aboutSection = () => {
  //   return{
  //     "888Math is a tutoring website that connects students in America with teachers in India for only $8.88 an hour. We provide high-quality, problem-focused tutoring. "
  //   };
  // }

  render() {
    return (
      <div className="App">
        <h2 style={{ color: 'red' }}>Welcome to 888Math!</h2>
        <button onClick={this.displayInfo}>Contact Information</button>
        {this.state.showInfo && <h3>Email: hganesh@umich.edu</h3>}
        <hr />
        <p>
          888Math is a tutoring website that connects students in America with teachers in India for only $8.88 an hour. 
          We provide high-quality, problem-focused tutoring. 
        </p>

        <figure style={{ textAlign: 'left' }} >
        <img src={professional_headshot}
        alt="Headshot"
        style={{ width: '300px', height: '200px' }} />
        </figure>
        <figcaption style = {{ textAlign: 'left'}}> Professional Headshot
        </figcaption>

        <figure style={{ textAlign: 'center' }} >
        <img src={professional_headshot}
        alt="Headshot"
        style={{ width: '300px', height: '200px' }} />
        </figure>
        <figcaption style = {{ textAlign: 'center'}}> Professional Headshot
        </figcaption>

        <figure style={{ textAlign: 'right' }} >
        <img src={professional_headshot}
        alt="Headshot"
        style={{ width: '300px', height: '200px' }} />
        </figure>
        <figcaption style = {{ textAlign: 'right'}}> Professional Headshot
        </figcaption>


        
      </div>
    );
  }
}

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

export default App;
