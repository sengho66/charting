import React, { useState } from "react";
import "./index.css";
import { Grid, TextField, Button } from "@material-ui/core";

import { TVChartContainer } from "./ChartContainer3";
import Volume from "./volume";
import Liquidity from "./liquidity";

import getId from "../../resources";

function Chart({ tokenAddress }) {
  const [chartAddress, setChartAddress] = useState(null);
  const [asset, setAsset] = useState(null);

  const fetchTokenName = async () => {
    fetch(
      "https://api.bloxy.info/token/token_info?token=" +
        chartAddress +
        "&key=ACCSJp4jpHkmi"
    )
      .then((response) => response.json())
      .then((data) =>
        setAsset({
          ...getId(data[0].symbol.toLowerCase()),
          address: chartAddress
        })
      );
  };

  console.log(asset);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Enter token address to view chart"
            variant="outlined"
            value={chartAddress}
            onChange={(e) => setChartAddress(e.target.value)}
          />
          <Button onClick={fetchTokenName}>Submit</Button>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Volume tokenAddress={tokenAddress} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Liquidity tokenAddress={tokenAddress} />
        </Grid> */}
      </Grid>
      <TVChartContainer token={asset} />
    </>
  );
}

export default Chart;
