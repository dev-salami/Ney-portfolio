import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

import "./App.css";

import AnimatedRoute from "./component/animatedRoute";

function App() {
  return (
    <DataProvider>
      <Router>
        <AnimatedRoute />
      </Router>
    </DataProvider>
  );
}

export default App;
