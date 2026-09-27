import TaskItem from './TaskItem.jsx'

function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
  // Conditional rendering: show a friendly empty state instead of a blank list.
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks here. Add one above to get started 🎉</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
