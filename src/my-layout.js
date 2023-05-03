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
            <div className="rightNav">
                <input type="text" name="search" id="search" />
                <button className="btn btn-sm">Search</button>
            </div>
            </nav>

          <section className="section">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big">Put some titling text here
                    </h1>
                    <p className="text-small">
                        Put some text here maybe add a picture or something.
                    </p>
                </div>
            </div>
          </section>
          <section className="section">
            <div className="box-main">
                <div className="secondHalf">
                    <h1 className="text-big" id="program">
                        Some more big text here
                    </h1>
                    <p className="text-small">
                        some more text here add a picture or something.
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