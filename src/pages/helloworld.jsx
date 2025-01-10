import React from "react";
import { Link } from "react-router-dom";

import Titlebar from "../components/Titlebar";

function HelloWorldPage() {
	return (
		<>
			<Titlebar />

			<Link
				to="/page1"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Page 1
			</Link>
			<Link
				to="/page2"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Page 2
			</Link>
			<Link
				to="/page3"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Page 3
			</Link>
			<Link
				to="/page4"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Page 4
			</Link>
		</>
	);
}

export default HelloWorldPage;