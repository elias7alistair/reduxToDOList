const initState = {
  tasks: [
    { id: 0, taskName: "buy milk", date: "12/2/2020",isComplete:true},
    { id: 1, taskName: "walk", date: "12/2/2020",isComplete:true },
    { id: 2, taskName: "sleep", date: "12/2/2020",isComplete:true },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  // if(action.type === "DELETE_TASK"){
  //     let newTasks = state.tasks.filter(task =>{
  //         return task.id !== action.payload
  //     })
  //     return {
  //         ...state,
  //         tasks: newTasks
  //     }
  // }

  const updateId = (list) => {
    list.map((data)=>{
        return (data.id = list.findIndex((list)=> list.taskName === data.taskName))
    })
    return list;
  }

  switch (action.type) {
    case "DELETE_TASK":
      const newTasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
      updateId(newTasks)
      return {
        ...state,
        tasks: newTasks,
      };
      
      case "ADD_TASK":
        const newTasks2 = [...state.tasks] 
        const newObj = {};
        console.log(action.payload)
        newObj.taskName = action.payload;
        newObj.id = Object.keys(newTasks2).length+1;
        newObj.date = new Date().toLocaleDateString();   
        newObj.isComplete = true;   
        newTasks2.push(newObj);
        console.log(newTasks2)
        return {...state,
        tasks: updateId(newTasks2)};

      case "TASK_COMPLETE":
        const newTasks3 = [...state.tasks];
        console.log(action.payload)
        newTasks3[action.payload].isComplete = !newTasks3[action.payload].isComplete;
        return {...state,
          tasks: updateId(newTasks3)};
      
      case "EDIT_TASK":
        console.log(action.id)
        const newTasks4 = [...state.tasks];
        newTasks4[action.id].taskName = action.taskName;
        return {...state,
          tasks: updateId(newTasks4)};
      

      default:
          return state;
  }

};

export default rootReducer;
