import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./components/pages/Main";
import ToC from "./components/pages/ToC";
import Chapter1 from "./components/pages/chapters/Chapter1";
import Chapter2 from "./components/pages/chapters/Chapter2";
import Chapter3 from "./components/pages/chapters/Chapter3";
import Chapter4 from "./components/pages/chapters/Chapter4";
import Chapter5 from "./components/pages/chapters/Chapter5";
import Chapter6 from "./components/pages/chapters/Chapter6";
import Chapter7 from "./components/pages/chapters/Chapter7";
import AppendixSpells from "./components/pages/appendices/AppendixSpells";
import AppendixWeapons from "./components/pages/appendices/AppendixArmor";
import AppendixArmor from "./components/pages/appendices/AppendixArmor";
import AppendixItems from "./components/pages/appendices/AppendixItems";
import Sheet from "./components/pages/Sheet";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "chapters",
		element: <ToC />,
	},
	{
		path: "/chapters/1",
		element: <Chapter1 />,
	},
	{
		path: "/chapters/2",
		element: <Chapter2 />,
	},
	{
		path: "/chapters/3",
		element: <Chapter3 />,
	},
	{
		path: "/chapters/4",
		element: <Chapter4 />,
	},
	{
		path: "/chapters/5",
		element: <Chapter5 />,
	},
	{
		path: "/chapters/6",
		element: <Chapter6 />,
	},
	{
		path: "/chapters/7",
		element: <Chapter7 />,
	},
	{
		path: "/spells",
		element: <AppendixSpells />,
	},
	{
		path: "/weapons",
		element: <AppendixWeapons />,
	},
	{
		path: "/armor",
		element: <AppendixArmor />,
	},
	{
		path: "/items",
		element: <AppendixItems />,
	},
	{
		path: "/sheet",
		element: <Sheet />,
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
