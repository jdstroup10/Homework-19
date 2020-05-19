import React, { Component } from 'react';
import './App.css';
import employees from "./employees.json"



function searchFor(term) {
  return function (x) {
    return x.name.last.toLowerCase().includes(term.toLowerCase()) || !term;

  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: employees,
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    const { term, employees } = this.state;
    return (
      <main>
        <div className="App">
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
                  <input className="form-control mr-sm-2" type="text" onChange={this.searchHandler} value={term} placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
        </button>
                </form>
              </div>
            </nav>
          </header>
          {
            employees.filter(searchFor(term)).map(employee =>
              // employees.filter(searchFor(term)).map( employee =>       
              //entering (term) creates the "cannot read tolowercase error"

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

                  <tr key={employee.email}>
                    <td><img src={employee.picture.medium} alt="No picture available"></img></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.cell}</td>
                    <td>{employee.email}</td>
                  </tr>



                </tbody>
              </table>
            )
          }

        </div>
      </main>
    );
  }
}

export default App;