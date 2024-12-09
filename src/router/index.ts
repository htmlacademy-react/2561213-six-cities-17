import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

export * from './route';

export const router = createBrowserRouter(routes);
