function CreateNewItem(){
    return (
        <div>
            <input placeholder="Create new task"></input>
            <input type="date" id="deadline" name="task-deadline" value="2022-01-01" min="2022-01-01" max="2025-12-31"></input>
            <button>confirm</button>
        </div>
    )
}

export default CreateNewItem;