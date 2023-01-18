import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import LectorsPage from './pages/lectors/LectorsPage';
import StudentsPage from './pages/students/StudentsPage';
import AppBar from './components/layout/AppBar';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

function App() {
  console.log('RENDER: App');
  const [userName, setUserName] = useState("Ernestas");

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LectorsPage />
    },
    {
      path: '/students',
      element: <StudentsPage  />
    }
  ]);
  return (
      <AuthContext.Provider value={{userName, setUserName}}>
          <AppBar userName={userName} />
          <RouterProvider router={router}/>
      </AuthContext.Provider>
  );
}

export default App;
