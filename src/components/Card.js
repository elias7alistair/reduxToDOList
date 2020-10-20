import deleted from "../delete.svg";
import edit from "../pencil.svg";
import taskDone from "../tasks.svg";
import tik from "../tikMark.svg"
import React,{ Component } from "react";

class Card extends Component {
  state = {
    newTaskName: '',
    isEditable: false
  };

  updateTask=(e,id)=>{
    this.setState({newTaskName : e.target.value})
  }

  handleEdit=()=>{
    this.setState({isEditable: !this.state.isEditable})
  }

  submitEdit=(id)=>{
    console.log(this.state)
    this.props.editTask(id,this.state.newTaskName);
    this.setState({  newTaskName: '',
    isEditable: false})
  }

  render() {
   
    const {
      id,
      taskName,
      date,
      deleteTask,
      isComplete,
      taskComplete,
    } = this.props;
    return (
      <li
        id={id}
        className="card"
        style={{ backgroundColor: isComplete ? "#2e293f" : "#464840" }}
      >
        <div>
          {!this.state.isEditable ? (
            <h5
              style={{ textDecoration: !isComplete ? "line-through" : "none" }}
            >
              {taskName}
            </h5>
          ) : (
            <input onChange={this.updateTask} value={this.state.taskName} style={{ width: "120px" }} type="text" />
          )}
          <button>
           { !this.state.isEditable ? <img
              src={edit}
              onClick={
               this.handleEdit
              }
              alt="delete-icon"
              width="24px"
              title="edit"
            /> : <img
            src={tik}
              onClick={()=>{this.submitEdit(id)}}
            alt="delete-icon"
            width="24px"
            title="edit"
          />
          }</button>
          <button
            onClick={() => {
              deleteTask(id);
            }}
          >
            <img src={deleted} alt="delete-icon" width="24px" title="Delete" />
          </button>
          <button
            onClick={() => {
              taskComplete(id);
            }}
          >
            <img
              src={taskDone}
              alt="task complete"
              width="24px"
              title="task Completed"
            />
          </button>
        </div>
        <div>
          <p>added on {date}</p>
        </div>
      </li>
    );
  }
}

export default Card;

// const Card = ({id, taskName, date,deleteTask,isComplete,taskComplete,isEditable,handleEdit}) => {
//     // console.log(taskName, id, date)
//   return (
//     <li id={id}  className="card" style={{backgroundColor: isComplete ? "#2e293f" : "#464840"}}>
//       <div>
//         { !isEditable ? <h5 style={{ textDecoration: !isComplete ? "line-through" : "none"}}>{taskName}</h5> : <input style={{width: "120px"}} type="text"/> }
//         <button>
//           <img src={edit} onClick={()=>{handleEdit(id,taskName)}} alt="delete-icon" width="24px" title="edit" />
//         </button>
//         <button onClick={()=>{deleteTask(id)}}>
//           <img src={deleted} alt="delete-icon" width="24px" title="Delete" />
//         </button>
//         <button onClick={()=>{taskComplete(id)}}>
//           <img src={taskDone} alt="task complete" width="24px" title="Delete" />
//         </button>
//       </div>
//       <div>
//         <p>added on {date}</p>
//       </div>
//     </li>
//   );
// };

// export default Card;
