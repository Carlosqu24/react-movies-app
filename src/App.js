import './App.css';

// COMPONENTS
import { Header } from './components/Header';
import { Movie} from './components/Movie/';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import { HomePage } from './pages/HomePage/HomePage';
import { WatchListPage } from './pages/WatchListPage';

// CONTEXT
import { ContextProvider } from './context/GlobalContext';


function App() {
  return (
    <ContextProvider>
        <div className="App">
          <Router>
              <Header />

              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/movies/:id" component={Movie} />
                  <Route exact path="/watchlist" component={WatchListPage} />
              </Switch>
          </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
