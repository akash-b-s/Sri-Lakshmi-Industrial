
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './Home'; // Import Home component
import QuoteForm from './components/request-quote'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/request-quote" element={<QuoteForm />} /> {/* Quote form route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;