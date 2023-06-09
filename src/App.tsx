import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';
import routesList from '@core/routes';
import './core/global.scss';

function App() {
  const router = useRoutes(routesList);

  return <Suspense fallback={<Spinner />}>{router}</Suspense>;
}

export default App;
