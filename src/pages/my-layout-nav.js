import './layout.css';
import logo from './three-running-horses.png';

function NavigationBar() {
    return (
        <div>
            <nav className="layout-navbar layout-background">
                <ul className="layout-nav-list">
                    <div className="logo">
                        <img src={logo} alt='' />
                    </div>
                    <li><a href="my-layout-team">The Team</a></li>
                    <li><a href="#facilities">Facilities</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#stallions">Stallions</a></li>
                    <li><a href="#mares">Mares</a></li>
                    <li><a href="#forsale">For Sale</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar;