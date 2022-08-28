import axios from 'axios';
const api_url = process.env.REACT_APP_TASK_SERVICE_URI || "http://127.0.0.1:4000/api/tasks/"

export function getTasks() {
    return axios.get(api_url.concat("getTasks"));
}

export function addTask(newTask) {
    return axios.post(api_url.concat("addTask"), newTask);
}

export function updateTask(task) {
    return axios.patch(api_url.concat("updateTask"), task);
}

export function deleteTask(taskId) {
    return axios.delete(api_url.concat("deleteTask"), {params: {
        task_id: taskId
    }});
}
