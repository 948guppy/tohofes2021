import React from 'react';
import { ThemeProvider, createTheme, Arwes , Heading } from 'arwes';

const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
        setTimeout(() => {
            document.querySelector(element).textContent += character;
        }, 200 * ++index);
    });
}

const Header = () => (
    <ThemeProvider theme={createTheme()}>
        <Arwes>
            <div style={{ padding: 20 }}>
                <Heading node='h1' id="typing">{typing('#typing', 'TOHO EARTH SCIENCE CLUB  -  70th TOHO FESTIVAL')}</Heading>
            </div>
        </Arwes>
    </ThemeProvider>
);

export default Header;