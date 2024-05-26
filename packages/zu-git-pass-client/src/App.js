import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import GithubLogin from './GithubLogin';
import GitHubCallback from './GitHubCallback';
import ZupassLogin from './ZupassLogin.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/github" element={<div className="App"><GithubLogin /></div>} />
        <Route path="/" element={<div className="App"> <ZupassLogin /></div>} />
        <Route path="/auth/github/callback" element={<GitHubCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
