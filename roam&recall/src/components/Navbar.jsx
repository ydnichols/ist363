function Navbar({ currentPage, navigate }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">Roam <span>&amp;</span> Recall</div>
      <ul className="nav-links">
        <li><button className={`nav-link ${currentPage === 'explore' ? 'active' : ''}`} onClick={() => navigate('explore')}>Explore</button></li>
        <li><button className={`nav-link ${currentPage === 'saved' ? 'active' : ''}`} onClick={() => navigate('saved')}>Saved</button></li>
        <li><button className={`nav-link ${currentPage === 'journal' ? 'active' : ''}`} onClick={() => navigate('journal')}>Journal</button></li>
      </ul>
      <div className="avatar-circle">YN</div>
    </nav>
  )
}
export default Navbar