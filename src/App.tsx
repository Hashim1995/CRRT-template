import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';
import routesList from '@core/routes';

function App() {
  const router = useRoutes(routesList);

  const a = 1

  return <Suspense fallback={<Spinner />}>{router}</Suspense>;
}

export default App;
