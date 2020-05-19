import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import employees from "./employees.json"


class App extends Component {
  render() {
    return(
      <div className="App">
        {
          employees.map(function(emp){
            return (
              <tr key={emp.email}>
              <td><img src={emp.picture.medium} alt="No picture available"></img></td>
              <td>{emp.name.first}</td>
              <td>{emp.name.last}</td>
              <td>{emp.cell}</td>
              <td>{emp.email}</td>
            </tr>
            )
          })
        }
      </div>
    );
  }
}

export default App;