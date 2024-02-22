import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogDetail from './screens/BlogDetail.jsx'
import BlogScreen from './screens/BlogScreen.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,

} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<BlogScreen />} />
      <Route index path="/blog" element={<BlogScreen />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
