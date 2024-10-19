"use client"
import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');

    function hanldeSubmit(e){
        e.preventDefault();
        if(title && description){
            addTask(title, description, priority);
            setTitle("");
            setDescription("");
            setPriority("medium");
        }
    }

    return (
        <form className="my-4" onSubmit={hanldeSubmit}>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 mr-2 rounded-xl mb-2 outline-none"
                placeholder="Task Title"
                required
            />
            <input 
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 mr-2 rounded-xl mb-2 outline-none"
                placeholder="Task Description"
                required
            />
            <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border px-6 py-2 mr-2  rounded-xl mb-2 outline-none"
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-xl">Add Task</button>
        </form>
    )
}

export default TaskForm
