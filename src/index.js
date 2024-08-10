import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{

  path:"/",
  element:<Home />
}])


root.render(<RouterProvider router={router}/>);

