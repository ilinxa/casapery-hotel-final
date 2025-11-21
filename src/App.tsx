import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
import StoryPage from './pages/StoryPage'
import Layout from './components/layout'

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journal" element={<JournalPage/>} />
      <Route path="/journal/:documentId" element={<StoryPage />} />
    </Routes>
    </Layout>
  )
}

export default App
