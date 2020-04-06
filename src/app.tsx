import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'react-jss';

import Home from './components/containers/home';

const theme = {
    background: '#f7df1e',
    color: '#24292e',
};

const App: FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}

export default App;
