import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'layouts/layout';

import { PUBLIC_ROUTES } from 'config/routes';

import './App.css';

const Home = lazy(async () => await import('pages/home'));
const Error404 = lazy(async () => await import('pages/404'));

function App() {

  return (
    <Suspense fallback={<>Loading...</>}>
      <Layout>
        <Routes>
          <Route path={PUBLIC_ROUTES.home} element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
