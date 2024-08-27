import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/Main";
import ToC from "./pages/ToC";
import Chapter1 from "./pages/chapters/Chapter1";
import Chapter2 from "./pages/chapters/Chapter2";
import Chapter3 from "./pages/chapters/Chapter3";
import Chapter4 from "./pages/chapters/Chapter4";
import Chapter5 from "./pages/chapters/Chapter5";
import Chapter6 from "./pages/chapters/Chapter6";
import Chapter7 from "./pages/chapters/Chapter7";
import AppendixSpells from "./pages/appendices/AppendixSpells";
import AppendixWeapons from "./pages/appendices/AppendixWeapons";
import AppendixArmor from "./pages/appendices/AppendixArmor";
import AppendixItems from "./pages/appendices/AppendixItems";
import AppendixBestiary from "./pages/appendices/AppendixBestiary";
import Sheet from "./pages/Sheet";
import AppendixFeats from "./pages/appendices/AppendixFeats";
import {SheetPage2} from "./pages/SheetPage2";

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
		path: "/feats",
		element: <AppendixFeats />,
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
		path: "/bestiary",
		element: <AppendixBestiary />,
	},
	{
		path: "/sheet",
		element: <Sheet />,
	},
	{
		path: "/sheet2",
		element: <SheetPage2 />,
	},
]);

//ScrollToHashElement properties:
//behavior -> "auto", "instant", "smooth"
//inline -> "center", "end", "nearest", "start"
//block -> "center", "end", "nearest", "start"
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
