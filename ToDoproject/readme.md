<!-- use case of the functions in Todo project -->

1)	Function addTask(): takes input from document where id=‘todoInput’  and adds a new task to the todo list.It also checks if the task input is ‘Empty’ or not.

2)	Function updateTodoList(): This function updates the visual representation of the todo list in the HTML. It clears the existing list, iterates over the tasks array, creates a list item for each task, sets the task text and completion status, assigns a click event to toggle the task's completion status, and appends the list item to the to-do list. It also updates the aggregate counts of total and completed tasks.

3)	Function toogleCompleted(): This funtion toggles the completion of given task. It changes the completed property of the task to its opposite value and updates to the todo list.

4)	Function updateAggregrate(): This function updates the aggregrate the count of the total and completed tasks displayed in the HTML document.It calculates the total number of tasks and the number of completed tasks, and updates the corresponding HTML elements with these values.

5)	Function filterTasks(): This function filters tasks based on the search input.It retrieves the search input, converts it to lowercase, filters the tasks array to only include tasks whose text includes the search input, and updates the displayed to-do list with the filtered tasks.

6)	Function updateTodoListWithFilteredTasks(): This function updates the visual representation of the todo list with the set of filtered tasks. It clears the existing list, iterates over the filtered tasks array, creates a list item for each task, sets the task text and completion status, assigns a click event to toggle the task's completion status, and appends the list item to the to-do list. It also updates the aggregate counts of total and completed tasks.
