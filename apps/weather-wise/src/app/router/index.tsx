import { Dashboard } from '@weather-wise/feature';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

export default createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'location', element: 'Location' },
      { path: 'settings', element: 'Settings' },
      { path: 'forecast', element: 'Forecast' },
    ],
  },
]);
