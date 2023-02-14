import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import { StatusProvider } from './hooks/statusContext';

import './styles/index.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route
              path='quiz'
              element={
                <StatusProvider>
                  <Quiz />{' '}
                </StatusProvider>
              }
            />
          </Route>
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
