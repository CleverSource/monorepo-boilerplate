import { withApollo } from "next-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const isBrowser = typeof window !== "undefined";

const apolloClient = new ApolloClient({
  connectToDevTools: isBrowser,
  ssrMode: !isBrowser,
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: "include",
  }),

  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
