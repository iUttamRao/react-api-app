import React from 'react'

const CustomTableCell = (props) => {
    const {children} = props;
  return (
    <td>
        {children}
    </td>
  )
}

export default CustomTableCell;