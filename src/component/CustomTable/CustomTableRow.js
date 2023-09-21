import React from 'react'

const CustomTableRow = (props) => {
    const {children} = props;
  return (
    <tr>
        {children}
    </tr>
  )
}

export default CustomTableRow;