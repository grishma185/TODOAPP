function Stats({ tasks }) {
  const remaining = tasks.filter((task) => !task.completed).length
  const completed = tasks.length - remaining

  return (
    <div className="stats">
      <span>{remaining} remaining</span>
      <span>{completed} completed</span>
      <span>{tasks.length} total</span>
    </div>
  )
}

export default Stats
