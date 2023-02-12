import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardHome from './components/CardHome';
import CardQuestion from './components/CardQuestion';
import CardResult from './components/CardResult';
import NotFound from './pages/NotFound';
import { StatusProvider } from './hooks/statusContext';

import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route index element={<CardHome />} />
            <Route
              element={
                <StatusProvider>
                  <CardQuestion />
                </StatusProvider>
              }
              path='quiz'
            />
            <Route
              element={
                <StatusProvider>
                  <CardResult />
                </StatusProvider>
              }
              path='result'
            />
          </Route>
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
