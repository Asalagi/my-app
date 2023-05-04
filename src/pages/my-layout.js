import './layout.css';
import logo from './three-running-horses.png';
import farm from './horse-ranch.jpeg';

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
                    <li><a href="#services">Services</a></li>
                    <li><a href="#stallions">Stallions</a></li>
                    <li><a href="#mares">Mares</a></li>
                    <li><a href="#forsale">For Sale</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

          <section className="section">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big">
                        Welcome to the ranch!
                    </h1>
                    <div className="image-container">
                    <img src={farm} alt='' />
                    </div>
                    <p className="text-small blah-blah">
                        Put some text here maybe add a picture or something. 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                    </p>
                </div>
            </div>
          </section>
          <footer className="footer">
            <p className="text-footer">
                Put some foot text here
            </p>
          </footer>
        </div>
    )
}

export default Layout;