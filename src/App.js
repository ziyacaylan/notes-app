import "./App.css";
import SearchBox from "./componenets/SearchBox";
import Category from "./componenets/Category";
import Form from "./componenets/Form";
import NoteBox from "./componenets/NoteBox";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="App">
      <h2 style={{ color: "#4A5568" }}>NotesApp</h2>
      <Form />
      <Category />
      <SearchBox />
      <NoteBox />
      <Footer />
    </div>
  );
}

export default App;
