function JournalPage({ journal, navigate, onDelete }) {
  return (
    <main className="page-section">
      <div className="journal-top-row">
        <div>
          <h1 className="section-title">My Travel Journal</h1>
          <p className="section-sub">Memories from your past trips.</p>
        </div>
        <button className="btn-add-entry" onClick={() => navigate('journal-add')}>+ Add Entry</button>
      </div>
      <div className="timeline">
        {journal.length === 0 && <p className="no-more-entries">No journal entries yet.</p>}
        {journal.map((entry, index) => (
          <div key={index} className="timeline-group">
            <div className="timeline-date">{entry.startDate}</div>
            <div className="journal-entry-card">
              <div className="entry-text">
                <h3 className="entry-dest">{entry.destination}</h3>
                <p className="entry-preview">{entry.notes}</p>
                <p className="entry-preview">{'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}</p>
              </div>
              <div className="entry-actions">
                <button className="delete-btn" onClick={() => onDelete(index)}>🗑</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
export default JournalPage