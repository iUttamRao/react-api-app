import React from 'react'

const CustomTableHeadCell = (props) => {
    const {children} = props;
  return (
    <th>
        {children}
    </th>
  )
}

export default CustomTableHeadCell;