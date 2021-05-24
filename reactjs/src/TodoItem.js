import React from "react"

function TodoItem(props){
    return(

    <div className = "todo-item">
        <input onChange={() => {props.handleChange(props.todoarr.id)}} 
        type= "checkbox" checked ={props.todoarr.completed} />
        <p>{props.todoarr.text}</p>

    </div>
    )
}

export default TodoItem