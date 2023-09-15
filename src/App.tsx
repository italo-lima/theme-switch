import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Header from './components/Header';
import userPersistedState from './utils/userPersistedState';
import GlobalStyles from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = userPersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
      }}
      >
        I'm
        <span style={{ margin: '0 1rem', fontWeight: 'bold' }}>{theme.title}</span>
        theme
      </div>
    </ThemeProvider>
  );
}

export default App;
