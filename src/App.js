import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import connectWeb3 from "./connectWeb3";

import Topbar from "./components/Topbar";
import Chart from "./components/chart";

const client = new ApolloClient({
  uri: "https://graphql.bitquery.io",
  cache: new InMemoryCache()
});

export default function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    const { web3, accounts } = await connectWeb3();
    setWeb3(web3);
    setAccount(accounts[0]);
  }

  async function getUserBalance() {}

  console.log(web3, account);
  return (
    <ApolloProvider client={client}>
      <div>
        <Topbar connectWallet={connectWallet} account={account} />

        <Chart />
      </div>
    </ApolloProvider>
  );
}
