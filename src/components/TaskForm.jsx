import { useState } from 'react'

const CATEGORIES = ['Work', 'Personal', 'Urgent']

// Controlled form: every input's value lives in this component's state,
// and onChange keeps state in sync with what the user types.
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Personal')
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setError('Please enter a task title.')
      return
    }

    onAddTask({
      title: trimmedTitle,
      category,
      dueDate: dueDate || null,
    })

    // Reset the form after a successful submit.
    setTitle('')
    setCategory('Personal')
    setDueDate('')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-row">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-label="Task title"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Task category"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          aria-label="Due date"
        />
        <button type="submit">Add Task</button>
      </div>
      {error && <p className="form-error">{error}</p>}
    </form>
  )
}

export default TaskForm
