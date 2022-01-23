import { BrowderRouter, Routes } from 'react-router-dom';
import styles from './app.module.css';
import SearchPlace from './components/search/search_page';

function App() {
  return (
    <div className={styles.app}>
      <SearchPlace />
    </div>
  );
}

export default App;
