import React from 'react';
import Navigation from './src/navigation';
import { ApolloProvider } from '@apollo/client';
import {client} from '@app/config/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}