import 'bootstrap/dist/css/bootstrap.min.css';
// import { AddEmployee, Employee } from './pages';
import { RouterProvider } from 'react-router-dom';
import router from './router/config';

// const url
function App() {
  return (
    <RouterProvider router={router} />
    // <AddEmployee />
    // <Employee />
  );
}

export default App;
