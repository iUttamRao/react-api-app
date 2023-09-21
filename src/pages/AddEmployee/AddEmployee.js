import React from 'react'
import "./addEmployee.css"
import { addEmployee } from '../../api';

const AddEmployee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("e.target.value", e.nativeEvent.target);
    const form = new FormData(e.nativeEvent.target);
    //console.log("Form Data", form);
    const body = {};
    for (let [key, value] of form.entries()) {
      //console.log(key, value);
      body[key] = value;
    }
    addEmployee(body);
    //console.log("Body", body);
  }
  return (
    <div className='addEmployee'>
      <h1>Add Employee</h1>
      <div className='form'>
        <form name="form" onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>ID:</td>
              <td><input name='id' type="number" required /></td>
            </tr>
            <tr>
              <td>Name:</td>
              <td><input name='name' type="text" required /></td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td><input name='salary' type="number" required /></td>
            </tr>
            <tr>
              <td>Age:</td>
              <td><input name='age' type="number" required /></td>
            </tr>
            <tr>
              <td><input type="submit" /></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee