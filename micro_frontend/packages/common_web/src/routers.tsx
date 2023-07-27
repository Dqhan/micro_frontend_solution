import React, { lazy } from 'react';
import Management from './pages/management';
import Layout from './pages/layout';
const Application_React_A = lazy(() => import('./components/Application_React_A'))
const Application_React_B =  lazy(() => import('./components/Application_React_B'))
const Application_Vue  = lazy(() => import('./components/Application_Vue'))
const Application_Components = lazy(() => import('./components/Application_Components'))
// const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
 
export const routers = [
  {
    path: '/',
    element:<>
     <Layout />
     </>,
    children: [
      {
        path: 'management',
        element: <Management />,  
      },
      {
        path: 'react-app-a/*',
        element: <Application_React_A />,  
      },
      {
        path: 'react-app-b/*',
        element: <Application_React_B />,  
      },
      {
        path: 'vue-app/*',
        element: <Application_Vue />,  
      },
      {
        path: 'components/*',
        element: <Application_Components />,  
      }
    ],
  },
];