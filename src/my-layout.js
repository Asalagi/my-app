import './layout-css.css';
import logo from './three-running-horses.png';

function Layout() {
    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img src={logo} alt='' />
                    </div>
                    <li><a href="#theteam">The Team</a></li>
                    <li><a href="#facilities">Facilities</a></li>
                    <li><a href="#stallions">Stallions</a></li>
                    <li><a href="#mares">Mares</a></li>
                    <li><a href="#forsale">For Sale</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout;