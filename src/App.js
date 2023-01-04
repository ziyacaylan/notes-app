import "./App.scss";
import Box from "@mui/material/Box";

import SearchBox from "./componenets/SearchBox";
import Category from "./componenets/Category";
import Form from "./componenets/Form";
import Container from "./componenets/Container/Container";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="App">
      <h2 className="app-title">NotesApp</h2>
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
