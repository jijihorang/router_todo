import { Navigate} from "react-router-dom";
import {lazy, Suspense} from "react";
import LoadingPage from "../pages/LoadingPage.tsx";

const TodoIndexPage = lazy(() => import("../pages/todo/TodoIndexPage"))
const TodoListPage = lazy(() => import("../pages/todo/TodoListPage"))
const TodoReadPage = lazy(() => import("../pages/todo/TodoReadPage"))

const Loading = <LoadingPage />

const todoRouter = {
    path : "/todo",
    element : <Suspense fallback={Loading}><TodoIndexPage/></Suspense>,
    children: [
        {
            path: "list",
            element : <Suspense fallback={Loading}><TodoListPage/></Suspense>
        },
        {
            path: "",
            element : <Navigate to='list' replace={true}></Navigate>
        },
        {
            path: "read/:mno",
            element: <Suspense fallback={Loading}><TodoReadPage/></Suspense>
        }
    ]
}

export default todoRouter