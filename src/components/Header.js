import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, toggleAddTask, taskButton}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={taskButton? `green`: `red`} text={taskButton? `Close`: `Add`} onClick={()=> toggleAddTask()}/> 
    </header>
  )
}

const headingStyle = {color: 'red', backgroundColor: 'black',}
Header.defaultProps = {
    title: 'Task Tacker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header