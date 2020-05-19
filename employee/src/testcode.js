import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import employees from "./employees.json"


class App extends React.Component {
  state = {
    employees,
    name: 1,
    username: 1,
    sort:""
  };


  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      copyEmployees: [],
      key: ""

    }

  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
      .then ((results) => {
        console.log(results.data)
        this.setState({ employees: results.data.results, copyEmployees: results.data.results })
      })

  }

//<Input label="Search by Name" icon="search" onChange={this.onchange}/>
handleSort = (name, order) => {
  this.setState({ employees: this.state.employees.sort((a, b) => (a[name] > b[name] ? order : -order)) })
}

searchFilter = (name) => {
  this.setState({
    employees: employees.filter(employee => {
      return employee.name.toLowerCase().includes(name.toLowerCase())
    
    })
  })
} 

render() {
    return (
<main>
      <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="#">Employee Directory</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        </li>
       
      </ul>
      <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
        </button>
      </form>
    </div>
  </nav>
</header>
        
        
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.copyEmployees.map(function(employee){
            return(  
              <tr key={employee.email}>
              <td><img src={employee.picture.medium} alt="No picture available"></img></td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.cell}</td>
              <td>{employee.email}</td>
            </tr>)
          })}
          

        </tbody>
      </table>
      </main>
    )

  }



}

export default App;

