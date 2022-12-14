import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import LectorsPage from './pages/lectors/LectorsPage';
import StudentsPage from './pages/students/StudentsPage';
import AppBar from './components/layout/AppBar';
import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthContext2 = createContext();

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
      <AuthContext2.Provider value={{userName, setUserName}}>
      <AppBar userName={userName} />
      <RouterProvider router={router}/>
      </AuthContext2.Provider>
    </AuthContext.Provider>
  );
}

export default App;
