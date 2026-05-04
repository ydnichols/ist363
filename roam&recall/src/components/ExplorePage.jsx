import { useState } from 'react'

const destinations = [
  { name: 'Bali, Indonesia', location: 'Asia', type: 'Beach', desc: 'Tropical paradise with rich culture, rice terraces, and volcanic peaks.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600' },
  { name: 'Kyoto, Japan', location: 'Asia', type: 'Cultural', desc: 'Ancient temples, geisha districts, and stunning seasonal foliage.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600' },
  { name: 'Santorini, Greece', location: 'Europe', type: 'Beach', desc: 'Iconic white-washed cliffs, blue domes, and Aegean sunsets.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600' },
  { name: 'Marrakech, Morocco', location: 'Africa', type: 'Cultural', desc: 'Vibrant souks, ornate riads, and the magic of the Medina.', image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600' },
  { name: 'Patagonia, Argentina', location: 'Americas', type: 'Mountain', desc: 'Wild glaciers, dramatic peaks, and endless open skies.', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600' },
  { name: 'Amalfi Coast, Italy', location: 'Europe', type: 'Beach', desc: 'Dramatic cliffside villages, turquoise waters, and citrus groves.', image: 'https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=600' },
]

function ExplorePage({ navigate, onSave, saved, setSelectedDestination }) {
  const [search, setSearch] = useState('')

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="page-section">
      <div className="section-header">
        <h1 className="section-title">Explore Destinations</h1>
        <p className="section-sub">Discover your next adventure</p>
      </div>
      <div className="search-bar-row">
        <div className="search-bar">
          <input type="text" placeholder="Search destinations…" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="destination-grid">
        {filtered.map((dest) => (
          <div key={dest.name} className="dest-card" onClick={() => { setSelectedDestination(dest); navigate('destination') }}>
            <div className="dest-img">
              <img src={dest.image} alt={dest.name} className="dest-img-real" />
              <button className="save-heart" onClick={(e) => { e.stopPropagation(); onSave(dest) }}>
                {saved.find((d) => d.name === dest.name) ? '♥' : '♡'}
              </button>
            </div>
            <div className="dest-info">
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