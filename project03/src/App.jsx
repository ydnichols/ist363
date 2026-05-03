import {useState} from 'react'
import './index.css'
import Navbar from './components/Navbar'
import ExplorePage from './components/DestinationDetail'
import SavedPage from './components/SavedPage'
import JournalPage from './components/JounralPage'
import JournalAdd from './components/JounralAdd'

function App() {
    const [currentPage, setCurrentPage] = useState('explore')
    const [selectedDestination, setSelectedDestination] = useState(null)

    const [saved, setSaved] = useState([])
    const [journal, setJournal] = useState([])

    const navigate = (page) => setCurrentPage(page)

    const handleSave = (destination) => {
        const alreadySaved = saved.find((d) => d.name === destination.name)
        if(!alreadySaved) {
            setSaved([...saved, destiination])
        }
    }

    const handleRemoveSaved = (name) => {
        setSaved(saved.filter((d) => d.name !== name))
    }

    const handleAddJournal = (entry) => {
        setJournal([...journal, entry])
        navigate('journal')
    }

    const handleDeleteJournal = (index) => {
        setJournal(journal.filter((_, i) => i !== index))
    }

    const handleMoveToJournal = (destination) => {
        handleRemoveSaved(destination.name)
        navigate('Journal-add')
        setSelectedDestination(destination)
    }

    return (
        <div>
            <Navbar currentPage={currentPage} navigate={naivgate}/>

            {currentPage === 'explore' && (
                <ExplorePage navigate={navigate} onSave={handleSave} saved={saved}/>
            )}

            {currentPage === 'destination' && (
                <DestinationDetail destination={selectedDestination} navigate={navigate} onSave={handleSave} saved={saved}/>
            )}

            {currentPage === 'saved' && (
                <SavedPage saved={saved} onRemove={handleRemoveSaved} onMoveToJournal={handleMoveToJournal} navigate={navigate}/>
            )}

            {currentPage === 'journal' && (
                <JournalPage journal={journal} navigate={naviagte} onDelete={handleDeleteJournal}/>
            )}

            {currentPage === 'journal-add' && (
                <JournalAdd navigate={navigate} onSave={handleAddJournal} destination={selectedDestination}/>
            )}
        </div>
    )
}

export default App