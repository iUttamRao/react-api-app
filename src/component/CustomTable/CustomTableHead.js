import React from 'react'

const CustomTableHead = (props) => {
    const {children} = props;
  return (
    <thead>
        {children}
    </thead>
  )
}

export default CustomTableHead;