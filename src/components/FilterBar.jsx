const STATUS_FILTERS = ['All', 'Active', 'Completed']
const CATEGORY_FILTERS = ['All', 'Work', 'Personal', 'Urgent']

function FilterBar({
  statusFilter,
  onStatusFilterChange,
  categoryFilter,
  onCategoryFilterChange,
}) {
  return (
    <div className="filter-bar">
      <div className="status-filters">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            className={statusFilter === status ? 'active' : ''}
            onClick={() => onStatusFilterChange(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <select
        value={categoryFilter}
        onChange={(event) => onCategoryFilterChange(event.target.value)}
        aria-label="Filter by category"
      >
        {CATEGORY_FILTERS.map((cat) => (
          <option key={cat} value={cat}>
            {cat === 'All' ? 'All Categories' : cat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
