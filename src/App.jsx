import React from 'react';
import AppRouter from './routes/AppRouter';
import { AppProvider } from './store/AppContext';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
