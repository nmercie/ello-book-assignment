import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import { ReadingListProvider } from './frontend/context/ReadingListContext';
import theme from './theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <ReadingListProvider>
        <App />
      </ReadingListProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
