import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import AnimatedRoute from "./component/animatedRoute";

function App() {
  return (
    <Router>
      <AnimatedRoute />
    </Router>
  );
}

export default App;
{
  /* <Stack />
      <About />
      <Project /> */
}
// return (
//   <Router>
//     <Routes>
//       <Route exact path="/" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//       <Route path="/Project" element={<Project />}></Route>
//       <Route path="/Stack" element={<Stack />}></Route>
//     </Routes>
//   </Router>
// );
