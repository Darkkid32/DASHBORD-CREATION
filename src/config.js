export const CONFIG = {
  TEMPLATE: {
    // 1. Set your NFT collection contract address
    "collection_address": "0x5180db8F5c931aaE63c74266b211F580155ecac8",

    // 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
    "block_chain_id": "1",

    // 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
    "title": "DASHBORD-CREATION",

    // 4. Set your Covalent API Key
    "api_key": "ckey_3bdabb7325ee47cc9bcc1e5f3d7",

    // 5. (Optional) Display the floor price chart
    "timeseries_chart": true,

    // 6. (Optional) Set your banner image
    "banner_picture": "https://i.seadn.io/gae/AwRnv3_KXdiQqXiW39O56bI-Y10agZF-X5mG-W_p2-rQocA1kjqn9diZ1zkfJBisECBQPF57W_G7ZHp-fJsn-T9iX1K90-ADP_Nwubk?auto=format&w=1000",
  },

  // Supported networks - just for your reference
  FILTER_OPTIONS : [
    {name: "Ethereum", value: 1},
    {name: "Polygon", value: 137},
    {name: "Avalanche", value: 43114},
    {name: "Fantom", value: 250},
    {name: "Moonbeam", value: 1284},
    {name: "Moonriver", value: 1285},
    {name: "Arbitrum", value: 42161},
    {name: "Shiden", value: 336}  
    ],
  // Supported timeframes - just for your reference
  GRAPH_OPTIONS : [
    {name: "7 Days", value: 7},
    {name: "1 Month", value: 30},
    {name: "3 Month", value: 90},
    {name: "1 Year", value: 365},
      {name: "All time", value: 0},
    ],
}
