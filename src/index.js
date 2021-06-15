import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDeail from "./comment-detail";

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDeail author="Sam" />
			<CommentDeail author="Alex" />
			<CommentDeail author="Jane" />
			<CommentDeail author="Josh" />
			<CommentDeail author="Lynda" />
			<CommentDeail author="Bob" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
