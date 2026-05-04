function DestinationDetail({ destination, navigate, onSave, saved }) {
  if (!destination) return null
  const isSaved = saved.find((d) => d.name === destination.name)
  return (
    <main className="page-section detail-page">
      <button className="back-link" onClick={() => navigate('explore')}>← Back</button>
      <div className="detail-layout">
        <div className="detail-main-img">
          <img src={destination.image} alt={destination.name} className="dest-img-real large" />
        </div>
        <div className="detail-content">
          <h2 className="detail-title">{destination.name}</h2>
          <p className="detail-location">📍 {destination.name}</p>
          <p className="detail-body">{destination.desc}</p>
          <div className="highlights-block">
            <h4 className="highlights-title">Highlights</h4>
            <ul className="highlights-list">
              <li>Explore the local culture and landmarks</li>
              <li>Try authentic regional cuisine</li>
              <li>Visit the most iconic scenic spots</li>
            </ul>
          </div>
          <div className="detail-actions">
            <button className="btn-save-detail" onClick={() => onSave(destination)}>{isSaved ? '♥ Saved' : '♡ Save'}</button>
            <button className="btn-journal-detail" onClick={() => navigate('journal-add')}>Add to Journal</button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default DestinationDetail