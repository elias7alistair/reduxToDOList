import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {editTask,deleteTask, taskComplete} from '../actions/listActions'

class DisplayTask extends Component {
 
 
  handleDelete = (id) =>{
    this.props.deleteTask(id)
   
  }

  taskComplete = (id) =>{
    this.props.taskComplete(id)
  }

  editTask = (id,taskName) => {
    this.props.editTask(id,taskName)
  }

  render() {
    // console.log(this.props.tasks);
    const { tasks } = this.props;
    return (
      <div>
        <div className="filterList">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
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
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DisplayTask);
