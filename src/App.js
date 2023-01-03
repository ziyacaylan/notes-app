import "./App.css";
import Box from "@mui/material/Box";

import SearchBox from "./componenets/SearchBox";
import Category from "./componenets/Category";
import Form from "./componenets/Form";
import Container from "./componenets/Container/Container";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="App">
      <h2 style={{ color: "#4A5568" }}>NotesApp</h2>
      <Form />
      <Category />
      <Box
        sx={{ borderBottom: 1, borderColor: "grey.500", width: "100%" }}
      ></Box>
      <SearchBox />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
