import Header from './Header.js';
import TaskItem from "./TaskItem.js";
import CreateNewItem from "./CreateNewItem.js";
function ToDoList ({insertNewItem, completeTaskItem, items}){
    
    return(
        <div>
            <Header />
            <CreateNewItem insertNewItem= {insertNewItem}/>
            <div>
                <span>Task name</span>
                <span>Status</span>
                <span>Deadline</span>
            </div>
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