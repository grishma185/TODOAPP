import { useState } from 'react'

function isOverdue(dueDate, completed) {
  if (!dueDate || completed) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return new Date(dueDate) < today
}

// Each TaskItem manages its own tiny bit of local UI state (whether it's
// currently being edited) but reports actual data changes back up to App
// via the callback props it receives.
function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftTitle, setDraftTitle] = useState(task.title)

  const overdue = isOverdue(task.dueDate, task.completed)

  const saveEdit = () => {
    const trimmed = draftTitle.trim()
    if (trimmed) {
      onEditTask(task.id, trimmed)
    }
    setIsEditing(false)
  }

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''} ${overdue ? 'overdue' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        aria-label={`Mark "${task.title}" as complete`}
      />

      <div className="task-main">
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={draftTitle}
            autoFocus
            onChange={(event) => setDraftTitle(event.target.value)}
            onBlur={saveEdit}
            onKeyDown={(event) => event.key === 'Enter' && saveEdit()}
          />
        ) : (
          <span className="task-title" onDoubleClick={() => setIsEditing(true)}>
            {task.title}
          </span>
        )}

        <div className="task-meta">
          <span className={`badge badge-${task.category.toLowerCase()}`}>{task.category}</span>
          {task.dueDate && (
            <span className={`due-date ${overdue ? 'overdue-text' : ''}`}>
              Due {task.dueDate}
              {overdue && ' (overdue)'}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button onClick={() => setIsEditing(true)} aria-label="Edit task">
          ✏️
        </button>
        <button onClick={() => onDeleteTask(task.id)} aria-label="Delete task">
          🗑️
        </button>
      </div>
    </li>
  )
}

export default TaskItem
