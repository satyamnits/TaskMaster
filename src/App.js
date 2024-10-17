import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('todo')) || []);
  return (
    <div className="App">
      <Header />
      <Main list={list} setList={setList} />
      <Footer />
    </div>
  );
}

export default App;
