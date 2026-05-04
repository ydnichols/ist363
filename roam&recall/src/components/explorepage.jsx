import {useState} from 'react'

const destinations = [
    { name: 'Bali, Indonesia', location: 'Asia', type: 'Beach', desc: 'Tropical paradise with rich culture, rice terraces, and volcanic peaks.' },
    { name: 'Kyoto, Japan', location: 'Asia', type: 'Cultural', desc: 'Ancient temples, geisha districts, and stunning seasonal foliage.' },
    { name: 'Santorini, Greece', location: 'Europe', type: 'Beach', desc: 'Iconic white-washed cliffs, blue domes, and Aegean sunsets.' },
    { name: 'Marrakech, Morocco', location: 'Africa', type: 'Cultural', desc: 'Vibrant souks, ornate riads, and the magic of the Medina.' },
    { name: 'Patagonia, Argentina', location: 'Americas', type: 'Mountain', desc: 'Wild glaciers, dramatic peaks, and endless open skies.' },
    { name: 'Amalfi Coast, Italy', location: 'Europe', type: 'Beach', desc: 'Dramatic cliffside villages, turquoise waters, and citrus groves.' },
  ]
  
  function ExplorePage({ navigate, onSave, saved, setSelectedDestination }) {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('All regions')
    const [type, setType] = useState('All types')
  
    const filtered = destinations.filter((d) => {
      const matchSearch = d.name.toLowerCase().includes(search.toLowerCase())
      const matchRegion = region === 'All regions' || d.location === region
      const matchType = type === 'All types' || d.type === type
      return matchSearch && matchRegion && matchType
    })
  
    const isSaved = (name) => saved.find((d) => d.name === name)
  
    return (
      <main className="page-section">
        <div className="section-header">
          <h1 className="section-title">Explore Destinations</h1>
          <p className="section-sub">Discover your next adventure</p>
        </div>
  
        <div className="search-bar-row">
          <div className="search-bar">
            <span className="search-icon">⚲</span>
            <input
              type="text"
              placeholder="Search destinations…"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filters">
            <select className="filter-select" value={region} onChange={(e) => setRegion(e.target.value)}>
              <option>All regions</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Americas</option>
              <option>Africa</option>
              <option>Oceania</option>
            </select>
            <select className="filter-select" value={type} onChange={(e) => setType(e.target.value)}>
              <option>All types</option>
              <option>Beach</option>
              <option>City</option>
              <option>Mountain</option>
              <option>Cultural</option>
            </select>
          </div>
        </div>
  
        <div className="destination-grid">
          {filtered.map((dest) => (
            <div key={dest.name} className="dest-card">
              <div className="dest-img">
                <div className="dest-img-placeholder">
                  <span className="img-label">Destination Image</span>
                </div>
                <button
                  className="save-heart"
                  onClick={() => onSave(dest)}
                  aria-label="Save"
                >
                  {isSaved(dest.name) ? '♥' : '♡'}
                </button>
              </div>
              <div
                className="dest-info"
                onClick={() => {
                  setSelectedDestination(dest)
                  navigate('destination')
                }}
              >
                <h3 className="dest-name">{dest.name}</h3>
                <p className="dest-desc">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }
  
  export default ExplorePage
  