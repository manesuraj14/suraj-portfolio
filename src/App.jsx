import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Footer } from './components/layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans transition-colors duration-200">
          {/* Persistent Navbar */}
          <Navbar />

          {/* Main Routing Stage */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Enterprise Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
