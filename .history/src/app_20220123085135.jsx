import { BrowderRouter, Routes } from 'react-router-dom';
import styles from './app.module.css';
import MapContainer from './components/container/map_container';
import SearchPlace from './components/search/search_page';

function App() {
  return (
    <div className={styles.app}>
      <MapContainer searchPlace={place} />
      <SearchPlace />
    </div>
  );
}

export default App;
