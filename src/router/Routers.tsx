
import NotFound from "@pages/NotFound/NotFound";
import Videos from "@pages/Videos/Videos";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";


export const Routers = createBrowserRouter([{
    path: '/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
        {index: true, element:<Videos/>},
        {path: "videos", element:<Videos/>},
        {path: "videos/:keyword", element:<Videos/>},
        {path: "videos/watch/:videoId", element:<Videos/>}
    ]
}])