import { useState } from "react";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import "./styles.css";

export default function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);
    //-------------------------------------------------------
    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false
            }
        ]);
    }
    //-------------------------------------------------------
    function handleChangeTask(task) {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }
    //-------------------------------------------------------
    function handleDeleteTask(taskId) {
        if (window.confirm("Are you sure ?")) {
            setTasks(tasks.filter((t) => t.id !== taskId));
        }
    }
    //-----------------------------------------------
    return (
        <>
            <div className="Container">
                <h1>To-do List</h1>
                <AddTask onAddTask={handleAddTask} />

                <div className="task-container">
                    <TaskList
                        tasks={tasks}
                        onChangeTask={handleChangeTask}
                        onDeleteTask={handleDeleteTask}
                    />
                </div>
            </div>
        </>
    );
}

let nextId = 5;
const initialTasks = [
    { id: 1, text: "Welcome to your to-do list.", done: false },
    {
        id: 2,
        text: "Click box if the task is finished.",
        done: true
    },
    { id: 3, text: "Click delete  (red) to delete a task.", done: false },
    { id: 4, text: "Click edit  (yellow) to edit a task", done: false }
];
