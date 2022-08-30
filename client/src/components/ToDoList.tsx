import '../style/ToDoList.css';
import TaskItem from "./TaskItem";
import {animated, useTransition} from 'react-spring';

type ToDoListProps = {
    deleteTaskItem: Function,
    completeTaskItem: Function,
    items: any
}

const ToDoList = ({deleteTaskItem, completeTaskItem, items}: ToDoListProps):JSX.Element => {

    const transitions = useTransition(items,{
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      });

    function FieldName() {
        return(
          <div className='fieldname-container'>
    
            <span className="taskname-fieldname">Task name</span>
            <span className='other-fieldname'>Status</span>
            <span className='other-fieldname'>Deadline</span>
            <span className='action-fieldname'>Actions</span>
          </div>
        )
    }
    return(
        <div className='list-container'>
            <FieldName />
            {
                transitions((style, item, _t, index) => (
                    <animated.div style={style}  className="item-container">
                        {item && (<TaskItem taskItem={item} key={index} taskIndex={index} completeTaskItem={completeTaskItem} deleteTaskItem={deleteTaskItem}/>)}
                    </animated.div>
                ))
            }
        </div>
        
    )
}

export default ToDoList;