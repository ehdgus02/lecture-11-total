import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import TodoPage from "../pages/todo/TodoPage.tsx";
import CoinPage from "../pages/coin/CoinPage.tsx";

/*
    "/" 로 시작하는 주소로 사용자가 들어왔다면,
    <MainLayout /> 먼저 화면에 출력되고,
    주소가 "/" 만 있다면 <Home /> 을 덧붙이고,
    주소가 "/" + "todo" 라면, <TodoPage /> 를 덧붙인다
*/

const GetRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "todo", element: <TodoPage /> },
            { path: "coin", element: <CoinPage /> },
        ],
    },
]);

export default GetRouter;
