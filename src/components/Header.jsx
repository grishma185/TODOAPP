// Presentational component. Receives the current theme and a callback
// (props) from App and does not manage any state of its own.
function Header({ theme, onToggleTheme }) {
  return (
    <header className="app-header">
      <div>
        <h1>Personal Task Manager</h1>
        <p className="subtitle">Stay on top of your day.</p>
      </div>
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label="Toggle dark and light theme"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  )
}

export default Header
