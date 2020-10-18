import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, Arwes, Button } from 'arwes';

const App = () => (
    <ThemeProvider theme={createTheme()}>
        <Arwes animate show>
            <div style={{ padding: 20 }}>
                <h1>My App</h1>
                <p>A SciFi Project</p>
                <Button animate show>Travel to Space</Button>
            </div>
        </Arwes>
    </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));