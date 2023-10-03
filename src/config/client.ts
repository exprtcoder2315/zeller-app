import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_KEY, BASE_URL } from '@app/constants/constant';

export const client = new ApolloClient({
  uri: BASE_URL,
  headers: {
    'x-api-key': API_KEY
  },
 cache:new InMemoryCache()
});