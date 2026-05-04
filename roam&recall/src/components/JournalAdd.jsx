import { useState } from 'react'

function JournalAdd({ navigate, onSave, destination }) {
  const [destName, setDestName] = useState(destination?.name || '')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [notes, setNotes] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = () => {
    if (!destName || !startDate) return
    onSave({ destination: destName, startDate, endDate, notes, rating })
  }

  return (
    <main className="page-section add-entry-page">
      <button className="back-link" onClick={() => navigate('journal')}>← Back</button>
      <div className="add-entry-card">
        <h2 className="add-entry-title">Add New Journal Entry</h2>
        <div className="form-group">
          <label className="form-label">Destination Name</label>
          <input type="text" className="form-input" value={destName} onChange={(e) => setDestName(e.target.value)} />
        </div>
        <div className="form-row two-col">
          <div className="form-group">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">End Date</label>
            <input type="date" className="form-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Trip Notes</label>
          <textarea className="form-textarea" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Rating</label>
          <div className="star-rating">
            {[1,2,3,4,5].map((star) => (
              <span key={star} className="star" onClick={() => setRating(star)} style={{ color: star <= rating ? 'var(--rose)' : 'var(--tan)' }}>
                {star <= rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <div className="add-entry-actions">
          <button className="btn-cancel-entry" onClick={() => navigate('journal')}>Cancel</button>
          <button className="btn-save-entry" onClick={handleSubmit}>Save Entry</button>
        </div>
      </div>
    </main>
  )
}
export default JournalAdd