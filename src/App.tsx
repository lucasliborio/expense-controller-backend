import React from 'react';
import { AuthContextProvider } from './context/login/auth-context';
import { LoginPage } from './page/login/login-page';

function App() {
  return (
    <AuthContextProvider>
      <LoginPage />
    </AuthContextProvider>
  )
}

export default App;
