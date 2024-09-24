import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import LoadingPage from "../pages/LoadingPage.tsx";
import todoRouter from "./todoRouter.tsx";

const MainPage = lazy(() => import("../pages/MainPage"))
const ContactPage = lazy(() => import("../pages/ContactPage"))

const Loading = <LoadingPage />

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={Loading}><MainPage/></Suspense>
    },
    {
        path: '/contact',
        element: <Suspense fallback={Loading}><ContactPage/></Suspense>
    },
    todoRouter
])

export default mainRouter