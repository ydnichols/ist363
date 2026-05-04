import { useState } from 'react'
import Navbar from './components/Navbar'
import ExplorePage from './components/ExplorePage'
import DestinationDetail from './components/DestinationDetail'
import SavedPage from './components/SavedPage'
import JournalPage from './components/JournalPage'
import JournalAdd from './components/JournalAdd'

function App() {
  const [currentPage, setCurrentPage] = useState('explore')
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [saved, setSaved] = useState([])
  const [journal, setJournal] = useState([])

  const navigate = (page) => setCurrentPage(page)

  const handleSave = (dest) => {
    if (!saved.find((d) => d.name === dest.name)) {
      setSaved([...saved, dest])
    }
  }

  const handleRemoveSaved = (name) => setSaved(saved.filter((d) => d.name !== name))

  const handleAddJournal = (entry) => {
    setJournal([...journal, entry])
    navigate('journal')
  }

  const handleDeleteJournal = (index) => setJournal(journal.filter((_, i) => i !== index))

  const handleMoveToJournal = (dest) => {
    handleRemoveSaved(dest.name)
    setSelectedDestination(dest)
    navigate('journal-add')
  }

  return (
    <div>
      <Navbar currentPage={currentPage} navigate={navigate} />
      {currentPage === 'explore' && <ExplorePage navigate={navigate} onSave={handleSave} saved={saved} setSelectedDestination={setSelectedDestination} />}
      {currentPage === 'destination' && <DestinationDetail destination={selectedDestination} navigate={navigate} onSave={handleSave} saved={saved} />}
      {currentPage === 'saved' && <SavedPage saved={saved} onRemove={handleRemoveSaved} onMoveToJournal={handleMoveToJournal} navigate={navigate} />}
      {currentPage === 'journal' && <JournalPage journal={journal} navigate={navigate} onDelete={handleDeleteJournal} />}
      {currentPage === 'journal-add' && <JournalAdd navigate={navigate} onSave={handleAddJournal} destination={selectedDestination} />}
    </div>
  )
}

export default App