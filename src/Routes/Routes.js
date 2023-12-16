import { useRoutes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Careers from "../components/Careers/Careers";
import Location from "../components/Location/Location";

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/careers',
            element: <Careers />
        },
        {
            path: '/location',
            element: <Location />
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ])
    return routes
}