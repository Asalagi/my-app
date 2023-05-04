import './layout.css';
import farm from './horse-ranch.jpeg';
import NavigationBar from './my-layout-nav';
import LayoutFooter from './my-layout-footer';

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
          <div>
            <LayoutFooter />
          </div>
        </div>
    )
}

export default Layout;