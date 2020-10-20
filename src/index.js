import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const Page = () => (
    <div>
        <App/>
    </div>
);

ReactDOM.render(<Page />, document.querySelector('#root'));