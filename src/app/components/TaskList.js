import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskCompletion }) => {
    return (
        <div className="my-4">
            {
                tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div 
                            key={task.id}
                            className={`p-4 mb-2 border border-gray-900 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
                                task.completed ? 'bg-white' : 'bg-gray-700'
                            } relative`} // Added 'relative' for positioning
                        >
                            {/* Conditional Complete Text */}
                            {task.completed && (
                                <p className="absolute top-2 right-5 text-red-400 text-sm">
                                   Task Completed
                                </p>
                            )}

                            <h3
                                className={`font-bold text-xl ${
                                    task.priority === 'high' ? 'text-red-500' : 
                                    task.priority === 'medium' ? 'text-yellow-500' : 
                                    'text-green-500'
                                }`}
                            >
                                {task.title}
                            </h3>
                            <p className="mb-1 text-sm text-gray-900">{task.description}</p>
                            <p className="mb-1 text-sm text-gray-900">Priority: {task.priority}</p>
                            <div className="flex justify-between mt-2">
                                <button
                                    onClick={() => toggleTaskCompletion(task.id)}
                                    className="bg-yellow-500 text-white px-6 py-2 rounded-xl transition-colors duration-200 hover:bg-yellow-400"
                                >
                                    {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                                </button>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="bg-red-500 text-white px-6 py-2 rounded-xl transition-colors duration-200 hover:bg-red-400"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white text-3xl">No tasks found</p>
                )
            }
        </div>
    );
};

export default TaskList;
