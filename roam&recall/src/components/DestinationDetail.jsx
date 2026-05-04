function Destination({destination, navigate, onSave, saved}) {
    if (!destintion) return null

    const isSaved = saved.find((d) => d.name === destination.name)

    const highlights = [
        'Explore the local culture and landmarks',
        'Try authentic regional cuisine',
        'Visit the most iconic scenic spots',
    ]

    return (
        <main className="page-section detail-page">
            <button className="black-link" onClick={() => navigate('explore')}>
                Back
            </button>

            <div className="detail-layout">
                <div className="detail-main-img">
                    <div className="dest-img-placeholder large">
                        <span className="img-label">destination image</span>
                    </div>
                </div>

                <div className="detail-content">
                    <h2 className="detail-title">{destination.name}</h2>
                    <p className="detail-location">📍 {destination.name}</p>
          <p className="detail-body">{destination.desc}</p>

          <div className="highlights-block">
            <h4 className="highlights-title">Highlights</h4>
            <ul className="highlights-list">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="detail-thumb-row">
            <div className="thumb-placeholder"></div>
            <div className="thumb-placeholder"></div>
            <div className="thumb-placeholder"></div>
          </div>

          <div className="detail-actions">
            <button
              className="btn-save-detail"
              onClick={() => onSave(destination)}
            >
              {isSaved ? '♥ Saved' : '♡ Save'}
            </button>
            <button
              className="btn-journal-detail"
              onClick={() => navigate('journal-add')}
            >
              Add to Journal
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DestinationDetail
