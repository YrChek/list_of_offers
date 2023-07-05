import Listing from './components/Listing';
import { catalog } from './data/catalog'
import './App.css';

let regular = catalog.replace(/\n/ig, '\\n').replace(/\r/ig, '\\r').replace(/\t/ig, '\\t');
const items = JSON.parse(regular)

function App() {
  return (
    <div className="item-list">
      <Listing items={ items }/>
    </div>
  );
}

export default App;
