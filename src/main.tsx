import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import initMocks from './mocks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
if (process.env.NODE_ENV === 'development') {
  await initMocks();
}
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
