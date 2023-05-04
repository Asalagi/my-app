import './layout.css';
import NavigationBar from './my-layout-nav';
import LayoutFooter from './my-layout-footer';
import HomePage from './my-layout-homepage';

function Layout() {
    return (
        <div>
           <div>
            <NavigationBar />
           </div>
           <div>
            <HomePage />
           </div>
          <div>
            <LayoutFooter />
          </div>
        </div>
    )
}

export default Layout;