import { createMuiTheme, CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import { emptyStringArr, strings } from './Constants';
import { DisplayInput, DisplayOutput, Footer, Header } from './Display';
import "fontsource-roboto";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#85ff9e",
    },
  },
});


function App() {
  const [entries, setEntries] = useState(emptyStringArr);
  const [shuffled, setShuffled] = useState(entries);

  const handleShuffle = () => {
    // Copy the list, eliminating any blank entries
    const toShuffle = [ ...entries.filter( (entry) => entry !== "" ) ];

    // Shuffle the list
    for ( let idx = toShuffle.length - 1; idx > 0; idx-- ) {
      const rIdx = Math.floor(Math.random() * (idx + 1));
      [ toShuffle[idx], toShuffle[rIdx] ] = [ toShuffle[rIdx], toShuffle[idx] ];
    };

    setShuffled(toShuffle);
  };

  const setInput = (entries: string[]) => {
    setEntries(entries);
  };

  const clearList = () => {
    setShuffled(emptyStringArr);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={0}>

        {/* Header for the Project */}
        <Grid item xs={12} style={{padding: "25px"}} >
          <Header strings={strings.header}/>
        </Grid>

        {/* Input Section Here */}
        <Grid item xs={12} sm={6} style={{padding: "25px"}} >
          <DisplayInput
            entries={entries}
            handleShuffle={handleShuffle}
            setInput={setInput}
            strings={strings.input}
          />
        </Grid>

        {/* Output Section Here */}
        <Grid item xs={12} sm={6} style={{padding: "25px"}} >
          <DisplayOutput
            clearList={clearList}
            entries={shuffled}
            strings={strings.output}
          />
        </Grid>
      </Grid>

      {/* Footer for the Project */}
      <div style={{padding: "15px"}}/>
      <Footer strings={strings.footer}/>
    </ThemeProvider>
  );
}

export default App;
