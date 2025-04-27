import { Route, BrowserRouter, Routes } from "react-router-dom";

import Blog from "./pages/Blog";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="blog/:postId" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
