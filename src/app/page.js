"use client"; // This will enable client-side hooks like useState and useEffect

import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State to toggle sort popup

    // Fetch tasks directly inside the component
    useEffect(() => {
        async function loadTasks() {
            // This array simulates fetching data from a database or API on the server
            const initialTasks = [
                { id: 1, title: "Buy Groceries", description: "Milk, Bread, Eggs", priority: "high", completed: false },
                { id: 2, title: "Meeting with Ravi", description: "Discussing about project ", priority: "medium", completed: false },
                { id: 3, title: "Gym", description: "Workout at 6 PM", priority: "low", completed: false },
            ];

            setTasks(initialTasks); // Set the initial tasks
        }
        loadTasks();
    }, []);

    // Filter tasks based on search query
    const filteredTasks = tasks.filter((task) => {
        return (
            task.title.toLowerCase().includes(searchQuery) ||
            task.description.toLowerCase().includes(searchQuery)
        );
    });

    // Function to sort tasks by priority (high, medium, low)
    const sortTasksByPriority = (priority) => {
        const priorityMap = { high: 1, medium: 2, low: 3 };

        // Sort filtered tasks based on selected priority
        const sortedTasks = [...filteredTasks].sort((a, b) => {
            if (priority === 'high') return priorityMap[a.priority] - priorityMap[b.priority];
            if (priority === 'medium') return (a.priority === 'medium' ? -1 : 1);
            if (priority === 'low') return (a.priority === 'low' ? -1 : 1);
        });
        setTasks(sortedTasks);
        setShowPopup(false); // Close popup after sorting
    };

    // Save tasks to local storage whenever tasks state changes
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    // Function to add a new task
    const addTask = (title, description, priority) => {
        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    // Function to edit an existing task
    const editTask = (id, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
    };

    // Function to delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Function to toggle task completion status
    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Split tasks into incomplete and completed
    const incompleteTasks = filteredTasks.filter((task) => !task.completed);
    const completedTasks = filteredTasks.filter((task) => task.completed);

    // Combine incomplete and completed tasks for rendering
    const combinedTasks = [...incompleteTasks, ...completedTasks];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-white hover:font-extrabold">Task Management</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search tasks..."
                className="border rounded-xl px-4 py-2 mb-4 w-1/2 outline-none" // Fixed width of 630px
                onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />

            {/* Sort Popup */}
            {showPopup && (
                <div className="absolute bg-white border rounded p-2 shadow-md">
                    <p className="mb-2">Sort by:</p>
                    <button 
                        className="block bg-red-500 text-sm text-white px-4 py-1.5 rounded mb-1 w-full"
                        onClick={() => sortTasksByPriority('high')}
                    >
                        Priority by High
                    </button>
                    <button 
                        className="block bg-yellow-500 text-sm text-white px-4 py-1.5 rounded mb-1 w-full"
                        onClick={() => sortTasksByPriority('medium')}
                    >
                        Priority by Medium
                    </button>
                    <button 
                        className="block bg-green-500 text-sm text-white px-4 py-1.5 rounded mb-1 w-full"
                        onClick={() => sortTasksByPriority('low')}
                    >
                        Priority by Low
                    </button>
                </div>
            )}

            {/* TaskForm component for adding new tasks */}
            <TaskForm addTask={addTask} />

            {/* Sort Tasks Button */}
            <button
                className="bg-blue-500 text-white px-6 py-2 rounded-xl mb-12"
                onClick={() => setShowPopup(!showPopup)} // Toggle popup
            >
                Sort Tasks
            </button>

            <div className="border border-black-2"></div>

            {/* TaskList component displaying sorted and filtered tasks */}
            <TaskList
                tasks={combinedTasks}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </div>
    );
}
