import { useState } from 'react';
import { AddTask } from '../components/AddTask';
import { TaskList } from '../components/TaskList';
import type { TaskProps } from "../components/Task"



function Personal() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const addTask = (text: string) => {
        const id = Date.now();
        setTasks([...tasks, { id, text, checked: false, onToggle: () => toggleTask(id), onDelete: () => deleteTask(id) }]);
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, checked: !task.checked } : task
        ));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.checked));
    };

    return (
        <div>
            <AddTask addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                clearCompleted={clearCompleted}
            />
        </div>
    );
}

export default Personal;