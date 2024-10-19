# Task Manager
   [View Demo](https://task-manager-jnkrmyhn6-ravipal123s-projects.vercel.app)
## Description

The Task Manager is a web application built using Next.js and Tailwind CSS that allows users to create, manage, and sort tasks based on priority. The application features a user-friendly interface, enabling users to mark tasks as completed or pending, and delete tasks as needed.

## Features

- Add new tasks with a title, description, and priority (High, Medium, Low).
- View tasks in a list format.
- Sort tasks based on priority.
- Mark tasks as completed or pending.
- Delete tasks from the list.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Axios**: A promise-based HTTP client for making API requests.

## Setup Instructions

Follow these steps to set up and run the Task Manager application on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd task-manager
2. **Install Dependencies**:
   ```bash
     npm install
3. **Run the Development Server**:
   ```bash
     npm run dev

## Explaination
The application allows tasks to be sorted based on their priority levels: High, Medium, and Low. Here’s how the sorting logic works:
1. **Priority Mapping**: Each priority level is mapped to a numerical value for sorting: i--High:1 ii--Medium:2 iii--Low
2. **Sorting Function**: When a user chooses to sort tasks, the application compares the priority values of the tasks using the Array.sort() method:
    ```bash
      const priorityMap = { high: 1, medium: 2, low: 3 };
      const sortedTasks = [...filteredTasks].sort((a, b) => {
        return priorityMap[a.priority] - priorityMap[b.priority];
      });
This function sorts the tasks in ascending order based on their priority levels, ensuring that high-priority tasks appear first in the list.

## Contibuting
If you would like to contribute to this project, please fork the repository and submit a pull request. Your contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.
### Steps to Create and Add README.md

1. **Create the README.md File**:
   In the root of your project directory, create a file named `README.md`.

   ```bash
   touch README.md
2. **Open and Edit the File**:
   Use a code editor to open the README.md file and copy-paste the sample content provided above. Feel free to customize any sections as needed.
3. **Save the Changes**: Save the file and close the editor.


