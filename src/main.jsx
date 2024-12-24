import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Login from "./components/LogIn/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AddSpot from "./components/AddSpot/AddSpot.jsx";
import MyList from "./components/MyList/MyList.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Spots from "./components/Spots/Spots.jsx";
import Home from "./components/Home/Home.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/banner",
				element: <Banner></Banner>,
			},
			{
				path: "/spots",
				element: <Spots></Spots>,
			},
			{
				path: "/addspot",
				element: <AddSpot></AddSpot>,
			},
			{
				path: "/mylist",
				element: <MyList></MyList>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
