import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import './App';
import './Assets/styles/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './context/DataContext';
import Header from './Components/Header';
import { CounterContextProvider } from './context/Data-counter';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';
import { UserContextProvider } from './context/User-context';

const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <UserContextProvider>
        <CounterContextProvider>
          <QueryClientProvider client={client}>
            <Router>
              <Header />
              <App />
            </Router>
          </QueryClientProvider>
        </CounterContextProvider>
      </UserContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);

