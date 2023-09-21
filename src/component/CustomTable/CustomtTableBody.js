import React from 'react'

const CustomTableBody = (props) => {
    const {children} = props;
  return (
    <tbody>
        {children}
    </tbody>
  )
}

export default CustomTableBody