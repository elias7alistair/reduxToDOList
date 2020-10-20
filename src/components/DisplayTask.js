import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {editTask,deleteTask, taskComplete} from '../actions/listActions'

class DisplayTask extends Component {
 
  state = {
    id: 0
  }
 
  handleDelete = (id) =>{
    this.props.deleteTask(id)
 
  }

  taskComplete = (id) =>{
    this.props.taskComplete(id)
   
  }

  editTask = (id,taskName) => {
    this.props.editTask(id,taskName)
  }

  handleFilter = (id) =>{
    // if(id === 0){
    //   this.setState({tasks: this.props.tasks})
    // }
    // else {
    //   const tasks = this.props.tasks.filter((data)=>{
    //     if(id === 1){
    //       return data.isComplete === true
    //     }
    //     else if(id === 2){
    //       return data.isComplete !== true
    //     }
    //   })
    //   this.setState({tasks: tasks})
    // }
    this.setState({id})
  }

  render() {
    // console.log(this.props.tasks);
    // const { tasks } = this.props;

    const tasks = this.props.tasks.filter((data)=>{
      if(this.state.id === 1){
              return data.isComplete === true
            }
            else if(this.state.id === 2){
              return data.isComplete !== true
            }
            return data
    })

    return (
      <div>
        <div className="filterList">
          <button onClick={()=>{ this.handleFilter(0)}}>All</button>
          <button onClick={()=>{ this.handleFilter(1)}}>Active</button>
          <button onClick={()=>{ this.handleFilter(2)}}>Completed</button>
        </div>
        <div className="list">
          <ul className="center">
            {tasks.length ? (
              tasks.map((data) => {
                return (
                  <Card
                    key={data.id}
                    taskName={data.taskName}
                    date={data.date}
                    id={data.id}
                    deleteTask={this.handleDelete}
                    isComplete={data.isComplete}
                    taskComplete={this.taskComplete}
                    isEditable={data.isEditable}
                    handleEdit={this.handleEdit}
                    editTask={this.editTask}
                  />
                );
              })
            ) : (
              <div>
                <h5>no task to show</h5>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask : (id) => dispatch(deleteTask(id)),
    taskComplete: (id)=> dispatch(taskComplete(id)),
    editTask: (id,newTask)=> dispatch(editTask(id,newTask))
    // filterTask: (id) => dispatch(filterTask(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayTask);
