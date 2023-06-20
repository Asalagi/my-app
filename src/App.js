import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import HorseComponent from "./horse-component";
import Shop from "./shopping";

import Layout from "./pages/my-layout";
import NavigationBar from "./pages/my-layout-nav";
import LayoutFooter from "./pages/my-layout-footer";
import HomePage from "./pages/my-layout-homepage";
import NewsLetter from "./pages/newsletter";
import TeamPage from "./pages/my-layout-team";
import TeamComponent from "./pages/team-component";

import DogPaws from "./dog-paws";
import DogPawsAbout from "./dog-paws-about";

function App() {
  const { id } = useParams();
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
            <Route path="example" element={<h2>Example Path</h2>} />
            <Route path="horse" element={<HorseComponent />} />
            <Route path="shopping" element={<Shop />} />

            <Route path="pages/my-layout" element={<Layout />} />
            <Route path="pages/my-layout-nav" element={<NavigationBar />} />
            <Route path="pages/my-layout-footer" element={<LayoutFooter />} />
            <Route path="pages/my-layout-homepage" element={<HomePage />} />
            <Route path="pages/newsletter" element={<NewsLetter />} />
            <Route path="pages/my-layout-team" element={<TeamPage />} />
            <Route path="pages/team-component" element={<TeamComponent />} />
            
            <Route path="dog-paws" element={<DogPaws />} />
            <Route path="dog-paws-about" element={<DogPawsAbout />} />
            <Route path="user">
                <Route path=":id" element={<h2>Example path variable {id}</h2>} />
            </Route>
            <Route path="404" element={<h2>404 Page</h2>} />
            <Route
                path="*"
                element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;