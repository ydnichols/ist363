import { useState } from 'react'

function SavedPage({ saved, onRemove, onMoveToJournal }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedDest, setSelectedDest] = useState(null)

  return (
    <main className="page-section">
      <div className="section-header">
        <h1 className="section-title">Saved Places</h1>
        <p className="section-sub">Your favorite places to visit.</p>
      </div>
      <div className="saved-list">
        {saved.length === 0 && <p className="no-more-entries">No saved destinations yet.</p>}
        {saved.map((dest) => (
          <div key={dest.name} className="saved-card">
            <img src={dest.image} alt={dest.name} className="saved-img-real" />
            <div className="saved-info">
              <h3 className="saved-name">{dest.name}</h3>
              <p className="saved-desc">{dest.desc}</p>
            </div>
            <div className="saved-actions">
              <button className="heart-btn saved" onClick={() => onRemove(dest.name)}>♥</button>
              <button className="trash-btn" onClick={() => onRemove(dest.name)}>🗑</button>
            </div>
          </div>
        ))}
      </div>
      {saved.length > 0 && (
        <div className="mark-visited-bar">
          <button className="btn-mark-visited" onClick={() => { setSelectedDest(saved[0]); setShowModal(true) }}>Mark as Visited</button>
        </div>
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">✓</div>
            <h2 className="modal-title">Move to Journal?</h2>
            <p className="modal-body">This will move {selectedDest?.name} to your travel journal.</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-move" onClick={() => { onMoveToJournal(selectedDest); setShowModal(false) }}>Move</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
export default SavedPage