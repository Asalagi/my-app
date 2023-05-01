import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/NotFound">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}