import React from "react";
import { Link } from "react-router-dom";

import Titlebar from "../components/Titlebar";

function Page1() {
	return (
		<>
			<Titlebar />

			<div>
				<h1>Page 1</h1>
			</div>

			<Link
				to="/"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Home
			</Link>
		</>
	);
}

export default Page1;