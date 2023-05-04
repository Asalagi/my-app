import './layout.css';
import NavigationBar from './my-layout-nav';
import LayoutFooter from './my-layout-footer';
import TeamComponent from './team-component';

function TeamPage() {
    return (
        <div>
           <div>
            <NavigationBar />
           </div>
           <div>
            <TeamComponent />
           </div>
          <div>
            <LayoutFooter />
          </div>
        </div>
    )
}

export default TeamPage;