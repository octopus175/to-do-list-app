function TaskItem(props) {
    // TODO: add style

    return(
        <div>
            <span>{props.name}</span>
            <span>{props.status}</span>
            <span>{props.deadline}</span>
            <button>check</button>
        </div>
        
    )
}

export default TaskItem