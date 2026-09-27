# Personal Task Manager

A simple, fast to-do app for organizing daily tasks by category, tracking due dates, and keeping your list even after you close the tab.

## Features

- Add, edit (double-click a task or click ✏️), and delete tasks
- Mark tasks complete/incomplete with a checkbox
- Organize tasks into categories: Work, Personal, Urgent
- Filter by status (All / Active / Completed) and by category
- Live count of remaining, completed, and total tasks
- Tasks persist in the browser via `localStorage` — refreshing the page keeps your data
- Optional due dates, with overdue tasks visually flagged
- Light/dark theme toggle (also persisted)

## Technologies Used

- React 18 (functional components + hooks)
- Vite (build tool / dev server)
- Plain CSS (CSS variables for theming, flexbox for layout)
- Browser `localStorage` API

## Setup Instructions

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Screenshots

_Add 2–3 screenshots here of the app running (e.g. empty state, a filled task list, and the dark theme)._

## Known Limitations

- No drag-and-drop reordering of tasks yet
- Categories are fixed (Work / Personal / Urgent) rather than user-defined
- Data is stored only in the current browser (no account/sync across devices)
