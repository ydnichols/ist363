import { useState } from 'react'

function SavedPage({ saved, onRemove, onMoveToJournal, navigate }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedDest, setSelectedDest] = useState(null)

  const handleMarkVisited = () => {
    if (selectedDest) {
      onMoveToJournal(selectedDest)
      setShowModal(false)
    }
  }

  return (
    <main className="page-section">
      <div className="section-header">
        <h1 className="section-title">Saved Places</h1>
        <p className="section-sub">Your favorite places to visit.</p>
      </div>

      <div className="saved-list">
        {saved.length === 0 && (
          <p className="no-more-entries">No saved destinations yet.</p>
        )}
        {saved.map((dest) => (
          <div key={dest.name} className="saved-card">
            <div className="saved-img-placeholder"></div>
            <div className="saved-info">
              <h3 className="saved-name">{dest.name}</h3>
              <p className="saved-desc">{dest.desc}</p>
            </div>
            <div className="saved-actions">
              <button
                className="heart-btn saved"
                onClick={() => onRemove(dest.name)}
                aria-label="Unsave"
              >
                ♥
              </button>
              <button
                className="trash-btn"
                onClick={() => onRemove(dest.name)}
                aria-label="Delete"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {saved.length > 0 && (
        <div className="mark-visited-bar">
          <button
            className="btn-mark-visited"
            onClick={() => {
              setSelectedDest(saved[0])
              setShowModal(true)
            }}
          >
            Mark as Visited
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">✓</div>
            <h2 className="modal-title">Move to Journal?</h2>
            <p className="modal-body">
              This will move {selectedDest?.name} to your travel journal.
            </p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn-move" onClick={handleMarkVisited}>
                Move
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default SavedPage
