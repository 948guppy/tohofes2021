import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Arwes, createTheme, Heading, ThemeProvider} from "arwes";

const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 200 * ++index);
    });
}

function App() {
    return (
        <ThemeProvider theme={createTheme()}>
            <Arwes animate show>
                <div style={{padding: 20}}>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <Heading node='h1' id="typing">
                                {typing('#typing', 'TOHO EARTH SCIENCE CLUB  -  70th TOHO FESTIVAL')}
                            </Heading>
                        </header>
                    </div>
                </div>
            </Arwes>
        </ThemeProvider>
    );
}

export default App;