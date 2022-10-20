// Import data
import Gallery from "./components/Gallery.js"
import Posting from "./components/Posting.js"
import Sidebar from "./components/Sidebar.js"
import Searchbar from "./components/Searchbar.js"
import Directory from "./components/Directory.js"
import Help from "./components/Help"
import {postings} from "./postings.js"
// Import components
import './App.css';

function App(){
  return (
    <div>
      <Gallery></Gallery>
      <postings></postings>
      <Posting></Posting>
      <Searchbar></Searchbar>
      <Help></Help>
      <Directory></Directory>
      <Sidebar></Sidebar>
      <Gallery positngs = {postings}></Gallery>
      <div className="App">
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
