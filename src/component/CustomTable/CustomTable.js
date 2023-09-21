import React from 'react'
import { Table } from 'react-bootstrap'
import CustomTableRow from './CustomTableRow';
import CustomTableCell from './CustomTableCell';
import CustomTableHeadCell from './CustomTableHeadCell';
import CustomTableHead from './CustomTableHead';
import CustomTableBody from './CustomtTableBody';

const CustomTable = (props) => {
  const {tableHead,tableBody}= props;

  const renderTableBodyCells = (employee) =>{
    return Object.values(employee).map(values => <CustomTableCell>{values}</CustomTableCell>)
  }

  const renderTableHead =() => tableHead.map(head => <CustomTableHeadCell>{head}</CustomTableHeadCell>);

  const renderTableBody =() => {
    return tableBody.map(employee => {
      return(
        <CustomTableRow>
          {renderTableBodyCells(employee)}
        </CustomTableRow>
      )
    })
  }
  return (
    <Table striped bordered hover>
      <CustomTableHead>
        <CustomTableRow>
          {renderTableHead()}
        </CustomTableRow>
      </CustomTableHead>
      <CustomTableBody>
          {renderTableBody()}
      </CustomTableBody>
    </Table>
  )
}

export default CustomTable