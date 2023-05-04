import './layout.css';
import logo from './three-running-horses.png';
import farm from './horse-ranch.jpeg';
import NavigationBar from './my-layout-nav'

function Layout() {
    return (
        <div>
           <div>
            <NavigationBar />
           </div>
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