import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@core/layout';
import checkPermission from '@/utils/checkPermission';
import { Spinner } from '@chakra-ui/react';

const MAIN_PAGE = lazy(() => import('@views/main'));
const ABOUT_PAGE = lazy(() => import('@views/about'));
const SERVICES_PAGE = lazy(() => import('@views/services'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: checkPermission(['view_main_page']) ? (
          <Suspense fallback={<Spinner />}>
            {' '}
            <MAIN_PAGE />
          </Suspense>
        ) : (
          <Navigate to="/no-permission" />
        ),
        permission: ['view_main_page']
      },
      {
        path: 'about',
        element: checkPermission(['view_about_page']) ? (
          <Suspense fallback={<Spinner />}>
            {' '}
            <ABOUT_PAGE />
          </Suspense>
        ) : (
          <Navigate to="/no-permission" />
        ),
        permission: ['view_about_page'],
        children: [
          {
            path: '/about/1',

            element: checkPermission(['view_about_page1']) ? (
              <h1>About 1</h1>
            ) : (
              <Navigate to="/no-permission" />
            ),
            permission: ['view_about_page1']
          },
          {
            path: '/about/2',
            element: checkPermission(['view_about_page2']) ? (
              <h1>About 2</h1>
            ) : (
              <Navigate to="/no-permission" />
            ),
            permission: ['view_about_page2']
          }
        ]
      },
      {
        path: 'info',
        element: checkPermission(['view_services_page']) ? (
          <Suspense fallback={<Spinner />}>
            {' '}
            <SERVICES_PAGE />
          </Suspense>
        ) : (
          <Navigate to="/no-permission" />
        ),
        permission: ['view_services_page']
      },
      {
        path: 'no-permission',
        element: <h1>NO PERMISSION</h1>
      },
      {
        path: '404',
        element: <h1>404</h1>
      }
    ]
  },

  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

export default routes;
