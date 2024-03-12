import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnnoncePage } from 'pages/AnnoncePage/AnnoncePage';
import { AllAnnoncesPages } from './pages/AllAnnoncesPages/AllAnnoncesPages';
import { AnnonceCreate } from './pages/annonceCreate/AnnonceCreate';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<AllAnnoncesPages />} />
          <Route path="/annonce/:annonceId" element={<AnnoncePage />} />
          <Route path="/annonce/new" element={<AnnonceCreate />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
