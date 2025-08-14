import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TaskPage } from './task/task.page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskPage />
  </StrictMode>,
)
