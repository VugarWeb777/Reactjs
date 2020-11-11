import React from 'react'
import classes from './TaskManager.css'
import Button from "../../components/UI/Button/Button";

class TaskManager extends React.Component {


    goToHomeHandler =() => {
        this.props.history.push({
            pathname: '/'
        })
    }


    render() {
        return (

            <div className={classes.container}>
                <h1>Task Manager application</h1>
                <Button onClick={this.goToHomeHandler} type={'primary'}>go to Home</Button>
            </div>


        )
    }
}

export default TaskManager;