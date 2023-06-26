import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home'; 
import Accesorios from './routes/accesorios';
import Bicicletas from './routes/bicicletas';
import Indumentaria from './routes/indumentaria';
import Repuestos from './routes/repuestos';
import Registrarse from './routes/registrarse';
const router = createBrowserRouter ([{
  path:'/',
  element: <Home/>
},
{
  path:'/bicicletas',
  element: <Bicicletas/>
},
{
  path:'/accesorios',
  element: <Accesorios/>
},
{
  path:'/indumentaria',
  element: <Indumentaria/>
},
{
  path:'/repuestos',
  element: <Repuestos/>
},
{
  path:'/registrarse',
  element: <Registrarse/>
},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);

