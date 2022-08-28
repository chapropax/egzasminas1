import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const AdminPage = lazy(() => import('./pages/admin'));
const GuestPage = lazy(() => import('./pages/default'));
const EditUser = lazy(() => import('./components/EditUser'));
const SinglePage = lazy(() => import('./components/SinglePost'));
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<GuestPage />} />
          <Route path='clients/:id' element={<SinglePage />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path='admin/edituser/:id' element={<EditUser />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
