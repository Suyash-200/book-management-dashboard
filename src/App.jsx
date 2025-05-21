import { Routes, Route } from 'react-router-dom'
import Dashboard from '../src/pages/Dashboard'
import Layout from '../src/Components/Layout'
import AddEditBook from './pages/AddEditBook'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="add" element={<AddEditBook />} />
        <Route path="edit/:id" element={<AddEditBook />} />
      </Route>
    </Routes>
  )
}

export default App