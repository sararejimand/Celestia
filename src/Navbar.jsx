import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#0b0c2a', color: 'white' }}>
        <h2 style={{ display: 'inline', marginRight: '2rem' }}>✨ Stellar Stories</h2>
        <Link to="/" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/Constellations " style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Constellations </Link>
        <Link to="/Cultures" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Cultures</Link>

        </nav>
    )
}

export default Navbar
