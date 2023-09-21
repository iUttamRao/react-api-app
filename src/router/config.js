import { createBrowserRouter } from "react-router-dom";
import { ADDEMPLOYEE, EMPLOYEE } from "./keys";
import { AddEmployee, Employee } from "../pages";

const router = createBrowserRouter([
    {
        path: ADDEMPLOYEE,
        element: <AddEmployee />
    },
    {
        path: EMPLOYEE,
        element: <Employee />
    }
]);

export default router;

