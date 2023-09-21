import React, { useEffect, useState } from 'react'
import CustomTable from '../../component/CustomTable/CustomTable';
import { body, head } from './employee.constant';
import { getEmployee } from '../../api/employee';

const Employee = () => {
  const [employeeData, setEmployeeData] = useState(body);
  const [labels, setlabels] = useState(head);
    useEffect(()=>{
      console.log("useEffect is called");
        getData();
    },[employeeData])
    const getData = async() =>{
      const response = await getEmployee();
      console.log("Response",response);
      if(response && response.length >0){
        setEmployeeData(response);
      }
    }
  return (
    <CustomTable tableHead={labels} tableBody={employeeData}/>
  )
}

export default Employee