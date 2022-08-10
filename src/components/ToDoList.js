import '../style/ToDoList.css'
import TaskItem from "./TaskItem.js";
function ToDoList ({completeTaskItem, items}){
    
    return(
        <div className='list-container'>
            {
                items.map((item, index) => {
                    return(
                        <TaskItem taskItem={item} key={index} taskId={index} completeTaskItem={completeTaskItem}/>
                    )
                    
                })
            }
        </div>
        
    )
}

export default ToDoList;