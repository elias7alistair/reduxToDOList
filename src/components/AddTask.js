import React,{Component} from 'react';
import {connect} from 'react-redux'
import {addTask} from '../actions/listActions' 

class AddTask extends Component {
    state = { taskName: '' }
    
    handleChange = (e) =>{
        this.setState({taskName : e.target.value})
    }

    handleAddTask = () =>{
        if(this.state.taskName.length > 0){
        this.props.addTask(this.state.taskName)
        this.setState({taskName:""})}
    }

    render() { 
        
        return ( 
            <div className="addTask">
                <h1>FynTune ToDoS</h1>
                <input type="text" value={this.state.taskName} onChange={this.handleChange}/>
                <button onClick={this.handleAddTask}>Add</button>
            </div>
         );
    }
}
 
const mapDispatchToProps = (dispatch) =>{
return {
    addTask : (taskName)=>dispatch(addTask(taskName))
}
}

export default connect(null, mapDispatchToProps)(AddTask);