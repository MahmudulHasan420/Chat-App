
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import Ragistration from './Pages/Ragistration';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Ragistration />}
      >
      </Route>
    )
  );
 

  return (
    <>
     <RouterProvider router={router} />
   
    </>
  
  )
}

export default App
