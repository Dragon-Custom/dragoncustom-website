import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteList } from "./RouteList";
import GlobalLayout from "./components/GlobalLayout";
import { useDarkMode } from "usehooks-ts";

export default function App() {
	const { isDarkMode } = useDarkMode();

	return (
		<>
			<main
				className={`${
					isDarkMode ? "dark" : ""
				} text-foreground bg-background`}
			>
				<BrowserRouter basename="/">
					<GlobalLayout />
					<Routes>
						{RouteList.map((route, index) => (
							<Route
								key={index}
								path={route.url}
								element={route.page}
							/>
						))}
					</Routes>
				</BrowserRouter>
			</main>
		</>
	);
}
