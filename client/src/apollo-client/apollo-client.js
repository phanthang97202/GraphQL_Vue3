import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
// create http links
const httpLinks = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLinks
})
