import { BrowderRouter, Routes } from 'react-router-dom';

import styles from './app.module.css';
import LandingPage from './components/search/search_page';

function App() {
  return (
    <div>
      <BrowderRouter>
        <Routes>
          <LandingPage />
        </Routes>
      </BrowderRouter>
    </div>
  );
}

export default App;
