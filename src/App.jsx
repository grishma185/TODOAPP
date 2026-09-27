import { useState, useEffect, useMemo } from 'react'
import Header from './components/Header.jsx'
import TaskForm from './components/TaskForm.jsx'
import FilterBar from './components/FilterBar.jsx'
import TaskList from './components/TaskList.jsx'
import Stats from './components/Stats.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import './index.css'

function App() {
  // Tasks persist across page refreshes via the useLocalStorage hook.
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const [statusFilter, setStatusFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  // Sync the chosen theme onto the <html> element so CSS variables switch.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const addTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: newTask.title,
        category: newTask.category,
        dueDate: newTask.dueDate,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ])
  }

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task)),
    )
  }

  // Recompute the visible list whenever tasks or the filters change.
  const visibleTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatches =
        statusFilter === 'All' ||
        (statusFilter === 'Active' && !task.completed) ||
        (statusFilter === 'Completed' && task.completed)

      const categoryMatches = categoryFilter === 'All' || task.category === categoryFilter

      return statusMatches && categoryMatches
    })
  }, [tasks, statusFilter, categoryFilter])

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

      <main>
        <TaskForm onAddTask={addTask} />

        <FilterBar
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
        />

        <Stats tasks={tasks} />

        <TaskList
          tasks={visibleTasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </main>
    </div>
  )
}

export default App
