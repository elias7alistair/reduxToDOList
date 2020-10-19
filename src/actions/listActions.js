export const deleteTask = (id)=>{
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export const editTask = (id,taskName)=>{
    return {
        type: 'EDIT_TASK',
        id, 
        taskName
    }
}

export const addTask = (taskName)=>{
    return {
        type: 'ADD_TASK',
        payload: taskName
    }
}

export const taskComplete = (id)=>{
    return {
        type: 'TASK_COMPLETE',
        payload: id
    }
}