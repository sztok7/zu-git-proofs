import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GithubLogin from './GithubLogin';
import GitHubCallback from './GitHubCallback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App"><GithubLogin /></div>} />
        <Route path="/github/callback" element={<GitHubCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
