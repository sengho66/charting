const resources = [
  {
    id: 5478,
    symbol: "10set",
    name: "Tenset",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/10set"
  },
  {
    id: 5197,
    symbol: "1inch",
    name: "1inch",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/1inch"
  },
  {
    id: 404,
    symbol: "1st",
    name: "FirstBlood",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/1st"
  },
  {
    id: 5186,
    symbol: "1up",
    name: "Uptrennd",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/1up"
  },
  {
    id: 3733,
    symbol: "1wo",
    name: "1World",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/1wo"
  },
  {
    id: 272,
    symbol: "_waxp_old",
    name: "WAX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/_waxp_old"
  },
  {
    id: 5015,
    symbol: "aab",
    name: "AAX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aab"
  },
  {
    id: 4456,
    symbol: "aac",
    name: "Acute Angle Cloud",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aac"
  },
  {
    id: 5068,
    symbol: "aapl",
    name: "Apple",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aapl"
  },
  {
    id: 5030,
    symbol: "aave",
    name: "Aave",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aave"
  },
  {
    id: 5289,
    symbol: "aavedown",
    name: "Aave Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aavedown"
  },
  {
    id: 5288,
    symbol: "aaveup",
    name: "Aave Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aaveup"
  },
  {
    id: 1189,
    symbol: "abbc",
    name: "ABBC Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/abbc"
  },
  {
    id: 5168,
    symbol: "abnb",
    name: "Airbnb",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/abnb"
  },
  {
    id: 1113,
    symbol: "abt",
    name: "Arcblock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/abt"
  },
  {
    id: 517,
    symbol: "abyss",
    name: "The Abyss",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/abyss"
  },
  {
    id: 502,
    symbol: "acat",
    name: "Alphacat",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/acat"
  },
  {
    id: 5011,
    symbol: "ach",
    name: "Alchemy Pay",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ach"
  },
  {
    id: 5362,
    symbol: "acm",
    name: "AC Milan Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/acm"
  },
  {
    id: 484,
    symbol: "act",
    name: "Achain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/act"
  },
  {
    id: 166,
    symbol: "ada",
    name: "Cardano",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ada"
  },
  {
    id: 4659,
    symbol: "adabear",
    name: "3X Short Cardano Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adabear"
  },
  {
    id: 4660,
    symbol: "adabull",
    name: "3X Long Cardano Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adabull"
  },
  {
    id: 4661,
    symbol: "adadoom",
    name: "10X Short Cardano Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adadoom"
  },
  {
    id: 5279,
    symbol: "adadown",
    name: "Cardano Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adadown"
  },
  {
    id: 4662,
    symbol: "adahalf",
    name: "0.5X Long Cardano Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adahalf"
  },
  {
    id: 4663,
    symbol: "adahedge",
    name: "1X Short Cardano Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adahedge"
  },
  {
    id: 4664,
    symbol: "adamoon",
    name: "10X Long Cardano Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adamoon"
  },
  {
    id: 5278,
    symbol: "adaup",
    name: "Cardano Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adaup"
  },
  {
    id: 695,
    symbol: "adh",
    name: "AdHive",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adh"
  },
  {
    id: 4625,
    symbol: "adk",
    name: "Aidos Kuneen",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adk"
  },
  {
    id: 1095,
    symbol: "adm",
    name: "ADAMANT Messenger",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adm"
  },
  {
    id: 316,
    symbol: "adt",
    name: "adToken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adt"
  },
  {
    id: 286,
    symbol: "adx",
    name: "AdEx",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/adx"
  },
  {
    id: 409,
    symbol: "ae",
    name: "Aeternity",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ae"
  },
  {
    id: 311,
    symbol: "aeon",
    name: "Aeon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aeon"
  },
  {
    id: 1420,
    symbol: "aergo",
    name: "Aergo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aergo"
  },
  {
    id: 5212,
    symbol: "aeth",
    name: "ankrETH",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aeth"
  },
  {
    id: 291,
    symbol: "agi",
    name: "SingularityNET",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/agi"
  },
  {
    id: 5221,
    symbol: "agvc",
    name: "AgaveCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/agvc"
  },
  {
    id: 2212,
    symbol: "aid",
    name: "AIDUS TOKEN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aid"
  },
  {
    id: 3400,
    symbol: "aidoc",
    name: "AI Doctor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aidoc"
  },
  {
    id: 521,
    symbol: "aion",
    name: "Aion",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aion"
  },
  {
    id: 5425,
    symbol: "aioz",
    name: "AIOZ Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aioz"
  },
  {
    id: 3369,
    symbol: "akro",
    name: "Akropolis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/akro"
  },
  {
    id: 5230,
    symbol: "akt",
    name: "Akash Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/akt"
  },
  {
    id: 5239,
    symbol: "albt",
    name: "AllianceBlock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/albt"
  },
  {
    id: 5653,
    symbol: "alcx",
    name: "Alchemix",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/alcx"
  },
  {
    id: 5184,
    symbol: "aleph",
    name: "Aleph.im",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aleph"
  },
  {
    id: 2773,
    symbol: "algo",
    name: "Algorand",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algo"
  },
  {
    id: 4665,
    symbol: "algobear",
    name: "3X Short Algorand Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algobear"
  },
  {
    id: 4666,
    symbol: "algobull",
    name: "3X Long Algorand Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algobull"
  },
  {
    id: 4667,
    symbol: "algodoom",
    name: "10X Short Algorand Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algodoom"
  },
  {
    id: 4668,
    symbol: "algohalf",
    name: "0.5X Long Algorand Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algohalf"
  },
  {
    id: 4669,
    symbol: "algohedge",
    name: "1X Short Algorand Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algohedge"
  },
  {
    id: 4670,
    symbol: "algomoon",
    name: "10X Long Algorand Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/algomoon"
  },
  {
    id: 5390,
    symbol: "alice",
    name: "MyNeighborAlice",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/alice"
  },
  {
    id: 5086,
    symbol: "alpha",
    name: "Alpha Finance Lab",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/alpha"
  },
  {
    id: 4648,
    symbol: "alt",
    name: "Altcoin Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/alt"
  },
  {
    id: 4671,
    symbol: "altbear",
    name: "3X Short Altcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/altbear"
  },
  {
    id: 4672,
    symbol: "altbull",
    name: "3X Long Altcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/altbull"
  },
  {
    id: 4673,
    symbol: "altdoom",
    name: "10X Short Altcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/altdoom"
  },
  {
    id: 4674,
    symbol: "althalf",
    name: "0.5X Long Altcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/althalf"
  },
  {
    id: 4675,
    symbol: "althedge",
    name: "1X Short Altcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/althedge"
  },
  {
    id: 4676,
    symbol: "altmoon",
    name: "10X Long Altcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/altmoon"
  },
  {
    id: 5511,
    symbol: "aly",
    name: "ALLY",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aly"
  },
  {
    id: 434,
    symbol: "amb",
    name: "Ambrosus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amb"
  },
  {
    id: 5246,
    symbol: "amc",
    name: "AMC Entertainment",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amc"
  },
  {
    id: 1166,
    symbol: "amlt",
    name: "AMLT",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amlt"
  },
  {
    id: 4563,
    symbol: "amo",
    name: "AMO Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amo"
  },
  {
    id: 4522,
    symbol: "amonet",
    name: "Amodule Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amonet"
  },
  {
    id: 112,
    symbol: "amp",
    name: "Synereo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amp"
  },
  {
    id: 4930,
    symbol: "ampl",
    name: "Ampleforth",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ampl"
  },
  {
    id: 5071,
    symbol: "amzn",
    name: "Amazon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/amzn"
  },
  {
    id: 5395,
    symbol: "anc",
    name: "Anchor Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/anc"
  },
  {
    id: 3863,
    symbol: "anct",
    name: "Anchor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/anct"
  },
  {
    id: 1651,
    symbol: "ankr",
    name: "Ankr Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ankr"
  },
  {
    id: 270,
    symbol: "ant",
    name: "Aragon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ant"
  },
  {
    id: 5040,
    symbol: "anw",
    name: "Anchor Neural World",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/anw"
  },
  {
    id: 5405,
    symbol: "any",
    name: "Anyswap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/any"
  },
  {
    id: 5137,
    symbol: "api3",
    name: "API3",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/api3"
  },
  {
    id: 1020,
    symbol: "apis",
    name: "APIS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/apis"
  },
  {
    id: 4890,
    symbol: "apix",
    name: "APIX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/apix"
  },
  {
    id: 4627,
    symbol: "apl",
    name: "Apollo Currency",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/apl"
  },
  {
    id: 4457,
    symbol: "apm",
    name: "apM Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/apm"
  },
  {
    id: 522,
    symbol: "appc",
    name: "AppCoins",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/appc"
  },
  {
    id: 5495,
    symbol: "apy",
    name: "APY.Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/apy"
  },
  {
    id: 5368,
    symbol: "aqt",
    name: "Alpha Quark Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aqt"
  },
  {
    id: 4991,
    symbol: "ar",
    name: "Arweave",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ar"
  },
  {
    id: 90,
    symbol: "ardr",
    name: "Ardor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ardr"
  },
  {
    id: 5554,
    symbol: "ares",
    name: "Ares Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ares"
  },
  {
    id: 245,
    symbol: "ark",
    name: "Ark",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ark"
  },
  {
    id: 5257,
    symbol: "armor",
    name: "ARMOR",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/armor"
  },
  {
    id: 452,
    symbol: "arn",
    name: "Aeron",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/arn"
  },
  {
    id: 3730,
    symbol: "arpa",
    name: "ARPA Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/arpa"
  },
  {
    id: 5083,
    symbol: "arrr",
    name: "Pirate Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/arrr"
  },
  {
    id: 444,
    symbol: "art",
    name: "Maecenas",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/art"
  },
  {
    id: 5200,
    symbol: "asr",
    name: "AS Roma Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/asr"
  },
  {
    id: 520,
    symbol: "ast",
    name: "AirSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ast"
  },
  {
    id: 2443,
    symbol: "at",
    name: "Artfinity",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/at"
  },
  {
    id: 447,
    symbol: "atm",
    name: "ATMChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atm"
  },
  {
    id: 1981,
    symbol: "atom",
    name: "Cosmos",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atom"
  },
  {
    id: 4677,
    symbol: "atombear",
    name: "3X Short Cosmos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atombear"
  },
  {
    id: 4678,
    symbol: "atombull",
    name: "3X Long Cosmos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atombull"
  },
  {
    id: 4679,
    symbol: "atomdoom",
    name: "10X Short Cosmos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atomdoom"
  },
  {
    id: 4680,
    symbol: "atomhalf",
    name: "0.5X Long Cosmos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atomhalf"
  },
  {
    id: 4681,
    symbol: "atomhedge",
    name: "1X Short Cosmos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atomhedge"
  },
  {
    id: 4682,
    symbol: "atommoon",
    name: "10X Long Cosmos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atommoon"
  },
  {
    id: 3473,
    symbol: "atp",
    name: "Atlas Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atp"
  },
  {
    id: 5297,
    symbol: "atri",
    name: "Atari Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/atri"
  },
  {
    id: 4903,
    symbol: "auc",
    name: "Auctus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/auc"
  },
  {
    id: 5370,
    symbol: "auction",
    name: "Bounce Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/auction"
  },
  {
    id: 10,
    symbol: "aud",
    name: "Australian Dollar",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/aud"
  },
  {
    id: 5062,
    symbol: "audio",
    name: "Audius",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/audio"
  },
  {
    id: 5500,
    symbol: "auscm",
    name: "Auric Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/auscm"
  },
  {
    id: 489,
    symbol: "auto",
    name: "Cube",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/auto"
  },
  {
    id: 4626,
    symbol: "ava",
    name: "Travala.com",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ava"
  },
  {
    id: 5016,
    symbol: "avax",
    name: "Avalanche",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/avax"
  },
  {
    id: 58,
    symbol: "avt",
    name: "Aventus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/avt"
  },
  {
    id: 5654,
    symbol: "awg",
    name: "AurusGOLD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/awg"
  },
  {
    id: 5658,
    symbol: "aws",
    name: "AurusSILVER",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aws"
  },
  {
    id: 5655,
    symbol: "awx",
    name: "AurusDeFi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/awx"
  },
  {
    id: 5497,
    symbol: "axn",
    name: "Axion",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/axn"
  },
  {
    id: 595,
    symbol: "axp",
    name: "aXpire",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/axp"
  },
  {
    id: 3367,
    symbol: "axpr",
    name: "aXpire",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/axpr"
  },
  {
    id: 5082,
    symbol: "axs",
    name: "Axie Infinity Shards",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/axs"
  },
  {
    id: 5036,
    symbol: "aya",
    name: "Aryacoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/aya"
  },
  {
    id: 1099,
    symbol: "b2g",
    name: "Bitcoiin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/b2g"
  },
  {
    id: 5154,
    symbol: "baba",
    name: "Alibaba",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/baba"
  },
  {
    id: 5267,
    symbol: "bac",
    name: "Basis Cash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bac"
  },
  {
    id: 5233,
    symbol: "badger",
    name: "Badger DAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/badger"
  },
  {
    id: 5255,
    symbol: "bake",
    name: "BakeryToken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bake"
  },
  {
    id: 4961,
    symbol: "bal",
    name: "Balancer",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bal"
  },
  {
    id: 5488,
    symbol: "balpha",
    name: "bAlpha",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/balpha"
  },
  {
    id: 488,
    symbol: "banca",
    name: "Banca",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/banca"
  },
  {
    id: 3697,
    symbol: "band",
    name: "Band Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/band"
  },
  {
    id: 5403,
    symbol: "bank",
    name: "Float Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bank"
  },
  {
    id: 5248,
    symbol: "bao",
    name: "Bao Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bao"
  },
  {
    id: 5458,
    symbol: "bar",
    name: "FC Barcelona Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bar"
  },
  {
    id: 5146,
    symbol: "base",
    name: "Base Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/base"
  },
  {
    id: 5090,
    symbol: "based",
    name: "$Based",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/based"
  },
  {
    id: 14,
    symbol: "bat",
    name: "Basic Attention Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bat"
  },
  {
    id: 5662,
    symbol: "bax",
    name: "BABB",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bax"
  },
  {
    id: 280,
    symbol: "bay",
    name: "BitBay",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bay"
  },
  {
    id: 5245,
    symbol: "bb",
    name: "BlackBerry",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bb"
  },
  {
    id: 1058,
    symbol: "bbc",
    name: "TraDove B2BCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bbc"
  },
  {
    id: 3235,
    symbol: "bcac",
    name: "Business Credit Alliance Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcac"
  },
  {
    id: 34,
    symbol: "bcc",
    name: "Bitcoin Core Chain Split Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcc"
  },
  {
    id: 523,
    symbol: "bcd",
    name: "Bitcoin Diamond",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcd"
  },
  {
    id: 22,
    symbol: "bch",
    name: "Bitcoin Cash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bch"
  },
  {
    id: 5121,
    symbol: "bcha",
    name: "Bitcoin Cash ABC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcha"
  },
  {
    id: 4683,
    symbol: "bchbear",
    name: "3X Short Bitcoin Cash Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bchbear"
  },
  {
    id: 4684,
    symbol: "bchbull",
    name: "3X Long Bitcoin Cash Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bchbull"
  },
  {
    id: 4685,
    symbol: "bchdoom",
    name: "10X Short Bitcoin Cash Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bchdoom"
  },
  {
    id: 4686,
    symbol: "bchhalf",
    name: "0.5X Long Bitcoin Cash Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bchhalf"
  },
  {
    id: 4687,
    symbol: "bchhedge",
    name: "1X Short Bitcoin Cash Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bchhedge"
  },
  {
    id: 4688,
    symbol: "bchmoon",
    name: "10X Long Bitcoin Cash Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bchmoon"
  },
  {
    id: 368,
    symbol: "bci",
    name: "Bitcoin Interest",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bci"
  },
  {
    id: 96,
    symbol: "bcn",
    name: "Bytecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcn"
  },
  {
    id: 319,
    symbol: "bcpt",
    name: "BlockMason Credit Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcpt"
  },
  {
    id: 51,
    symbol: "bcu",
    name: "Bitcoin Unlimited Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcu"
  },
  {
    id: 1028,
    symbol: "bcv",
    name: "BitCapitalVendor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcv"
  },
  {
    id: 7,
    symbol: "bcy",
    name: "Bitcrystals",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bcy"
  },
  {
    id: 665,
    symbol: "bdg",
    name: "BitDegree",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bdg"
  },
  {
    id: 5379,
    symbol: "bdp",
    name: "Big Data Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bdp"
  },
  {
    id: 1458,
    symbol: "beam",
    name: "Beam",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/beam"
  },
  {
    id: 4193,
    symbol: "bear",
    name: "3X Short Bitcoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bear"
  },
  {
    id: 4690,
    symbol: "bearshit",
    name: "3X Short Shitcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bearshit"
  },
  {
    id: 1950,
    symbol: "beet",
    name: "Beetle Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/beet"
  },
  {
    id: 4994,
    symbol: "bel",
    name: "Bella Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bel"
  },
  {
    id: 25,
    symbol: "bela",
    name: "Bela",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bela"
  },
  {
    id: 4639,
    symbol: "bernie2020",
    name: "President 2020 Bernie",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bernie2020"
  },
  {
    id: 679,
    symbol: "berry",
    name: "Rentberry",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/berry"
  },
  {
    id: 5116,
    symbol: "best",
    name: "Bitpanda Ecosystem Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/best"
  },
  {
    id: 3202,
    symbol: "bet",
    name: "DAO.Casino",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bet"
  },
  {
    id: 5433,
    symbol: "beth",
    name: "Beacon ETH",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/beth"
  },
  {
    id: 478,
    symbol: "betr",
    name: "BetterBetting",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/betr"
  },
  {
    id: 481,
    symbol: "bez",
    name: "Bezop",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bez"
  },
  {
    id: 5262,
    symbol: "bfc",
    name: "Bifrost",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bfc"
  },
  {
    id: 296,
    symbol: "bft",
    name: "BnkToTheFuture",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bft"
  },
  {
    id: 52,
    symbol: "bfx",
    name: "BFX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bfx"
  },
  {
    id: 3666,
    symbol: "bhd",
    name: "BitcoinHD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bhd"
  },
  {
    id: 4887,
    symbol: "bhp",
    name: "BHPCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bhp"
  },
  {
    id: 3471,
    symbol: "bht",
    name: "BHEX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bht"
  },
  {
    id: 5093,
    symbol: "bid",
    name: "Bidao",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bid"
  },
  {
    id: 4641,
    symbol: "biden2020",
    name: "President 2020 Biden",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/biden2020"
  },
  {
    id: 5234,
    symbol: "bifi",
    name: "Beefy.Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bifi"
  },
  {
    id: 5152,
    symbol: "bili",
    name: "Bilibili Inc",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bili"
  },
  {
    id: 327,
    symbol: "bitb",
    name: "Bean Cash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bitb"
  },
  {
    id: 1114,
    symbol: "bix",
    name: "Bibox Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bix"
  },
  {
    id: 688,
    symbol: "bkx",
    name: "Bankex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bkx"
  },
  {
    id: 5414,
    symbol: "blank",
    name: "Blank Wallet",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/blank"
  },
  {
    id: 44,
    symbol: "blk",
    name: "BlackCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/blk"
  },
  {
    id: 4642,
    symbol: "blmbrg2020",
    name: "President 2020 Bloomberg",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/blmbrg2020"
  },
  {
    id: 238,
    symbol: "block",
    name: "Blocknet",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/block"
  },
  {
    id: 321,
    symbol: "blt",
    name: "Bloom",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/blt"
  },
  {
    id: 524,
    symbol: "blz",
    name: "Bluzelle",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/blz"
  },
  {
    id: 428,
    symbol: "bmc",
    name: "Blackmoon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bmc"
  },
  {
    id: 5305,
    symbol: "bmi",
    name: "Bridge Mutual",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bmi"
  },
  {
    id: 398,
    symbol: "bnb",
    name: "Binance Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnb"
  },
  {
    id: 4691,
    symbol: "bnbbear",
    name: "3X Short BNB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbbear"
  },
  {
    id: 4692,
    symbol: "bnbbull",
    name: "3X Long BNB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbbull"
  },
  {
    id: 4693,
    symbol: "bnbdoom",
    name: "10X Short BNB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbdoom"
  },
  {
    id: 5299,
    symbol: "bnbdown",
    name: "Binance Coin Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbdown"
  },
  {
    id: 4694,
    symbol: "bnbhalf",
    name: "0.5X Long BNB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbhalf"
  },
  {
    id: 4695,
    symbol: "bnbhedge",
    name: "1X Short BNB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbhedge"
  },
  {
    id: 4696,
    symbol: "bnbmoon",
    name: "10X Long BNB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbmoon"
  },
  {
    id: 5298,
    symbol: "bnbup",
    name: "Binance Coin Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnbup"
  },
  {
    id: 3467,
    symbol: "bnk",
    name: "Bankera",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnk"
  },
  {
    id: 247,
    symbol: "bnt",
    name: "Bancor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bnt"
  },
  {
    id: 5159,
    symbol: "bntx",
    name: "BioNTech",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bntx"
  },
  {
    id: 4561,
    symbol: "boa",
    name: "BOSAGORA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/boa"
  },
  {
    id: 5131,
    symbol: "bond",
    name: "BarnBridge",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bond"
  },
  {
    id: 5329,
    symbol: "bondly",
    name: "Bondly",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bondly"
  },
  {
    id: 5205,
    symbol: "bor",
    name: "BoringDAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bor"
  },
  {
    id: 3599,
    symbol: "bora",
    name: "BORA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bora"
  },
  {
    id: 406,
    symbol: "bos",
    name: "BOScoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bos"
  },
  {
    id: 5019,
    symbol: "bot",
    name: "Bounce Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bot"
  },
  {
    id: 994,
    symbol: "box",
    name: "BOX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/box"
  },
  {
    id: 4557,
    symbol: "brc",
    name: "Baer Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/brc"
  },
  {
    id: 525,
    symbol: "brd",
    name: "Bread",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/brd"
  },
  {
    id: 5219,
    symbol: "brg",
    name: "Bridge Oracle",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/brg"
  },
  {
    id: 5394,
    symbol: "bscpad",
    name: "BSCPAD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bscpad"
  },
  {
    id: 331,
    symbol: "bsd",
    name: "BitSend",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsd"
  },
  {
    id: 5206,
    symbol: "bsd.2",
    name: "Basis Dollar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsd.2"
  },
  {
    id: 4633,
    symbol: "bst",
    name: "BlockStamp",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bst"
  },
  {
    id: 860,
    symbol: "bsv",
    name: "BitcoinSV",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsv"
  },
  {
    id: 4697,
    symbol: "bsvbear",
    name: "3X Short Bitcoin SV Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsvbear"
  },
  {
    id: 4698,
    symbol: "bsvbull",
    name: "3X Long Bitcoin SV Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsvbull"
  },
  {
    id: 4699,
    symbol: "bsvdoom",
    name: "10X Short Bitcoin SV Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsvdoom"
  },
  {
    id: 4700,
    symbol: "bsvhalf",
    name: "0.5X Long Bitcoin SV Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsvhalf"
  },
  {
    id: 4701,
    symbol: "bsvhedge",
    name: "1X Short Bitcoin SV Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsvhedge"
  },
  {
    id: 4702,
    symbol: "bsvmoon",
    name: "10X Long Bitcoin SV Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bsvmoon"
  },
  {
    id: 55,
    symbol: "bt1",
    name: "BT1",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bt1"
  },
  {
    id: 113,
    symbol: "bt2",
    name: "BT2",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bt2"
  },
  {
    id: 5125,
    symbol: "btb",
    name: "BitBall",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btb"
  },
  {
    id: 60,
    symbol: "btc",
    name: "Bitcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btc"
  },
  {
    id: 4856,
    symbol: "btc-hash",
    name: "Bitcoin Hashrate",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btc-hash"
  },
  {
    id: 5024,
    symbol: "btcb",
    name: "Bitcoin BEP2",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcb"
  },
  {
    id: 35,
    symbol: "btcd",
    name: "BitcoinDark",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcd"
  },
  {
    id: 4850,
    symbol: "btcdom",
    name: "Bitcoin Dominance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcdom"
  },
  {
    id: 5273,
    symbol: "btcdown",
    name: "Bitcoin Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcdown"
  },
  {
    id: 232,
    symbol: "btcfx",
    name: "Bitcoin Forex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcfx"
  },
  {
    id: 504,
    symbol: "btcp",
    name: "Bitcoin Private",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcp"
  },
  {
    id: 5361,
    symbol: "btcst",
    name: "Bitcoin Standard Hashrate Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcst"
  },
  {
    id: 5274,
    symbol: "btcup",
    name: "Bitcoin Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btcup"
  },
  {
    id: 107,
    symbol: "btg",
    name: "Bitcoin Gold",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btg"
  },
  {
    id: 19,
    symbol: "btm",
    name: "Bitmark",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btm"
  },
  {
    id: 4560,
    symbol: "btmx",
    name: "BitMax Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmx"
  },
  {
    id: 4703,
    symbol: "btmxbear",
    name: "3X Short BitMax Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmxbear"
  },
  {
    id: 4704,
    symbol: "btmxbull",
    name: "3X Long BitMax Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmxbull"
  },
  {
    id: 4705,
    symbol: "btmxdoom",
    name: "10X Short BitMax Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmxdoom"
  },
  {
    id: 4706,
    symbol: "btmxhalf",
    name: "0.5X Long BitMax Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmxhalf"
  },
  {
    id: 4707,
    symbol: "btmxhedge",
    name: "1X Short BitMax Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmxhedge"
  },
  {
    id: 4708,
    symbol: "btmxmoon",
    name: "10X Long BitMax Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btmxmoon"
  },
  {
    id: 1031,
    symbol: "btn",
    name: "BitNewChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btn"
  },
  {
    id: 1018,
    symbol: "bto",
    name: "Bottos",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bto"
  },
  {
    id: 12,
    symbol: "bts",
    name: "BitShares",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bts"
  },
  {
    id: 4925,
    symbol: "btse",
    name: "BTSE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btse"
  },
  {
    id: 1123,
    symbol: "btt",
    name: "BitTorrent",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btt"
  },
  {
    id: 1258,
    symbol: "btu",
    name: "BTU Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btu"
  },
  {
    id: 454,
    symbol: "btx",
    name: "Bitcore",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/btx"
  },
  {
    id: 4192,
    symbol: "bull",
    name: "3X Long Bitcoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bull"
  },
  {
    id: 4710,
    symbol: "bullshit",
    name: "3X Long Shitcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bullshit"
  },
  {
    id: 5254,
    symbol: "burger",
    name: "Burger Swap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/burger"
  },
  {
    id: 93,
    symbol: "burst",
    name: "Burst",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/burst"
  },
  {
    id: 3664,
    symbol: "busd",
    name: "Binance USD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/busd"
  },
  {
    id: 4845,
    symbol: "bvol",
    name: "BVOL Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bvol"
  },
  {
    id: 5061,
    symbol: "bwf",
    name: "Beowulf",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bwf"
  },
  {
    id: 2146,
    symbol: "bwx",
    name: "Blue Whale Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bwx"
  },
  {
    id: 5153,
    symbol: "bynd",
    name: "Beyond Meat Inc",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bynd"
  },
  {
    id: 1019,
    symbol: "bz",
    name: "Bit-Z Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bz"
  },
  {
    id: 4926,
    symbol: "bzrx",
    name: "bZx Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/bzrx"
  },
  {
    id: 464,
    symbol: "c20",
    name: "CRYPTO20",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/c20"
  },
  {
    id: 37,
    symbol: "cad",
    name: "Canadian dollar",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/cad"
  },
  {
    id: 5037,
    symbol: "cake",
    name: "PancakeSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cake"
  },
  {
    id: 5499,
    symbol: "cards",
    name: "CARD.STARTER",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cards"
  },
  {
    id: 469,
    symbol: "cas",
    name: "Cashaa",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cas"
  },
  {
    id: 680,
    symbol: "cat",
    name: "BitClave",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cat"
  },
  {
    id: 678,
    symbol: "cbc",
    name: "CashBet Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cbc"
  },
  {
    id: 5193,
    symbol: "cbse",
    name: "Coinbase",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cbse"
  },
  {
    id: 5431,
    symbol: "cbse.coin",
    name: "Coinbase Stock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cbse.coin"
  },
  {
    id: 401,
    symbol: "cbt",
    name: "CommerceBlock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cbt"
  },
  {
    id: 430,
    symbol: "cdt",
    name: "Blox",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cdt"
  },
  {
    id: 4357,
    symbol: "cel",
    name: "Celsius",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cel"
  },
  {
    id: 5496,
    symbol: "cell",
    name: "Cellframe",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cell"
  },
  {
    id: 4904,
    symbol: "celo",
    name: "Celo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/celo"
  },
  {
    id: 1652,
    symbol: "celr",
    name: "Celer Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/celr"
  },
  {
    id: 661,
    symbol: "cennz",
    name: "Centrality",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cennz"
  },
  {
    id: 306,
    symbol: "cfi",
    name: "Cofound.it",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cfi"
  },
  {
    id: 5383,
    symbol: "cfx",
    name: "Conflux Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cfx"
  },
  {
    id: 5124,
    symbol: "chads",
    name: "chads.vc",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chads"
  },
  {
    id: 5510,
    symbol: "chain",
    name: "Chain Games",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chain"
  },
  {
    id: 1686,
    symbol: "chat",
    name: "ChatCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chat"
  },
  {
    id: 3995,
    symbol: "chf",
    name: "Swiss franc",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/chf"
  },
  {
    id: 483,
    symbol: "chp",
    name: "CoinPoker",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chp"
  },
  {
    id: 4558,
    symbol: "chr",
    name: "Chromia",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chr"
  },
  {
    id: 473,
    symbol: "chsb",
    name: "SwissBorg",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chsb"
  },
  {
    id: 1098,
    symbol: "chx",
    name: "Own",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chx"
  },
  {
    id: 3479,
    symbol: "chz",
    name: "Chiliz",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/chz"
  },
  {
    id: 4159,
    symbol: "ckb",
    name: "Nervos Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ckb"
  },
  {
    id: 41,
    symbol: "clam",
    name: "Clams",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/clam"
  },
  {
    id: 677,
    symbol: "cln",
    name: "Colu Local Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cln"
  },
  {
    id: 1100,
    symbol: "clo",
    name: "Callisto Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/clo"
  },
  {
    id: 292,
    symbol: "cloak",
    name: "CloakCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cloak"
  },
  {
    id: 400,
    symbol: "cmct",
    name: "Crowd Machine",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cmct"
  },
  {
    id: 526,
    symbol: "cmt",
    name: "CyberMiles",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cmt"
  },
  {
    id: 429,
    symbol: "cnd",
    name: "Cindicator",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cnd"
  },
  {
    id: 993,
    symbol: "cnn",
    name: "Content Neutrality Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cnn"
  },
  {
    id: 446,
    symbol: "cnx",
    name: "Cryptonex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cnx"
  },
  {
    id: 105,
    symbol: "cny",
    name: "Chinese yuan",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/cny"
  },
  {
    id: 3477,
    symbol: "cocos",
    name: "Cocos-BCX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cocos"
  },
  {
    id: 5258,
    symbol: "combo",
    name: "Furucombo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/combo"
  },
  {
    id: 4899,
    symbol: "comp",
    name: "Compound",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/comp"
  },
  {
    id: 5475,
    symbol: "conv",
    name: "Convergence",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/conv"
  },
  {
    id: 5427,
    symbol: "cope",
    name: "Cope",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cope"
  },
  {
    id: 5031,
    symbol: "core",
    name: "cVault.finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/core"
  },
  {
    id: 3169,
    symbol: "cos",
    name: "COS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cos"
  },
  {
    id: 1103,
    symbol: "cosm",
    name: "Cosmo Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cosm"
  },
  {
    id: 419,
    symbol: "coss",
    name: "COSS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/coss"
  },
  {
    id: 5422,
    symbol: "cot",
    name: "CoTrader",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cot"
  },
  {
    id: 4555,
    symbol: "coti",
    name: "COTI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/coti"
  },
  {
    id: 466,
    symbol: "cov",
    name: "Covesting",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cov"
  },
  {
    id: 1783,
    symbol: "cova",
    name: "COVA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cova"
  },
  {
    id: 5145,
    symbol: "cover",
    name: "COVER Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cover"
  },
  {
    id: 514,
    symbol: "cpt",
    name: "Cryptaur",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cpt"
  },
  {
    id: 1023,
    symbol: "cpx",
    name: "Apex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cpx"
  },
  {
    id: 3470,
    symbol: "cre",
    name: "Carry",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cre"
  },
  {
    id: 4999,
    symbol: "cream",
    name: "Cream Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cream"
  },
  {
    id: 1321,
    symbol: "cro",
    name: "Crypto.com Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cro"
  },
  {
    id: 492,
    symbol: "crpt",
    name: "Crypterium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/crpt"
  },
  {
    id: 5380,
    symbol: "cru",
    name: "Crust",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cru"
  },
  {
    id: 4969,
    symbol: "crv",
    name: "Curve",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/crv"
  },
  {
    id: 334,
    symbol: "crw",
    name: "Crown",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/crw"
  },
  {
    id: 1459,
    symbol: "cs",
    name: "Credits",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cs"
  },
  {
    id: 4562,
    symbol: "ctc",
    name: "Creditcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ctc"
  },
  {
    id: 5063,
    symbol: "ctk",
    name: "CertiK",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ctk"
  },
  {
    id: 4854,
    symbol: "ctsi",
    name: "Cartesi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ctsi"
  },
  {
    id: 930,
    symbol: "ctxc",
    name: "Cortex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ctxc"
  },
  {
    id: 4567,
    symbol: "cure",
    name: "Curecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cure"
  },
  {
    id: 5023,
    symbol: "cusd",
    name: "Celo Dollar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cusd"
  },
  {
    id: 92,
    symbol: "cvc",
    name: "Civic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cvc"
  },
  {
    id: 694,
    symbol: "cvcoin",
    name: "CVCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cvcoin"
  },
  {
    id: 1121,
    symbol: "cvnt",
    name: "Content Value Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cvnt"
  },
  {
    id: 4998,
    symbol: "cvp",
    name: "PowerPool",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cvp"
  },
  {
    id: 499,
    symbol: "cvt",
    name: "CyberVein",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cvt"
  },
  {
    id: 5494,
    symbol: "cyc",
    name: "Cyclone Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/cyc"
  },
  {
    id: 1222,
    symbol: "dac",
    name: "Davinci Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dac"
  },
  {
    id: 1013,
    symbol: "dacs",
    name: "DACSEE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dacs"
  },
  {
    id: 485,
    symbol: "dadi",
    name: "DADI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dadi"
  },
  {
    id: 2641,
    symbol: "dag",
    name: "Constellation",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dag"
  },
  {
    id: 3961,
    symbol: "dai",
    name: "Multi Collateral DAI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dai"
  },
  {
    id: 43,
    symbol: "dao",
    name: "Decentralized Autonomous Organization",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dao"
  },
  {
    id: 3631,
    symbol: "dapp",
    name: "LiquidApps",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dapp"
  },
  {
    id: 4897,
    symbol: "daps",
    name: "DAPS Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/daps"
  },
  {
    id: 72,
    symbol: "dash",
    name: "Dash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dash"
  },
  {
    id: 99,
    symbol: "dat",
    name: "Data",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dat"
  },
  {
    id: 32,
    symbol: "data",
    name: "Data",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/data"
  },
  {
    id: 486,
    symbol: "datx",
    name: "DATx",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/datx"
  },
  {
    id: 5001,
    symbol: "dawn",
    name: "Dawn Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dawn"
  },
  {
    id: 1456,
    symbol: "dbc",
    name: "DeepBrain Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dbc"
  },
  {
    id: 479,
    symbol: "dbet",
    name: "DecentBet",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dbet"
  },
  {
    id: 455,
    symbol: "dbix",
    name: "DubaiCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dbix"
  },
  {
    id: 440,
    symbol: "dcn",
    name: "Dentacoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dcn"
  },
  {
    id: 39,
    symbol: "dcr",
    name: "decred",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dcr"
  },
  {
    id: 314,
    symbol: "dct",
    name: "DECENT",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dct"
  },
  {
    id: 1454,
    symbol: "ddd",
    name: "Scry.info",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ddd"
  },
  {
    id: 5423,
    symbol: "ddim",
    name: "DuckDaoDime",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ddim"
  },
  {
    id: 5275,
    symbol: "ddx",
    name: "DerivaDAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ddx"
  },
  {
    id: 4954,
    symbol: "dec",
    name: "Darico Ecosystem Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dec"
  },
  {
    id: 5028,
    symbol: "defibull",
    name: "3X Long DeFi Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/defibull"
  },
  {
    id: 5369,
    symbol: "dego",
    name: "Dego Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dego"
  },
  {
    id: 415,
    symbol: "dent",
    name: "Dent",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dent"
  },
  {
    id: 4894,
    symbol: "dep",
    name: "DEAPcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dep"
  },
  {
    id: 5176,
    symbol: "dev",
    name: "DeviantCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dev"
  },
  {
    id: 5387,
    symbol: "dex",
    name: "DEX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dex"
  },
  {
    id: 5231,
    symbol: "dexe",
    name: "DeXe",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dexe"
  },
  {
    id: 5256,
    symbol: "dext",
    name: "DEXTools",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dext"
  },
  {
    id: 4996,
    symbol: "df",
    name: "dForce",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/df"
  },
  {
    id: 5035,
    symbol: "dfi",
    name: "DeFiChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dfi"
  },
  {
    id: 5398,
    symbol: "dg",
    name: "Decentral Games",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dg"
  },
  {
    id: 79,
    symbol: "dgb",
    name: "DigiByte",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dgb"
  },
  {
    id: 402,
    symbol: "dgd",
    name: "DigixDAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dgd"
  },
  {
    id: 1106,
    symbol: "dgtx",
    name: "Digitex Futures",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dgtx"
  },
  {
    id: 992,
    symbol: "dgx",
    name: "Digix Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dgx"
  },
  {
    id: 5240,
    symbol: "dht",
    name: "dHedge DAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dht"
  },
  {
    id: 4979,
    symbol: "dia",
    name: "DIA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dia"
  },
  {
    id: 413,
    symbol: "dice",
    name: "Etheroll",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dice"
  },
  {
    id: 5264,
    symbol: "digg",
    name: "DIGG",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/digg"
  },
  {
    id: 461,
    symbol: "dim",
    name: "DIMCOIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dim"
  },
  {
    id: 5177,
    symbol: "dip",
    name: "Etherisc DIP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dip"
  },
  {
    id: 4977,
    symbol: "dka",
    name: "dKargo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dka"
  },
  {
    id: 421,
    symbol: "dlt",
    name: "Agrello",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dlt"
  },
  {
    id: 329,
    symbol: "dmd",
    name: "Diamond",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dmd"
  },
  {
    id: 4965,
    symbol: "dmg",
    name: "DMM: Governance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dmg"
  },
  {
    id: 342,
    symbol: "dmt",
    name: "DMarket",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dmt"
  },
  {
    id: 4564,
    symbol: "dna",
    name: "Metaverse Dualchain Network Architecture",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dna"
  },
  {
    id: 287,
    symbol: "dnt",
    name: "district0x",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dnt"
  },
  {
    id: 996,
    symbol: "dock",
    name: "Dock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dock"
  },
  {
    id: 5249,
    symbol: "dodo",
    name: "DODO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dodo"
  },
  {
    id: 62,
    symbol: "doge",
    name: "Dogecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/doge"
  },
  {
    id: 4711,
    symbol: "dogebear",
    name: "3X Short Dogecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dogebear"
  },
  {
    id: 4712,
    symbol: "dogebull",
    name: "3X Long Dogecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dogebull"
  },
  {
    id: 4713,
    symbol: "dogedoom",
    name: "10X Short Dogecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dogedoom"
  },
  {
    id: 4714,
    symbol: "dogehalf",
    name: "0.5X Long Dogecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dogehalf"
  },
  {
    id: 4715,
    symbol: "dogehedge",
    name: "1X Short Dogecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dogehedge"
  },
  {
    id: 4716,
    symbol: "dogemoon",
    name: "10X Long Dogecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dogemoon"
  },
  {
    id: 4717,
    symbol: "doom",
    name: "10X Short Bitcoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/doom"
  },
  {
    id: 4718,
    symbol: "doomshit",
    name: "10X Short Shitcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/doomshit"
  },
  {
    id: 5409,
    symbol: "dora",
    name: "Dora Factory",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dora"
  },
  {
    id: 4966,
    symbol: "dos",
    name: "DOS Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dos"
  },
  {
    id: 4978,
    symbol: "dot",
    name: "Polkadot",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dot"
  },
  {
    id: 5283,
    symbol: "dotdown",
    name: "Polkadot Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dotdown"
  },
  {
    id: 5282,
    symbol: "dotup",
    name: "Polkadot Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dotup"
  },
  {
    id: 5392,
    symbol: "dov",
    name: "Dovu",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dov"
  },
  {
    id: 5103,
    symbol: "dpi",
    name: "DeFi Pulse Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dpi"
  },
  {
    id: 5502,
    symbol: "dpr",
    name: "Deeper Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dpr"
  },
  {
    id: 1466,
    symbol: "dpy",
    name: "Delphy",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dpy"
  },
  {
    id: 3600,
    symbol: "dream",
    name: "DreamTeam Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dream"
  },
  {
    id: 4556,
    symbol: "drep",
    name: "DREP",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drep"
  },
  {
    id: 3436,
    symbol: "drg",
    name: "Dragon Coins",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drg"
  },
  {
    id: 929,
    symbol: "drgn",
    name: "Dragonchain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgn"
  },
  {
    id: 4637,
    symbol: "drgn.ftx",
    name: "Dragon Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgn.ftx"
  },
  {
    id: 4719,
    symbol: "drgnbear",
    name: "3X Short Dragon Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgnbear"
  },
  {
    id: 4720,
    symbol: "drgnbull",
    name: "3X Long Dragon Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgnbull"
  },
  {
    id: 4721,
    symbol: "drgndoom",
    name: "10X Short Dragon Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgndoom"
  },
  {
    id: 4722,
    symbol: "drgnhalf",
    name: "0.5X Long Dragon Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgnhalf"
  },
  {
    id: 4723,
    symbol: "drgnhedge",
    name: "1X Short Dragon Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgnhedge"
  },
  {
    id: 4724,
    symbol: "drgnmoon",
    name: "10X Long Dragon Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drgnmoon"
  },
  {
    id: 628,
    symbol: "drt",
    name: "DomRaider",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/drt"
  },
  {
    id: 5406,
    symbol: "dsla",
    name: "DSLA Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dsla"
  },
  {
    id: 692,
    symbol: "dta",
    name: "DATA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dta"
  },
  {
    id: 335,
    symbol: "dtb",
    name: "Databits",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dtb"
  },
  {
    id: 1107,
    symbol: "dtr",
    name: "Dynamic Trading Rights",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dtr"
  },
  {
    id: 5169,
    symbol: "ducato",
    name: "Ducato Protocol Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ducato"
  },
  {
    id: 5272,
    symbol: "duck",
    name: "Duck DAO (DLP Duck Token)",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/duck"
  },
  {
    id: 3104,
    symbol: "dusk",
    name: "Dusk Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dusk"
  },
  {
    id: 5171,
    symbol: "dvp",
    name: "Decentralized Vulnerability Platform",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dvp"
  },
  {
    id: 1464,
    symbol: "dx",
    name: "DxChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dx"
  },
  {
    id: 673,
    symbol: "dyn",
    name: "Dynamic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/dyn"
  },
  {
    id: 5268,
    symbol: "easy",
    name: "EasyFi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/easy"
  },
  {
    id: 5207,
    symbol: "eauric",
    name: "Eauric",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eauric"
  },
  {
    id: 4900,
    symbol: "eca",
    name: "Electra",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eca"
  },
  {
    id: 5199,
    symbol: "ecc",
    name: "ECC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ecc"
  },
  {
    id: 1024,
    symbol: "ecom",
    name: "Omnitude",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ecom"
  },
  {
    id: 1619,
    symbol: "edc",
    name: "EDC Blockchain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/edc"
  },
  {
    id: 80,
    symbol: "edg",
    name: "Edgeless",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/edg"
  },
  {
    id: 61,
    symbol: "edo",
    name: "Eidoo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/edo"
  },
  {
    id: 932,
    symbol: "edr",
    name: "Endor Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/edr"
  },
  {
    id: 5363,
    symbol: "egg",
    name: "Goose Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/egg"
  },
  {
    id: 4992,
    symbol: "egld",
    name: "Elrond",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/egld"
  },
  {
    id: 3004,
    symbol: "egt",
    name: "Egretia",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/egt"
  },
  {
    id: 462,
    symbol: "eko",
    name: "EchoLink",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eko"
  },
  {
    id: 1030,
    symbol: "ekt",
    name: "EDUCare",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ekt"
  },
  {
    id: 5428,
    symbol: "el",
    name: "ELYSIA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/el"
  },
  {
    id: 1027,
    symbol: "ela",
    name: "Elastos",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ela"
  },
  {
    id: 4621,
    symbol: "elama",
    name: "Elamachain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/elama"
  },
  {
    id: 562,
    symbol: "elec",
    name: "Electrify.Asia",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/elec"
  },
  {
    id: 200,
    symbol: "elf",
    name: "aelf",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/elf"
  },
  {
    id: 5479,
    symbol: "elon",
    name: "Dogelon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/elon"
  },
  {
    id: 3864,
    symbol: "em",
    name: "Eminer",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/em"
  },
  {
    id: 240,
    symbol: "emc",
    name: "Emercoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/emc"
  },
  {
    id: 45,
    symbol: "emc2",
    name: "Einsteinium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/emc2"
  },
  {
    id: 4630,
    symbol: "emrx",
    name: "Emirex Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/emrx"
  },
  {
    id: 5102,
    symbol: "encore",
    name: "EnCore",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/encore"
  },
  {
    id: 252,
    symbol: "eng",
    name: "Enigma",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eng"
  },
  {
    id: 442,
    symbol: "enj",
    name: "Enjin Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/enj"
  },
  {
    id: 88,
    symbol: "eos",
    name: "EOS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eos"
  },
  {
    id: 4725,
    symbol: "eosbear",
    name: "3X Short EOS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eosbear"
  },
  {
    id: 4726,
    symbol: "eosbull",
    name: "3X Long EOS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eosbull"
  },
  {
    id: 1463,
    symbol: "eosdac",
    name: "eosDAC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eosdac"
  },
  {
    id: 4727,
    symbol: "eosdoom",
    name: "10X Short EOS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eosdoom"
  },
  {
    id: 4728,
    symbol: "eoshalf",
    name: "0.5X Long EOS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eoshalf"
  },
  {
    id: 4729,
    symbol: "eoshedge",
    name: "1X Short EOS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eoshedge"
  },
  {
    id: 4730,
    symbol: "eosmoon",
    name: "10X Long EOS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eosmoon"
  },
  {
    id: 5413,
    symbol: "eps",
    name: "Ellipsis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eps"
  },
  {
    id: 3137,
    symbol: "erd",
    name: "Elrond",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/erd"
  },
  {
    id: 5029,
    symbol: "erg",
    name: "Ergo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/erg"
  },
  {
    id: 5382,
    symbol: "ern",
    name: "Ethernity Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ern"
  },
  {
    id: 5470,
    symbol: "ersdl",
    name: "UnFederalReserve",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ersdl"
  },
  {
    id: 5107,
    symbol: "esd",
    name: "Empty Set Dollar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/esd"
  },
  {
    id: 4886,
    symbol: "esh",
    name: "Switch",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/esh"
  },
  {
    id: 84,
    symbol: "etc",
    name: "Ethereum Classic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etc"
  },
  {
    id: 4731,
    symbol: "etcbear",
    name: "3X Short Ethereum Classic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etcbear"
  },
  {
    id: 4732,
    symbol: "etcbull",
    name: "3X Long Ethereum Classic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etcbull"
  },
  {
    id: 4733,
    symbol: "etcdoom",
    name: "10X Short Ethereum Classic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etcdoom"
  },
  {
    id: 4734,
    symbol: "etchalf",
    name: "0.5X Long Ethereum Classic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etchalf"
  },
  {
    id: 4735,
    symbol: "etchedge",
    name: "1X Short Ethereum Classic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etchedge"
  },
  {
    id: 4736,
    symbol: "etcmoon",
    name: "10X Long Ethereum Classic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etcmoon"
  },
  {
    id: 77,
    symbol: "eth",
    name: "Ethereum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eth"
  },
  {
    id: 5132,
    symbol: "eth2",
    name: "Ethereum 2",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eth2"
  },
  {
    id: 5523,
    symbol: "eth2x-fli",
    name: "ETH 2x Flexible Leverage Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eth2x-fli"
  },
  {
    id: 4195,
    symbol: "ethbear",
    name: "3X Short Ethereum Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethbear"
  },
  {
    id: 4194,
    symbol: "ethbull",
    name: "3X Long Ethereum Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethbull"
  },
  {
    id: 4739,
    symbol: "ethdoom",
    name: "10X Short Ethereum Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethdoom"
  },
  {
    id: 5276,
    symbol: "ethdown",
    name: "Ethereum Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethdown"
  },
  {
    id: 4740,
    symbol: "ethhalf",
    name: "0.5X Long Ethereum Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethhalf"
  },
  {
    id: 4741,
    symbol: "ethhedge",
    name: "1X Short Ethereum Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethhedge"
  },
  {
    id: 4742,
    symbol: "ethmoon",
    name: "10X Long Ethereum Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethmoon"
  },
  {
    id: 5277,
    symbol: "ethup",
    name: "Ethereum Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ethup"
  },
  {
    id: 931,
    symbol: "etn",
    name: "Electroneum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etn"
  },
  {
    id: 67,
    symbol: "etp",
    name: "Metaverse ETP",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/etp"
  },
  {
    id: 5139,
    symbol: "eum",
    name: "Elitium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eum"
  },
  {
    id: 108,
    symbol: "eur",
    name: "euro",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/eur"
  },
  {
    id: 1102,
    symbol: "eurs",
    name: "STASIS EURS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eurs"
  },
  {
    id: 892,
    symbol: "eurt",
    name: "Tether Euro",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/eurt"
  },
  {
    id: 477,
    symbol: "evn",
    name: "Envion",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/evn"
  },
  {
    id: 420,
    symbol: "evx",
    name: "Everex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/evx"
  },
  {
    id: 4922,
    symbol: "ewt",
    name: "Energy Web Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ewt"
  },
  {
    id: 4647,
    symbol: "exch",
    name: "Exchange Token Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exch"
  },
  {
    id: 4743,
    symbol: "exchbear",
    name: "3X Short Exchange Token Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exchbear"
  },
  {
    id: 4744,
    symbol: "exchbull",
    name: "3X Long Exchange Token Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exchbull"
  },
  {
    id: 4745,
    symbol: "exchdoom",
    name: "10X Short Exchange Token Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exchdoom"
  },
  {
    id: 4746,
    symbol: "exchhalf",
    name: "0.5X Long Exchange Token Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exchhalf"
  },
  {
    id: 4747,
    symbol: "exchhedge",
    name: "1X Short Exchange Token Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exchhedge"
  },
  {
    id: 4748,
    symbol: "exchmoon",
    name: "10X Long Exchange Token Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exchmoon"
  },
  {
    id: 4959,
    symbol: "exe",
    name: "8X8 PROTOCOL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exe"
  },
  {
    id: 16,
    symbol: "exp",
    name: "Expanse",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exp"
  },
  {
    id: 5374,
    symbol: "exrd",
    name: "Radix",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/exrd"
  },
  {
    id: 1116,
    symbol: "fair",
    name: "FairCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fair"
  },
  {
    id: 5007,
    symbol: "farm",
    name: "Harvest Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/farm"
  },
  {
    id: 5070,
    symbol: "fb",
    name: "Facebook",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fb"
  },
  {
    id: 111,
    symbol: "fct",
    name: "Factom",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fct"
  },
  {
    id: 511,
    symbol: "fdz",
    name: "Friendz",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fdz"
  },
  {
    id: 5417,
    symbol: "fei",
    name: "Fei Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fei"
  },
  {
    id: 1520,
    symbol: "fet",
    name: "Fetch",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fet"
  },
  {
    id: 5194,
    symbol: "fida",
    name: "Bonfida",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fida"
  },
  {
    id: 5034,
    symbol: "fil",
    name: "Filecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fil"
  },
  {
    id: 4964,
    symbol: "fio",
    name: "FIO Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fio"
  },
  {
    id: 5220,
    symbol: "firo",
    name: "Firo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/firo"
  },
  {
    id: 5235,
    symbol: "fis",
    name: "Stafi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fis"
  },
  {
    id: 56,
    symbol: "fldc",
    name: "FoldingCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fldc"
  },
  {
    id: 3895,
    symbol: "fleta",
    name: "FLETA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fleta"
  },
  {
    id: 4126,
    symbol: "flixx",
    name: "Flixxo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/flixx"
  },
  {
    id: 5027,
    symbol: "flm",
    name: "Flamingo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/flm"
  },
  {
    id: 74,
    symbol: "flo",
    name: "FlorinCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/flo"
  },
  {
    id: 5225,
    symbol: "flow",
    name: "Flow",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/flow"
  },
  {
    id: 1093,
    symbol: "fluz",
    name: "Fluz Fluz",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fluz"
  },
  {
    id: 3796,
    symbol: "fnb",
    name: "FNB Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fnb"
  },
  {
    id: 5506,
    symbol: "fnk",
    name: "Finiko",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fnk"
  },
  {
    id: 1012,
    symbol: "foam",
    name: "FOAM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/foam"
  },
  {
    id: 3476,
    symbol: "for",
    name: "Force Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/for"
  },
  {
    id: 5460,
    symbol: "forth",
    name: "Ampleforth Governance Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/forth"
  },
  {
    id: 498,
    symbol: "fota",
    name: "Fortuna",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fota"
  },
  {
    id: 5201,
    symbol: "frax",
    name: "Frax",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/frax"
  },
  {
    id: 5459,
    symbol: "free",
    name: "FREE Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/free"
  },
  {
    id: 5174,
    symbol: "frm",
    name: "Ferrum Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/frm"
  },
  {
    id: 5227,
    symbol: "front",
    name: "Frontier",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/front"
  },
  {
    id: 399,
    symbol: "fsn",
    name: "Fusion",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fsn"
  },
  {
    id: 5182,
    symbol: "fst",
    name: "1irstcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fst"
  },
  {
    id: 5104,
    symbol: "fsw",
    name: "Falconswap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fsw"
  },
  {
    id: 277,
    symbol: "ftc",
    name: "Feathercoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ftc"
  },
  {
    id: 2344,
    symbol: "fti",
    name: "FansTime",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fti"
  },
  {
    id: 2575,
    symbol: "ftm",
    name: "Fantom",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ftm"
  },
  {
    id: 3472,
    symbol: "ftt",
    name: "FTX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ftt"
  },
  {
    id: 1585,
    symbol: "ftx",
    name: "FintruX Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ftx"
  },
  {
    id: 5017,
    symbol: "ftxdefi",
    name: "FTX Decentralized Finance Coins Basket",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ftxdefi"
  },
  {
    id: 432,
    symbol: "fuel",
    name: "Etherparty",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fuel"
  },
  {
    id: 167,
    symbol: "fun",
    name: "FunFair",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fun"
  },
  {
    id: 2444,
    symbol: "fx",
    name: "Function X",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fx"
  },
  {
    id: 3474,
    symbol: "fxc",
    name: "Flexacoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fxc"
  },
  {
    id: 5307,
    symbol: "fxf",
    name: "Finxflo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fxf"
  },
  {
    id: 5211,
    symbol: "fxs",
    name: "Frax Share",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fxs"
  },
  {
    id: 509,
    symbol: "fxt",
    name: "FuzeX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/fxt"
  },
  {
    id: 5378,
    symbol: "gal",
    name: "Galatasaray Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gal"
  },
  {
    id: 5260,
    symbol: "gala",
    name: "Gala",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gala"
  },
  {
    id: 20,
    symbol: "game",
    name: "GameCredits",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/game"
  },
  {
    id: 1621,
    symbol: "gard",
    name: "Hashgard",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gard"
  },
  {
    id: 71,
    symbol: "gas",
    name: "Gas",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gas"
  },
  {
    id: 1038,
    symbol: "gbc",
    name: "Gold Bits Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gbc"
  },
  {
    id: 59,
    symbol: "gbp",
    name: "British Pound",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/gbp"
  },
  {
    id: 671,
    symbol: "gbx",
    name: "GoByte",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gbx"
  },
  {
    id: 246,
    symbol: "gbyte",
    name: "Obyte",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gbyte"
  },
  {
    id: 2245,
    symbol: "gcc",
    name: "Global Cryptocurrency",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gcc"
  },
  {
    id: 1015,
    symbol: "gen",
    name: "DAOstack",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gen"
  },
  {
    id: 4982,
    symbol: "geo",
    name: "GeoDB",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/geo"
  },
  {
    id: 1042,
    symbol: "get",
    name: "GET Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/get"
  },
  {
    id: 4895,
    symbol: "ghost",
    name: "GHOST",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ghost"
  },
  {
    id: 5026,
    symbol: "ghst",
    name: "Aavegotchi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ghst"
  },
  {
    id: 2179,
    symbol: "glc",
    name: "GoldCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/glc"
  },
  {
    id: 999,
    symbol: "gld",
    name: "GoldCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gld"
  },
  {
    id: 5020,
    symbol: "gleec",
    name: "Gleec",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gleec"
  },
  {
    id: 5215,
    symbol: "glm",
    name: "Golem",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/glm"
  },
  {
    id: 3368,
    symbol: "gmat",
    name: "GoWithMi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gmat"
  },
  {
    id: 5244,
    symbol: "gme",
    name: "GameStop",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gme"
  },
  {
    id: 40,
    symbol: "gno",
    name: "Gnosis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gno"
  },
  {
    id: 33,
    symbol: "gnt",
    name: "Golem",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gnt"
  },
  {
    id: 472,
    symbol: "gnx",
    name: "Genaro Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gnx"
  },
  {
    id: 5400,
    symbol: "gny",
    name: "GNY",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gny"
  },
  {
    id: 958,
    symbol: "go",
    name: "GoChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/go"
  },
  {
    id: 5203,
    symbol: "gom2",
    name: "AnimalGo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gom2"
  },
  {
    id: 5069,
    symbol: "googl",
    name: "Google",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/googl"
  },
  {
    id: 1092,
    symbol: "got",
    name: "ParkinGo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/got"
  },
  {
    id: 5508,
    symbol: "govi",
    name: "Govi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/govi"
  },
  {
    id: 3,
    symbol: "grc",
    name: "GridCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/grc"
  },
  {
    id: 1163,
    symbol: "grin",
    name: "GRIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/grin"
  },
  {
    id: 278,
    symbol: "grs",
    name: "Groestlcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/grs"
  },
  {
    id: 5179,
    symbol: "grt",
    name: "The Graph",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/grt"
  },
  {
    id: 1717,
    symbol: "gsc",
    name: "Global Social Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gsc"
  },
  {
    id: 3601,
    symbol: "gt",
    name: "Gatechain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gt"
  },
  {
    id: 1115,
    symbol: "gtc",
    name: "Game.com",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gtc"
  },
  {
    id: 344,
    symbol: "gto",
    name: "Gifto",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gto"
  },
  {
    id: 338,
    symbol: "gup",
    name: "Matchpool",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gup"
  },
  {
    id: 827,
    symbol: "gusd",
    name: "Gemini Dollar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gusd"
  },
  {
    id: 453,
    symbol: "gvt",
    name: "Genesis Vision",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gvt"
  },
  {
    id: 1090,
    symbol: "gxc",
    name: "GXChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gxc"
  },
  {
    id: 527,
    symbol: "gxs",
    name: "GXChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gxs"
  },
  {
    id: 5656,
    symbol: "gzil",
    name: "governance ZIL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/gzil"
  },
  {
    id: 5377,
    symbol: "hai",
    name: "Hacken Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hai"
  },
  {
    id: 5170,
    symbol: "hakka",
    name: "Hakka.Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hakka"
  },
  {
    id: 4749,
    symbol: "half",
    name: "0.5X Long Bitcoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/half"
  },
  {
    id: 4750,
    symbol: "halfshit",
    name: "0.5X Long Shitcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/halfshit"
  },
  {
    id: 5657,
    symbol: "hapi",
    name: "HAPI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hapi"
  },
  {
    id: 5115,
    symbol: "hard",
    name: "HARD Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hard"
  },
  {
    id: 3532,
    symbol: "hbar",
    name: "Hedera Hashgraph",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hbar"
  },
  {
    id: 3302,
    symbol: "hbt",
    name: "Hubii Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hbt"
  },
  {
    id: 5175,
    symbol: "hbtc",
    name: "Huobi BTC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hbtc"
  },
  {
    id: 760,
    symbol: "hc",
    name: "HyperCash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hc"
  },
  {
    id: 4893,
    symbol: "hdao",
    name: "HyperDAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hdao"
  },
  {
    id: 3433,
    symbol: "hedg",
    name: "HedgeTrade",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hedg"
  },
  {
    id: 4751,
    symbol: "hedge",
    name: "1X Short Bitcoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hedge"
  },
  {
    id: 4752,
    symbol: "hedgeshit",
    name: "1X Short Shitcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hedgeshit"
  },
  {
    id: 5117,
    symbol: "hegic",
    name: "Hegic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hegic"
  },
  {
    id: 4892,
    symbol: "hex",
    name: "HEX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hex"
  },
  {
    id: 5134,
    symbol: "hez",
    name: "Hermez Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hez"
  },
  {
    id: 4624,
    symbol: "hit",
    name: "HitChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hit"
  },
  {
    id: 4569,
    symbol: "hive",
    name: "Hive",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hive"
  },
  {
    id: 15,
    symbol: "hkd",
    name: "Hong Kong Dollar",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/hkd"
  },
  {
    id: 313,
    symbol: "hmq",
    name: "Humaniq",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hmq"
  },
  {
    id: 5181,
    symbol: "hns",
    name: "Handshake",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hns"
  },
  {
    id: 5008,
    symbol: "hnt",
    name: "Helium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hnt"
  },
  {
    id: 5587,
    symbol: "hoge",
    name: "Hoge Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hoge"
  },
  {
    id: 5473,
    symbol: "hopr",
    name: "HOPR Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hopr"
  },
  {
    id: 691,
    symbol: "hot",
    name: "Holochain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hot"
  },
  {
    id: 4568,
    symbol: "hot-2",
    name: "HOT Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hot-2"
  },
  {
    id: 1026,
    symbol: "hpb",
    name: "High Performance Blockchain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hpb"
  },
  {
    id: 1288,
    symbol: "hpc",
    name: "Happycoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hpc"
  },
  {
    id: 3732,
    symbol: "hpt",
    name: "Huobi Pool Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hpt"
  },
  {
    id: 1622,
    symbol: "hsc",
    name: "HashCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hsc"
  },
  {
    id: 457,
    symbol: "hsr",
    name: "Hshare",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hsr"
  },
  {
    id: 1816,
    symbol: "hst",
    name: "Decision Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hst"
  },
  {
    id: 682,
    symbol: "ht",
    name: "Huobi Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ht"
  },
  {
    id: 4753,
    symbol: "htbear",
    name: "3X Short Huobi Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/htbear"
  },
  {
    id: 4754,
    symbol: "htbull",
    name: "3X Long Huobi Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/htbull"
  },
  {
    id: 4927,
    symbol: "htdf",
    name: "Orient Walt",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/htdf"
  },
  {
    id: 4755,
    symbol: "htdoom",
    name: "10X Short Huobi Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/htdoom"
  },
  {
    id: 4756,
    symbol: "hthalf",
    name: "0.5X Long Huobi Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hthalf"
  },
  {
    id: 4757,
    symbol: "hthedge",
    name: "1X Short Huobi Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hthedge"
  },
  {
    id: 518,
    symbol: "html",
    name: "HTMLCOIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/html"
  },
  {
    id: 4758,
    symbol: "htmoon",
    name: "10X Long Huobi Token Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/htmoon"
  },
  {
    id: 5393,
    symbol: "htr",
    name: "Hathor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/htr"
  },
  {
    id: 49,
    symbol: "huc",
    name: "HunterCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/huc"
  },
  {
    id: 5419,
    symbol: "hum",
    name: "Humanscape",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hum"
  },
  {
    id: 5415,
    symbol: "hunt",
    name: "HUNT",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hunt"
  },
  {
    id: 4848,
    symbol: "husd",
    name: "HUSD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/husd"
  },
  {
    id: 431,
    symbol: "hvn",
    name: "Hive Project",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hvn"
  },
  {
    id: 2014,
    symbol: "hxro",
    name: "Hxro",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hxro"
  },
  {
    id: 1025,
    symbol: "hyc",
    name: "HYCON",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hyc"
  },
  {
    id: 3370,
    symbol: "hydra",
    name: "Hydro Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hydra"
  },
  {
    id: 1002,
    symbol: "hydro",
    name: "Hydro",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/hydro"
  },
  {
    id: 4846,
    symbol: "ibvol",
    name: "iBVOL Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ibvol"
  },
  {
    id: 5504,
    symbol: "ice",
    name: "Popsicle Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ice"
  },
  {
    id: 42,
    symbol: "icn",
    name: "Iconomi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/icn"
  },
  {
    id: 663,
    symbol: "icos",
    name: "ICOS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/icos"
  },
  {
    id: 5519,
    symbol: "icp",
    name: "Internet Computer",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/icp"
  },
  {
    id: 202,
    symbol: "icx",
    name: "ICON",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/icx"
  },
  {
    id: 4981,
    symbol: "idex",
    name: "IDEX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/idex"
  },
  {
    id: 465,
    symbol: "idh",
    name: "indaHash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/idh"
  },
  {
    id: 27,
    symbol: "idr",
    name: "Indonesian Rupiah",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/idr"
  },
  {
    id: 424,
    symbol: "ift",
    name: "InvestFeed",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ift"
  },
  {
    id: 288,
    symbol: "ignis",
    name: "Ignis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ignis"
  },
  {
    id: 2410,
    symbol: "ihf",
    name: "Invictus Hyperion Fund",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ihf"
  },
  {
    id: 493,
    symbol: "iht",
    name: "IHT Real Estate Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iht"
  },
  {
    id: 1949,
    symbol: "ilc",
    name: "ILCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ilc"
  },
  {
    id: 5663,
    symbol: "ilv",
    name: "Illuvium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ilv"
  },
  {
    id: 336,
    symbol: "incnt",
    name: "Incent",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/incnt"
  },
  {
    id: 1257,
    symbol: "ind",
    name: "Indorse Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ind"
  },
  {
    id: 5041,
    symbol: "inj",
    name: "Injective Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/inj"
  },
  {
    id: 515,
    symbol: "ink",
    name: "Ink",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ink"
  },
  {
    id: 69,
    symbol: "inr",
    name: "Indian Rupee",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/inr"
  },
  {
    id: 528,
    symbol: "ins",
    name: "INS Ecosystem",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ins"
  },
  {
    id: 4955,
    symbol: "instar",
    name: "Insights Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/instar"
  },
  {
    id: 5412,
    symbol: "insur",
    name: "InsurAce",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/insur"
  },
  {
    id: 995,
    symbol: "int",
    name: "Internet Node Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/int"
  },
  {
    id: 326,
    symbol: "ioc",
    name: "I/O Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ioc"
  },
  {
    id: 283,
    symbol: "ion",
    name: "ION",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ion"
  },
  {
    id: 516,
    symbol: "iost",
    name: "IOST",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iost"
  },
  {
    id: 31,
    symbol: "iota",
    name: "IOTA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iota"
  },
  {
    id: 529,
    symbol: "iotx",
    name: "IoTeX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iotx"
  },
  {
    id: 4628,
    symbol: "ipx",
    name: "Tachyon Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ipx"
  },
  {
    id: 4631,
    symbol: "iq",
    name: "Everipedia",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iq"
  },
  {
    id: 4905,
    symbol: "iqc",
    name: "IQ.cash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iqc"
  },
  {
    id: 5187,
    symbol: "iqn",
    name: "IQeon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iqn"
  },
  {
    id: 2542,
    symbol: "iris",
    name: "IRISnet",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/iris"
  },
  {
    id: 1111,
    symbol: "itc",
    name: "IoT Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/itc"
  },
  {
    id: 670,
    symbol: "ivy",
    name: "Ivy",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ivy"
  },
  {
    id: 417,
    symbol: "ixt",
    name: "iXledger",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ixt"
  },
  {
    id: 5457,
    symbol: "jgn",
    name: "Juggernaut",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/jgn"
  },
  {
    id: 471,
    symbol: "jnt",
    name: "Jibrel Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/jnt"
  },
  {
    id: 104,
    symbol: "jpy",
    name: "Japanese Yen",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/jpy"
  },
  {
    id: 4851,
    symbol: "jst",
    name: "JUST",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/jst"
  },
  {
    id: 5077,
    symbol: "jul",
    name: "Joule",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/jul"
  },
  {
    id: 5328,
    symbol: "juld",
    name: "JulSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/juld"
  },
  {
    id: 5189,
    symbol: "juv",
    name: "Juventus Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/juv"
  },
  {
    id: 4920,
    symbol: "kai",
    name: "KardiaChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kai"
  },
  {
    id: 1112,
    symbol: "kan",
    name: "BitKan",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kan"
  },
  {
    id: 3765,
    symbol: "kava",
    name: "Kava",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kava"
  },
  {
    id: 3468,
    symbol: "kbc",
    name: "Karatgold Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kbc"
  },
  {
    id: 1552,
    symbol: "kcash",
    name: "Kcash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kcash"
  },
  {
    id: 5467,
    symbol: "kcs",
    name: "KuCoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kcs"
  },
  {
    id: 4993,
    symbol: "kda",
    name: "Kadena",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kda"
  },
  {
    id: 4924,
    symbol: "kdag",
    name: "King DAG",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kdag"
  },
  {
    id: 5076,
    symbol: "keep",
    name: "Keep Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/keep"
  },
  {
    id: 5483,
    symbol: "kex",
    name: "Kira Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kex"
  },
  {
    id: 667,
    symbol: "key",
    name: "Selfkey",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/key"
  },
  {
    id: 4565,
    symbol: "kfee",
    name: "Kraken Fee Credits",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kfee"
  },
  {
    id: 438,
    symbol: "kick",
    name: "Kick Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kick"
  },
  {
    id: 5089,
    symbol: "kimchi",
    name: "KIMCHI.finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kimchi"
  },
  {
    id: 497,
    symbol: "kin",
    name: "Kin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kin"
  },
  {
    id: 5516,
    symbol: "kine",
    name: "Kine",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kine"
  },
  {
    id: 5402,
    symbol: "klay",
    name: "Klaytn",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/klay"
  },
  {
    id: 5128,
    symbol: "klv",
    name: "Klever",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/klv"
  },
  {
    id: 244,
    symbol: "kmd",
    name: "Komodo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kmd"
  },
  {
    id: 299,
    symbol: "knc",
    name: "Kyber Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/knc"
  },
  {
    id: 2047,
    symbol: "kore",
    name: "Kore",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kore"
  },
  {
    id: 5066,
    symbol: "kp3r",
    name: "Keep3rV1",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kp3r"
  },
  {
    id: 675,
    symbol: "krm",
    name: "Karma",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/krm"
  },
  {
    id: 5004,
    symbol: "krt",
    name: "TerraKRW",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/krt"
  },
  {
    id: 106,
    symbol: "krw",
    name: "South Korean Won",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/krw"
  },
  {
    id: 4951,
    symbol: "ksm",
    name: "Kusama",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ksm"
  },
  {
    id: 5385,
    symbol: "kyl",
    name: "Kylin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/kyl"
  },
  {
    id: 450,
    symbol: "la",
    name: "LATOKEN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/la"
  },
  {
    id: 5404,
    symbol: "labs",
    name: "LABS Group",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/labs"
  },
  {
    id: 1120,
    symbol: "lamb",
    name: "Lambda",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lamb"
  },
  {
    id: 546,
    symbol: "latx",
    name: "LatiumX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/latx"
  },
  {
    id: 5105,
    symbol: "layer",
    name: "UniLayer",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/layer"
  },
  {
    id: 1009,
    symbol: "lba",
    name: "Cred",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lba"
  },
  {
    id: 30,
    symbol: "lbc",
    name: "LBRY Credits",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lbc"
  },
  {
    id: 676,
    symbol: "lcc",
    name: "Litecoin Cash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lcc"
  },
  {
    id: 4849,
    symbol: "lcx",
    name: "LCX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lcx"
  },
  {
    id: 5242,
    symbol: "ldo",
    name: "Lido DAO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ldo"
  },
  {
    id: 458,
    symbol: "lend",
    name: "Aave",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lend"
  },
  {
    id: 2411,
    symbol: "leo",
    name: "LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leo"
  },
  {
    id: 4759,
    symbol: "leobear",
    name: "3X Short LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leobear"
  },
  {
    id: 4760,
    symbol: "leobull",
    name: "3X Long LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leobull"
  },
  {
    id: 1033,
    symbol: "leoc",
    name: "LEOcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leoc"
  },
  {
    id: 4761,
    symbol: "leodoom",
    name: "10X Short LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leodoom"
  },
  {
    id: 4762,
    symbol: "leohalf",
    name: "0.5X Long LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leohalf"
  },
  {
    id: 4763,
    symbol: "leohedge",
    name: "1X Short LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leohedge"
  },
  {
    id: 4764,
    symbol: "leomoon",
    name: "10X Long LEO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/leomoon"
  },
  {
    id: 1354,
    symbol: "let",
    name: "LinkEye",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/let"
  },
  {
    id: 4885,
    symbol: "levl",
    name: "Levolution",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/levl"
  },
  {
    id: 5250,
    symbol: "lgo",
    name: "LGO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lgo"
  },
  {
    id: 448,
    symbol: "life",
    name: "LIFE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/life"
  },
  {
    id: 4060,
    symbol: "like",
    name: "LikeCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/like"
  },
  {
    id: 5236,
    symbol: "lina",
    name: "Linear",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lina"
  },
  {
    id: 267,
    symbol: "link",
    name: "ChainLink",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/link"
  },
  {
    id: 4765,
    symbol: "linkbear",
    name: "3X Short Chainlink Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkbear"
  },
  {
    id: 4766,
    symbol: "linkbull",
    name: "3X Long Chainlink Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkbull"
  },
  {
    id: 4767,
    symbol: "linkdoom",
    name: "10X Short Chainlink Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkdoom"
  },
  {
    id: 5301,
    symbol: "linkdown",
    name: "Chainlink Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkdown"
  },
  {
    id: 4768,
    symbol: "linkhalf",
    name: "0.5X Long Chainlink Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkhalf"
  },
  {
    id: 4769,
    symbol: "linkhedge",
    name: "1X Short Chainlink Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkhedge"
  },
  {
    id: 4770,
    symbol: "linkmoon",
    name: "10X Long Chainlink Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkmoon"
  },
  {
    id: 5300,
    symbol: "linkup",
    name: "Chainlink Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/linkup"
  },
  {
    id: 5261,
    symbol: "lit",
    name: "Litentry",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lit"
  },
  {
    id: 333,
    symbol: "lmc",
    name: "LoMoCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lmc"
  },
  {
    id: 1036,
    symbol: "lml",
    name: "Lisk Machine Learning",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lml"
  },
  {
    id: 664,
    symbol: "lnc",
    name: "Linker Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lnc"
  },
  {
    id: 1039,
    symbol: "lnd",
    name: "Lendingblock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lnd"
  },
  {
    id: 459,
    symbol: "loc",
    name: "LockTrip",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/loc"
  },
  {
    id: 5002,
    symbol: "loki",
    name: "Loki",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/loki"
  },
  {
    id: 5208,
    symbol: "lon",
    name: "Tokenlon Network Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lon"
  },
  {
    id: 530,
    symbol: "loom",
    name: "Loom Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/loom"
  },
  {
    id: 5520,
    symbol: "lowb",
    name: "Loser Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lowb"
  },
  {
    id: 5474,
    symbol: "lpool",
    name: "Launchpool",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lpool"
  },
  {
    id: 1040,
    symbol: "lpt",
    name: "Livepeer",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lpt"
  },
  {
    id: 5518,
    symbol: "lqty",
    name: "Liquity",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lqty"
  },
  {
    id: 254,
    symbol: "lrc",
    name: "Loopring",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lrc"
  },
  {
    id: 1462,
    symbol: "lrn",
    name: "Loopring [NEO]",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lrn"
  },
  {
    id: 73,
    symbol: "lsk",
    name: "Lisk",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lsk"
  },
  {
    id: 28,
    symbol: "ltc",
    name: "Litecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltc"
  },
  {
    id: 4771,
    symbol: "ltcbear",
    name: "3X Short Litecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltcbear"
  },
  {
    id: 4772,
    symbol: "ltcbull",
    name: "3X Long Litecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltcbull"
  },
  {
    id: 4773,
    symbol: "ltcdoom",
    name: "10X Short Litecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltcdoom"
  },
  {
    id: 4774,
    symbol: "ltchalf",
    name: "0.5X Long Litecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltchalf"
  },
  {
    id: 4775,
    symbol: "ltchedge",
    name: "1X Short Litecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltchedge"
  },
  {
    id: 4776,
    symbol: "ltcmoon",
    name: "10X Long Litecoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltcmoon"
  },
  {
    id: 4391,
    symbol: "lto",
    name: "LTO Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lto"
  },
  {
    id: 5484,
    symbol: "ltx",
    name: "Lattice Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ltx"
  },
  {
    id: 302,
    symbol: "lun",
    name: "Lunyr",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lun"
  },
  {
    id: 3698,
    symbol: "luna",
    name: "LUNA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/luna"
  },
  {
    id: 5466,
    symbol: "lusd",
    name: "Liquity USD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lusd"
  },
  {
    id: 1752,
    symbol: "lxt",
    name: "Litex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lxt"
  },
  {
    id: 365,
    symbol: "lym",
    name: "Lympo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/lym"
  },
  {
    id: 70,
    symbol: "maid",
    name: "MaidSafe",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maid"
  },
  {
    id: 508,
    symbol: "man",
    name: "Matrix AI Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/man"
  },
  {
    id: 265,
    symbol: "mana",
    name: "Decentraland",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mana"
  },
  {
    id: 5263,
    symbol: "maps",
    name: "MAPS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maps"
  },
  {
    id: 5114,
    symbol: "maro",
    name: "Maro",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maro"
  },
  {
    id: 5324,
    symbol: "mars",
    name: "Marscoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mars"
  },
  {
    id: 5364,
    symbol: "mask",
    name: "Mask Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mask"
  },
  {
    id: 5232,
    symbol: "mass",
    name: "Massnet",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mass"
  },
  {
    id: 5060,
    symbol: "math",
    name: "MATH",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/math"
  },
  {
    id: 2147,
    symbol: "matic",
    name: "Polygon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/matic"
  },
  {
    id: 4777,
    symbol: "maticbear",
    name: "3X Short Matic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maticbear"
  },
  {
    id: 4778,
    symbol: "maticbull",
    name: "3X Long Matic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maticbull"
  },
  {
    id: 4779,
    symbol: "maticdoom",
    name: "10X Short Matic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maticdoom"
  },
  {
    id: 4780,
    symbol: "matichalf",
    name: "0.5X Long Matic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/matichalf"
  },
  {
    id: 4781,
    symbol: "matichedge",
    name: "1X Short Matic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/matichedge"
  },
  {
    id: 4782,
    symbol: "maticmoon",
    name: "10X Long Matic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/maticmoon"
  },
  {
    id: 2806,
    symbol: "mbl",
    name: "MovieBloc",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mbl"
  },
  {
    id: 5151,
    symbol: "mbn",
    name: "Mobilian Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mbn"
  },
  {
    id: 5490,
    symbol: "mcb",
    name: "MCDEX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mcb"
  },
  {
    id: 266,
    symbol: "mco",
    name: "Monaco",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mco"
  },
  {
    id: 531,
    symbol: "mda",
    name: "Moeda Loyalty Points",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mda"
  },
  {
    id: 1110,
    symbol: "mds",
    name: "MediShares",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mds"
  },
  {
    id: 1455,
    symbol: "mdt",
    name: "Measurable Data Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mdt"
  },
  {
    id: 5366,
    symbol: "mdx",
    name: "Mdex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mdx"
  },
  {
    id: 1457,
    symbol: "med",
    name: "MediBloc [QRC20]",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/med"
  },
  {
    id: 1008,
    symbol: "medx",
    name: "MediBloc [ERC20]",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/medx"
  },
  {
    id: 5013,
    symbol: "meme",
    name: "Meme",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/meme"
  },
  {
    id: 341,
    symbol: "mer",
    name: "Mercury",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mer"
  },
  {
    id: 1004,
    symbol: "met",
    name: "Metronome",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/met"
  },
  {
    id: 1164,
    symbol: "meta",
    name: "Metadium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/meta"
  },
  {
    id: 686,
    symbol: "mft",
    name: "Mainframe",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mft"
  },
  {
    id: 828,
    symbol: "mgo",
    name: "MobileGo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mgo"
  },
  {
    id: 1915,
    symbol: "mhc",
    name: "#MetaHash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mhc"
  },
  {
    id: 4645,
    symbol: "mid",
    name: "Midcap Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mid"
  },
  {
    id: 4783,
    symbol: "midbear",
    name: "3X Short Midcap Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/midbear"
  },
  {
    id: 4784,
    symbol: "midbull",
    name: "3X Long Midcap Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/midbull"
  },
  {
    id: 4785,
    symbol: "middoom",
    name: "10X Short Midcap Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/middoom"
  },
  {
    id: 4786,
    symbol: "midhalf",
    name: "0.5X Long Midcap Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/midhalf"
  },
  {
    id: 4787,
    symbol: "midhedge",
    name: "1X Short Midcap Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/midhedge"
  },
  {
    id: 4788,
    symbol: "midmoon",
    name: "10X Long Midcap Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/midmoon"
  },
  {
    id: 3862,
    symbol: "min",
    name: "MINDOL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/min"
  },
  {
    id: 5661,
    symbol: "mina",
    name: "Mina",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mina"
  },
  {
    id: 5482,
    symbol: "mint",
    name: "Public Mint",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mint"
  },
  {
    id: 5192,
    symbol: "mir",
    name: "Mirror Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mir"
  },
  {
    id: 5472,
    symbol: "mist",
    name: "Alchemist",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mist"
  },
  {
    id: 500,
    symbol: "mith",
    name: "Mithril",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mith"
  },
  {
    id: 1091,
    symbol: "mitx",
    name: "Morpheus Labs",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mitx"
  },
  {
    id: 4559,
    symbol: "mix",
    name: "MixMarvel",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mix"
  },
  {
    id: 295,
    symbol: "mkr",
    name: "Maker",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mkr"
  },
  {
    id: 48,
    symbol: "mln",
    name: "waterMelon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mln"
  },
  {
    id: 1104,
    symbol: "mnx",
    name: "MinexCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mnx"
  },
  {
    id: 1035,
    symbol: "moac",
    name: "MOAC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/moac"
  },
  {
    id: 5391,
    symbol: "mob",
    name: "MobileCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mob"
  },
  {
    id: 1010,
    symbol: "mobi",
    name: "Mobius",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mobi"
  },
  {
    id: 1007,
    symbol: "moc",
    name: "Moss Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/moc"
  },
  {
    id: 532,
    symbol: "mod",
    name: "Modum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mod"
  },
  {
    id: 4566,
    symbol: "mof",
    name: "Molecular Future",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mof"
  },
  {
    id: 237,
    symbol: "mona",
    name: "MonaCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mona"
  },
  {
    id: 4789,
    symbol: "moon",
    name: "10X Long Bitcoin Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/moon"
  },
  {
    id: 4790,
    symbol: "moonshit",
    name: "10X Long Shitcoin Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/moonshit"
  },
  {
    id: 513,
    symbol: "morph",
    name: "Morpheus Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/morph"
  },
  {
    id: 5226,
    symbol: "mph",
    name: "88mph",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mph"
  },
  {
    id: 1016,
    symbol: "mrk",
    name: "MARK.SPACE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mrk"
  },
  {
    id: 5149,
    symbol: "mrna",
    name: "Moderna",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mrna"
  },
  {
    id: 3480,
    symbol: "mrph",
    name: "Morpheus.Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mrph"
  },
  {
    id: 416,
    symbol: "msp",
    name: "Mothership",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/msp"
  },
  {
    id: 5156,
    symbol: "mstr",
    name: "MicroStrategy",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mstr"
  },
  {
    id: 4953,
    symbol: "mta",
    name: "Meta",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mta"
  },
  {
    id: 506,
    symbol: "mtc",
    name: "Docademic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mtc"
  },
  {
    id: 436,
    symbol: "mth",
    name: "Monetha",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mth"
  },
  {
    id: 5480,
    symbol: "mthd",
    name: "Method Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mthd"
  },
  {
    id: 533,
    symbol: "mtl",
    name: "Metal",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mtl"
  },
  {
    id: 307,
    symbol: "mtn",
    name: "Medicalchain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mtn"
  },
  {
    id: 674,
    symbol: "mtx",
    name: "Matryx",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mtx"
  },
  {
    id: 328,
    symbol: "mue",
    name: "MonetaryUnit",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mue"
  },
  {
    id: 5064,
    symbol: "musd",
    name: "mStable USD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/musd"
  },
  {
    id: 5373,
    symbol: "muse",
    name: "Muse",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/muse"
  },
  {
    id: 5401,
    symbol: "mush",
    name: "Mushroom",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mush"
  },
  {
    id: 5492,
    symbol: "mvi",
    name: "Metaverse Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mvi"
  },
  {
    id: 5216,
    symbol: "mvl",
    name: "MVL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mvl"
  },
  {
    id: 3763,
    symbol: "mx",
    name: "MX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mx"
  },
  {
    id: 1119,
    symbol: "mxc",
    name: "Machine Xchange Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mxc"
  },
  {
    id: 1101,
    symbol: "mxm",
    name: "Maximine Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mxm"
  },
  {
    id: 83,
    symbol: "mxn",
    name: "Mexican Peso",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/mxn"
  },
  {
    id: 5372,
    symbol: "mxx",
    name: "Multiplier",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/mxx"
  },
  {
    id: 268,
    symbol: "myr",
    name: "Malaysian Ringgit",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/myr"
  },
  {
    id: 505,
    symbol: "nanj",
    name: "NANJCOIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nanj"
  },
  {
    id: 276,
    symbol: "nano",
    name: "Nano",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nano"
  },
  {
    id: 669,
    symbol: "nas",
    name: "Nebulas",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nas"
  },
  {
    id: 95,
    symbol: "naut",
    name: "NautilusCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/naut"
  },
  {
    id: 85,
    symbol: "nav",
    name: "NAV Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nav"
  },
  {
    id: 534,
    symbol: "ncash",
    name: "Nucleus Vision",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ncash"
  },
  {
    id: 1097,
    symbol: "nct",
    name: "PolySwarm",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nct"
  },
  {
    id: 5033,
    symbol: "near",
    name: "NEAR Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/near"
  },
  {
    id: 451,
    symbol: "nebl",
    name: "Neblio",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nebl"
  },
  {
    id: 2872,
    symbol: "nec",
    name: "Nectar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nec"
  },
  {
    id: 66,
    symbol: "neo",
    name: "NEO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/neo"
  },
  {
    id: 82,
    symbol: "neos",
    name: "NeosCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/neos"
  },
  {
    id: 4963,
    symbol: "nest",
    name: "NEST Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nest"
  },
  {
    id: 474,
    symbol: "neu",
    name: "Neumark",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/neu"
  },
  {
    id: 2113,
    symbol: "new",
    name: "Newton",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/new"
  },
  {
    id: 510,
    symbol: "nexo",
    name: "Nexo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nexo"
  },
  {
    id: 5072,
    symbol: "nflx",
    name: "Netflix",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nflx"
  },
  {
    id: 5243,
    symbol: "nftx",
    name: "NFTX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nftx"
  },
  {
    id: 322,
    symbol: "ngc",
    name: "NAGA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ngc"
  },
  {
    id: 269,
    symbol: "ngn",
    name: "Nigerian Naira",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/ngn"
  },
  {
    id: 1165,
    symbol: "nim",
    name: "Nimiq",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nim"
  },
  {
    id: 5162,
    symbol: "nio",
    name: "Nio",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nio"
  },
  {
    id: 1162,
    symbol: "nkn",
    name: "NKN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nkn"
  },
  {
    id: 547,
    symbol: "nlc2",
    name: "NoLimitCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nlc2"
  },
  {
    id: 309,
    symbol: "nlg",
    name: "Gulden",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nlg"
  },
  {
    id: 89,
    symbol: "nmc",
    name: "Namecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nmc"
  },
  {
    id: 339,
    symbol: "nmr",
    name: "Numeraire",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nmr"
  },
  {
    id: 689,
    symbol: "noah",
    name: "Noah Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/noah"
  },
  {
    id: 5150,
    symbol: "noia",
    name: "NOIA Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/noia"
  },
  {
    id: 68,
    symbol: "note",
    name: "DNotes",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/note"
  },
  {
    id: 1255,
    symbol: "nplc",
    name: "Plus-Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nplc"
  },
  {
    id: 687,
    symbol: "npxs",
    name: "Pundi X",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/npxs"
  },
  {
    id: 4852,
    symbol: "nrg",
    name: "Energi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nrg"
  },
  {
    id: 5426,
    symbol: "nrv",
    name: "Nerve Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nrv"
  },
  {
    id: 5252,
    symbol: "nsbt",
    name: "Neutrino Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nsbt"
  },
  {
    id: 507,
    symbol: "ntk",
    name: "Neurotoken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ntk"
  },
  {
    id: 5112,
    symbol: "nu",
    name: "NuCypher",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nu"
  },
  {
    id: 397,
    symbol: "nuls",
    name: "Nuls",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nuls"
  },
  {
    id: 5006,
    symbol: "nut",
    name: "Native Utility Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nut"
  },
  {
    id: 693,
    symbol: "nvc",
    name: "Novacoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nvc"
  },
  {
    id: 5161,
    symbol: "nvda",
    name: "Nvidia",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nvda"
  },
  {
    id: 5010,
    symbol: "nvt",
    name: "NerveNetwork",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nvt"
  },
  {
    id: 4967,
    symbol: "nwc",
    name: "Newscrypto",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nwc"
  },
  {
    id: 6,
    symbol: "nxc",
    name: "Nexium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nxc"
  },
  {
    id: 5140,
    symbol: "nxm",
    name: "NXM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nxm"
  },
  {
    id: 239,
    symbol: "nxs",
    name: "Nexus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nxs"
  },
  {
    id: 53,
    symbol: "nxt",
    name: "NXT",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nxt"
  },
  {
    id: 5198,
    symbol: "nyb",
    name: "New Year Bull",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/nyb"
  },
  {
    id: 412,
    symbol: "oax",
    name: "OAX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/oax"
  },
  {
    id: 2377,
    symbol: "ocean",
    name: "Ocean Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ocean"
  },
  {
    id: 364,
    symbol: "ocn",
    name: "Odyssey",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ocn"
  },
  {
    id: 5085,
    symbol: "octo",
    name: "OctoFi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/octo"
  },
  {
    id: 308,
    symbol: "ode",
    name: "ODEM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ode"
  },
  {
    id: 5204,
    symbol: "og",
    name: "OG Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/og"
  },
  {
    id: 4390,
    symbol: "ogn",
    name: "Origin Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ogn"
  },
  {
    id: 2839,
    symbol: "ogo",
    name: "Origo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ogo"
  },
  {
    id: 4844,
    symbol: "oil100",
    name: "OIL 100",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/oil100"
  },
  {
    id: 2476,
    symbol: "ok",
    name: "OKCash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ok"
  },
  {
    id: 2906,
    symbol: "okb",
    name: "Okex Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okb"
  },
  {
    id: 4791,
    symbol: "okbbear",
    name: "3X Short OKB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okbbear"
  },
  {
    id: 4792,
    symbol: "okbbull",
    name: "3X Long OKB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okbbull"
  },
  {
    id: 4793,
    symbol: "okbdoom",
    name: "10X Short OKB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okbdoom"
  },
  {
    id: 4794,
    symbol: "okbhalf",
    name: "0.5X Long OKB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okbhalf"
  },
  {
    id: 4795,
    symbol: "okbhedge",
    name: "1X Short OKB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okbhedge"
  },
  {
    id: 4796,
    symbol: "okbmoon",
    name: "10X Long OKB Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/okbmoon"
  },
  {
    id: 5092,
    symbol: "om",
    name: "Mantra Dao",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/om"
  },
  {
    id: 109,
    symbol: "omg",
    name: "OMG Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/omg"
  },
  {
    id: 5399,
    symbol: "omi",
    name: "ECOMI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/omi"
  },
  {
    id: 18,
    symbol: "omni",
    name: "Omni",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/omni"
  },
  {
    id: 2740,
    symbol: "one",
    name: "Harmony",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/one"
  },
  {
    id: 4891,
    symbol: "ong",
    name: "SoMee.Social",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ong"
  },
  {
    id: 1519,
    symbol: "onot",
    name: "ONOToken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/onot"
  },
  {
    id: 503,
    symbol: "ont",
    name: "Ontology",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ont"
  },
  {
    id: 5247,
    symbol: "opium",
    name: "Opium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/opium"
  },
  {
    id: 5172,
    symbol: "orai",
    name: "Oraichain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/orai"
  },
  {
    id: 1982,
    symbol: "orbs",
    name: "Orbs",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/orbs"
  },
  {
    id: 5326,
    symbol: "orc",
    name: "Orbit Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/orc"
  },
  {
    id: 437,
    symbol: "orme",
    name: "Ormeus Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/orme"
  },
  {
    id: 5021,
    symbol: "orn",
    name: "Orion Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/orn"
  },
  {
    id: 3334,
    symbol: "ors",
    name: "Origin Sport",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ors"
  },
  {
    id: 535,
    symbol: "ost",
    name: "OST",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ost"
  },
  {
    id: 672,
    symbol: "otn",
    name: "Open Trading Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/otn"
  },
  {
    id: 5376,
    symbol: "oxen",
    name: "Oxen",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/oxen"
  },
  {
    id: 4459,
    symbol: "oxt",
    name: "Orchid",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/oxt"
  },
  {
    id: 2971,
    symbol: "oxy",
    name: "Oxycoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/oxy"
  },
  {
    id: 5421,
    symbol: "pac",
    name: "PAC Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pac"
  },
  {
    id: 684,
    symbol: "pai",
    name: "PCHAIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pai"
  },
  {
    id: 5269,
    symbol: "paid",
    name: "PAID Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/paid"
  },
  {
    id: 1387,
    symbol: "pal",
    name: "Pal Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pal"
  },
  {
    id: 249,
    symbol: "part",
    name: "Particl",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/part"
  },
  {
    id: 65,
    symbol: "pasc",
    name: "Pascal Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pasc"
  },
  {
    id: 548,
    symbol: "pat",
    name: "Patron",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pat"
  },
  {
    id: 826,
    symbol: "pax",
    name: "Paxos Standard",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pax"
  },
  {
    id: 3731,
    symbol: "paxg",
    name: "PAX Gold",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/paxg"
  },
  {
    id: 4797,
    symbol: "paxgbear",
    name: "3X Short PAX Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/paxgbear"
  },
  {
    id: 4798,
    symbol: "paxgbull",
    name: "3X Long PAX Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/paxgbull"
  },
  {
    id: 4799,
    symbol: "paxghalf",
    name: "0.5X Long PAX Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/paxghalf"
  },
  {
    id: 4800,
    symbol: "paxghedge",
    name: "1X Short PAX Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/paxghedge"
  },
  {
    id: 248,
    symbol: "pay",
    name: "TenX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pay"
  },
  {
    id: 2905,
    symbol: "pbt",
    name: "Primalbase Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pbt"
  },
  {
    id: 629,
    symbol: "pcl",
    name: "Peculium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pcl"
  },
  {
    id: 4986,
    symbol: "pcx",
    name: "ChainX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pcx"
  },
  {
    id: 5555,
    symbol: "pdex",
    name: "Polkadex",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pdex"
  },
  {
    id: 5166,
    symbol: "peak",
    name: "PEAKDEFI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/peak"
  },
  {
    id: 5183,
    symbol: "penta",
    name: "Penta",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/penta"
  },
  {
    id: 3478,
    symbol: "perl",
    name: "Perlin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/perl"
  },
  {
    id: 5135,
    symbol: "perp",
    name: "Perpetual Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/perp"
  },
  {
    id: 4643,
    symbol: "pete2020",
    name: "President 2020 Pete",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pete2020"
  },
  {
    id: 5491,
    symbol: "peth18c",
    name: "pETH18C",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/peth18c"
  },
  {
    id: 5160,
    symbol: "pfe",
    name: "Pfizer",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pfe"
  },
  {
    id: 5014,
    symbol: "pha",
    name: "Phala.Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pha"
  },
  {
    id: 5209,
    symbol: "phb",
    name: "Phoenix Global",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/phb"
  },
  {
    id: 17,
    symbol: "php",
    name: "Philippine Peso",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/php"
  },
  {
    id: 997,
    symbol: "phx",
    name: "Red Pulse Phoenix",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/phx"
  },
  {
    id: 1618,
    symbol: "pi",
    name: "PCHAIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pi"
  },
  {
    id: 5424,
    symbol: "pib",
    name: "PIBBLE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pib"
  },
  {
    id: 5087,
    symbol: "pickle",
    name: "Pickle Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pickle"
  },
  {
    id: 97,
    symbol: "pink",
    name: "PinkCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pink"
  },
  {
    id: 241,
    symbol: "pivx",
    name: "PIVX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pivx"
  },
  {
    id: 662,
    symbol: "pkt",
    name: "Playkey",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pkt"
  },
  {
    id: 1157,
    symbol: "pla",
    name: "PlayChip",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pla"
  },
  {
    id: 410,
    symbol: "plbt",
    name: "Polybius",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/plbt"
  },
  {
    id: 234,
    symbol: "pln",
    name: "Polish Złoty",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/pln"
  },
  {
    id: 418,
    symbol: "plr",
    name: "Pillar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/plr"
  },
  {
    id: 5018,
    symbol: "pltc",
    name: "PlatonCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pltc"
  },
  {
    id: 4952,
    symbol: "plu",
    name: "Pluton",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/plu"
  },
  {
    id: 1029,
    symbol: "ply",
    name: "PlayCoin [ERC20]",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ply"
  },
  {
    id: 1006,
    symbol: "pma",
    name: "PumaPay",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pma"
  },
  {
    id: 5410,
    symbol: "pmon",
    name: "Polkamon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pmon"
  },
  {
    id: 4291,
    symbol: "pnk",
    name: "Kleros",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pnk"
  },
  {
    id: 1021,
    symbol: "pnt",
    name: "pNetwork",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pnt"
  },
  {
    id: 300,
    symbol: "poa",
    name: "POA Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/poa"
  },
  {
    id: 433,
    symbol: "poe",
    name: "Po.et",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/poe"
  },
  {
    id: 5367,
    symbol: "polk",
    name: "Polkamarkets",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/polk"
  },
  {
    id: 5100,
    symbol: "pols",
    name: "Polkastarter",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pols"
  },
  {
    id: 274,
    symbol: "poly",
    name: "Polymath",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/poly"
  },
  {
    id: 5191,
    symbol: "pond",
    name: "Marlin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pond"
  },
  {
    id: 5266,
    symbol: "poolz",
    name: "Poolz Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/poolz"
  },
  {
    id: 4,
    symbol: "pot",
    name: "PotCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pot"
  },
  {
    id: 251,
    symbol: "powr",
    name: "Power Ledger",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/powr"
  },
  {
    id: 11,
    symbol: "ppc",
    name: "Peercoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ppc"
  },
  {
    id: 4489,
    symbol: "ppp",
    name: "PayPie",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ppp"
  },
  {
    id: 435,
    symbol: "ppt",
    name: "Populous",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ppt"
  },
  {
    id: 3106,
    symbol: "pra",
    name: "ProChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pra"
  },
  {
    id: 456,
    symbol: "pre",
    name: "Presearch",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pre"
  },
  {
    id: 668,
    symbol: "prg",
    name: "Paragon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/prg"
  },
  {
    id: 4646,
    symbol: "priv",
    name: "Privacy Coin Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/priv"
  },
  {
    id: 4801,
    symbol: "privbear",
    name: "3X Short Privacy Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/privbear"
  },
  {
    id: 4802,
    symbol: "privbull",
    name: "3X Long Privacy Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/privbull"
  },
  {
    id: 4803,
    symbol: "privhalf",
    name: "0.5X Long Privacy Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/privhalf"
  },
  {
    id: 4804,
    symbol: "privhedge",
    name: "1X Short Privacy Index Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/privhedge"
  },
  {
    id: 320,
    symbol: "pro",
    name: "Propy",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pro"
  },
  {
    id: 4292,
    symbol: "prom",
    name: "Prometeus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/prom"
  },
  {
    id: 5241,
    symbol: "props",
    name: "Props Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/props"
  },
  {
    id: 5330,
    symbol: "pros",
    name: "Prosper",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pros"
  },
  {
    id: 4987,
    symbol: "prq",
    name: "PARSIQ",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/prq"
  },
  {
    id: 5190,
    symbol: "psg",
    name: "Paris Saint-Germain Fan Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/psg"
  },
  {
    id: 1453,
    symbol: "pst",
    name: "Primas",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pst"
  },
  {
    id: 1684,
    symbol: "pton",
    name: "PTON",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pton"
  },
  {
    id: 5432,
    symbol: "pundix",
    name: "Pundi X[new]",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pundix"
  },
  {
    id: 5501,
    symbol: "push",
    name: "Ethereum Push Notification Service",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/push"
  },
  {
    id: 3303,
    symbol: "pvt",
    name: "Pivot Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pvt"
  },
  {
    id: 1108,
    symbol: "pxg",
    name: "PlayGame",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pxg"
  },
  {
    id: 5384,
    symbol: "pxl",
    name: "PIXEL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pxl"
  },
  {
    id: 5158,
    symbol: "pypl",
    name: "PayPal",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pypl"
  },
  {
    id: 5461,
    symbol: "pyr",
    name: "Vulcan Forged PYR",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/pyr"
  },
  {
    id: 926,
    symbol: "qash",
    name: "QASH",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qash"
  },
  {
    id: 422,
    symbol: "qau",
    name: "Quantum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qau"
  },
  {
    id: 5365,
    symbol: "qc",
    name: "Qcash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qc"
  },
  {
    id: 536,
    symbol: "qkc",
    name: "QuarkChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qkc"
  },
  {
    id: 537,
    symbol: "qlc",
    name: "QLINK",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qlc"
  },
  {
    id: 1057,
    symbol: "qnt",
    name: "Quant",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qnt"
  },
  {
    id: 1022,
    symbol: "qntu",
    name: "Quanta Utility Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qntu"
  },
  {
    id: 5408,
    symbol: "qqq",
    name: "Poseidon Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qqq"
  },
  {
    id: 285,
    symbol: "qrl",
    name: "Quantum Resistant Ledger",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qrl"
  },
  {
    id: 538,
    symbol: "qsp",
    name: "Quantstamp",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qsp"
  },
  {
    id: 5,
    symbol: "qtum",
    name: "Qtum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qtum"
  },
  {
    id: 5468,
    symbol: "quick",
    name: "QuickSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/quick"
  },
  {
    id: 1388,
    symbol: "qun",
    name: "QunQun",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/qun"
  },
  {
    id: 476,
    symbol: "r",
    name: "Revain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/r"
  },
  {
    id: 5396,
    symbol: "rad",
    name: "Radicle",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rad"
  },
  {
    id: 9,
    symbol: "rads",
    name: "Radium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rads"
  },
  {
    id: 5469,
    symbol: "rai",
    name: "Rai Reflex Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rai"
  },
  {
    id: 5214,
    symbol: "ramp",
    name: "RAMP",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ramp"
  },
  {
    id: 5429,
    symbol: "rari",
    name: "Rarible",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rari"
  },
  {
    id: 3301,
    symbol: "rating",
    name: "DPRating",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rating"
  },
  {
    id: 5357,
    symbol: "ray",
    name: "Raydium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ray"
  },
  {
    id: 5304,
    symbol: "razor",
    name: "Razor Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/razor"
  },
  {
    id: 5356,
    symbol: "rbc",
    name: "Rubic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rbc"
  },
  {
    id: 1037,
    symbol: "rblx",
    name: "Rublix",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rblx"
  },
  {
    id: 928,
    symbol: "rbtc",
    name: "Smart Bitcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rbtc"
  },
  {
    id: 324,
    symbol: "rby",
    name: "Rubycoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rby"
  },
  {
    id: 133,
    symbol: "rcn",
    name: "Ripio Credit Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rcn"
  },
  {
    id: 236,
    symbol: "rdd",
    name: "ReddCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rdd"
  },
  {
    id: 290,
    symbol: "rdn",
    name: "Raiden Network Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rdn"
  },
  {
    id: 5202,
    symbol: "reef",
    name: "Reef",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/reef"
  },
  {
    id: 1460,
    symbol: "rem",
    name: "Remme",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rem"
  },
  {
    id: 998,
    symbol: "ren",
    name: "Republic Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ren"
  },
  {
    id: 5025,
    symbol: "renbtc",
    name: "renBTC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/renbtc"
  },
  {
    id: 5505,
    symbol: "renfil",
    name: "renFIL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/renfil"
  },
  {
    id: 21,
    symbol: "rep",
    name: "Augur",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rep"
  },
  {
    id: 4960,
    symbol: "repv2",
    name: "Augur v2",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/repv2"
  },
  {
    id: 273,
    symbol: "req",
    name: "Request Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/req"
  },
  {
    id: 4635,
    symbol: "rev",
    name: "Revain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rev"
  },
  {
    id: 5358,
    symbol: "revv",
    name: "REVV",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/revv"
  },
  {
    id: 5148,
    symbol: "rfi",
    name: "reflect.finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rfi"
  },
  {
    id: 3037,
    symbol: "rfox",
    name: "RedFOX Labs",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rfox"
  },
  {
    id: 1001,
    symbol: "rfr",
    name: "Refereum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rfr"
  },
  {
    id: 5111,
    symbol: "rfuel",
    name: "Rio DeFi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rfuel"
  },
  {
    id: 5456,
    symbol: "rgt",
    name: "Rari Governance Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rgt"
  },
  {
    id: 102,
    symbol: "ric",
    name: "Riecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ric"
  },
  {
    id: 1685,
    symbol: "rif",
    name: "RIF Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rif"
  },
  {
    id: 4957,
    symbol: "ring",
    name: "Darwinia Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ring"
  },
  {
    id: 5147,
    symbol: "ringx",
    name: "RING X PLATFORM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ringx"
  },
  {
    id: 5005,
    symbol: "rio",
    name: "Realio Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rio"
  },
  {
    id: 233,
    symbol: "rlc",
    name: "iExec RLC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rlc"
  },
  {
    id: 5388,
    symbol: "rly",
    name: "Rally",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rly"
  },
  {
    id: 5098,
    symbol: "rmpl",
    name: "RMPL",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rmpl"
  },
  {
    id: 5141,
    symbol: "rndr",
    name: "Render Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rndr"
  },
  {
    id: 4898,
    symbol: "rnt",
    name: "OneRoot Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rnt"
  },
  {
    id: 480,
    symbol: "rntb",
    name: "BitRent",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rntb"
  },
  {
    id: 4975,
    symbol: "road",
    name: "ROAD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/road"
  },
  {
    id: 5493,
    symbol: "robo",
    name: "Robo Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/robo"
  },
  {
    id: 3994,
    symbol: "roobee",
    name: "ROOBEE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/roobee"
  },
  {
    id: 5229,
    symbol: "rook",
    name: "KeeperDAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rook"
  },
  {
    id: 5292,
    symbol: "room",
    name: "OptionRoom",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/room"
  },
  {
    id: 5120,
    symbol: "rose",
    name: "Oasis Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rose"
  },
  {
    id: 1105,
    symbol: "rox",
    name: "Robotina",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rox"
  },
  {
    id: 5078,
    symbol: "rpl",
    name: "Rocket Pool",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rpl"
  },
  {
    id: 496,
    symbol: "rpx",
    name: "Red Pulse",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rpx"
  },
  {
    id: 2674,
    symbol: "rsr",
    name: "Reserve Rights",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rsr"
  },
  {
    id: 87,
    symbol: "rub",
    name: "Russian Ruble",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/rub"
  },
  {
    id: 1109,
    symbol: "ruff",
    name: "Ruff",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ruff"
  },
  {
    id: 4923,
    symbol: "rune",
    name: "THORChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rune"
  },
  {
    id: 4918,
    symbol: "rvc",
    name: "Ravencoin Classic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rvc"
  },
  {
    id: 830,
    symbol: "rvn",
    name: "Ravencoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rvn"
  },
  {
    id: 330,
    symbol: "rvr",
    name: "RevolutionVR",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rvr"
  },
  {
    id: 426,
    symbol: "rvt",
    name: "Rivetz",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/rvt"
  },
  {
    id: 5079,
    symbol: "safe",
    name: "yieldfarming.insure",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/safe"
  },
  {
    id: 5522,
    symbol: "safemoon",
    name: "SafeMoon",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/safemoon"
  },
  {
    id: 305,
    symbol: "sai",
    name: "Single Collateral DAI",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sai"
  },
  {
    id: 5108,
    symbol: "sake",
    name: "SakeToken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sake"
  },
  {
    id: 250,
    symbol: "salt",
    name: "SALT",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/salt"
  },
  {
    id: 91,
    symbol: "san",
    name: "Santinent Network Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/san"
  },
  {
    id: 4974,
    symbol: "sand",
    name: "The Sandbox",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sand"
  },
  {
    id: 5096,
    symbol: "sashimi",
    name: "Sashimi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sashimi"
  },
  {
    id: 13,
    symbol: "sbd",
    name: "Steem Dollars",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sbd"
  },
  {
    id: 5109,
    symbol: "sbtc",
    name: "Soft Bitcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sbtc"
  },
  {
    id: 1,
    symbol: "sc",
    name: "Siacoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sc"
  },
  {
    id: 1289,
    symbol: "scc",
    name: "StockChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/scc"
  },
  {
    id: 5022,
    symbol: "scrt",
    name: "Secret",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/scrt"
  },
  {
    id: 63,
    symbol: "sdc",
    name: "ShadowCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sdc"
  },
  {
    id: 5512,
    symbol: "sdt",
    name: "Stake DAO Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sdt"
  },
  {
    id: 1256,
    symbol: "seele",
    name: "Seele",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/seele"
  },
  {
    id: 991,
    symbol: "sen",
    name: "Consensus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sen"
  },
  {
    id: 467,
    symbol: "sent",
    name: "Sentinel",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sent"
  },
  {
    id: 4458,
    symbol: "sero",
    name: "Super Zero",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sero"
  },
  {
    id: 2413,
    symbol: "sexc",
    name: "ShareX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sexc"
  },
  {
    id: 5122,
    symbol: "sfi",
    name: "saffron.finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sfi"
  },
  {
    id: 5271,
    symbol: "sfp",
    name: "SafePal",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sfp"
  },
  {
    id: 78,
    symbol: "sgd",
    name: "Singapore Dollar",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/sgd"
  },
  {
    id: 1094,
    symbol: "sgn",
    name: "Signals Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sgn"
  },
  {
    id: 5196,
    symbol: "share",
    name: "Seigniorage Shares",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/share"
  },
  {
    id: 5517,
    symbol: "sheesha",
    name: "Sheesha Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sheesha"
  },
  {
    id: 5476,
    symbol: "shib",
    name: "SHIBA INU",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/shib"
  },
  {
    id: 312,
    symbol: "shift",
    name: "Shift",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/shift"
  },
  {
    id: 495,
    symbol: "ship",
    name: "ShipChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ship"
  },
  {
    id: 4644,
    symbol: "shit",
    name: "Shitcoin Index",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/shit"
  },
  {
    id: 5118,
    symbol: "shr",
    name: "ShareRing",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/shr"
  },
  {
    id: 5110,
    symbol: "shroom",
    name: "Shroom.Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/shroom"
  },
  {
    id: 5515,
    symbol: "si",
    name: "Siren",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/si"
  },
  {
    id: 332,
    symbol: "sib",
    name: "SIBCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sib"
  },
  {
    id: 5487,
    symbol: "sig",
    name: "xSigma",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sig"
  },
  {
    id: 1422,
    symbol: "six",
    name: "SIX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/six"
  },
  {
    id: 64,
    symbol: "sjcx",
    name: "Storjcoin X",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sjcx"
  },
  {
    id: 5133,
    symbol: "skl",
    name: "SKALE Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/skl"
  },
  {
    id: 1486,
    symbol: "skm",
    name: "Skrumble Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/skm"
  },
  {
    id: 539,
    symbol: "sky",
    name: "Skycoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sky"
  },
  {
    id: 5485,
    symbol: "slice",
    name: "Tranche Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/slice"
  },
  {
    id: 5489,
    symbol: "slp",
    name: "Small Love Potion",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/slp"
  },
  {
    id: 323,
    symbol: "slr",
    name: "SolarCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/slr"
  },
  {
    id: 281,
    symbol: "sls",
    name: "SaluS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sls"
  },
  {
    id: 1467,
    symbol: "slt",
    name: "Smartlands",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/slt"
  },
  {
    id: 3764,
    symbol: "slv",
    name: "Silverway",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/slv"
  },
  {
    id: 5228,
    symbol: "slv.2",
    name: "iShares Silver Trust",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/slv.2"
  },
  {
    id: 449,
    symbol: "smart",
    name: "SmartCash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/smart"
  },
  {
    id: 468,
    symbol: "smt",
    name: "SmartMesh",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/smt"
  },
  {
    id: 414,
    symbol: "snc",
    name: "SunContract",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/snc"
  },
  {
    id: 3602,
    symbol: "snet",
    name: "Snetwork",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/snet"
  },
  {
    id: 403,
    symbol: "sngls",
    name: "SingularDTV",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sngls"
  },
  {
    id: 411,
    symbol: "snm",
    name: "SONM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/snm"
  },
  {
    id: 5251,
    symbol: "snow",
    name: "SnowSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/snow"
  },
  {
    id: 134,
    symbol: "snt",
    name: "Status",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/snt"
  },
  {
    id: 5386,
    symbol: "sntvt",
    name: "Sentivate",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sntvt"
  },
  {
    id: 2278,
    symbol: "snx",
    name: "Synthetix Network Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/snx"
  },
  {
    id: 490,
    symbol: "soc",
    name: "All Sports",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/soc"
  },
  {
    id: 5462,
    symbol: "socks",
    name: "Unisocks",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/socks"
  },
  {
    id: 4889,
    symbol: "sol",
    name: "Solana",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sol"
  },
  {
    id: 4847,
    symbol: "solo",
    name: "Sologenic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/solo"
  },
  {
    id: 1159,
    symbol: "solve",
    name: "SOLVE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/solve"
  },
  {
    id: 1849,
    symbol: "soul",
    name: "Phantasma",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/soul"
  },
  {
    id: 5218,
    symbol: "sparta",
    name: "Spartan Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sparta"
  },
  {
    id: 690,
    symbol: "spc",
    name: "SpaceChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spc"
  },
  {
    id: 2311,
    symbol: "spd",
    name: "SPINDLE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spd"
  },
  {
    id: 1259,
    symbol: "sphr",
    name: "Sphere",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sphr"
  },
  {
    id: 1017,
    symbol: "sphtx",
    name: "SophiaTX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sphtx"
  },
  {
    id: 5265,
    symbol: "spi",
    name: "Shopping",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spi"
  },
  {
    id: 5142,
    symbol: "spn",
    name: "Sapien",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spn"
  },
  {
    id: 1161,
    symbol: "spnd",
    name: "Spendcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spnd"
  },
  {
    id: 927,
    symbol: "spnk",
    name: "SpankChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spnk"
  },
  {
    id: 5073,
    symbol: "spy",
    name: "SPDR S&P 500 ETF",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/spy"
  },
  {
    id: 5155,
    symbol: "sq",
    name: "Square",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sq"
  },
  {
    id: 5210,
    symbol: "srk",
    name: "SparkPoint",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/srk"
  },
  {
    id: 4968,
    symbol: "srm",
    name: "Serum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/srm"
  },
  {
    id: 253,
    symbol: "srn",
    name: "SIRIN LABS Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/srn"
  },
  {
    id: 1117,
    symbol: "ssp",
    name: "Smartshare",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ssp"
  },
  {
    id: 1223,
    symbol: "stacs",
    name: "STACS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stacs"
  },
  {
    id: 4921,
    symbol: "stake",
    name: "xDai",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stake"
  },
  {
    id: 5294,
    symbol: "stax",
    name: "StableXSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stax"
  },
  {
    id: 5660,
    symbol: "stc",
    name: "Student Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stc"
  },
  {
    id: 50,
    symbol: "steem",
    name: "Steem",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/steem"
  },
  {
    id: 5521,
    symbol: "step",
    name: "Step Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/step"
  },
  {
    id: 5224,
    symbol: "steth",
    name: "stETH (Lido)",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/steth"
  },
  {
    id: 4901,
    symbol: "stmx",
    name: "StormX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stmx"
  },
  {
    id: 86,
    symbol: "storj",
    name: "Storj",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/storj"
  },
  {
    id: 303,
    symbol: "storm",
    name: "Storm",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/storm"
  },
  {
    id: 2707,
    symbol: "stpt",
    name: "STPT",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stpt"
  },
  {
    id: 491,
    symbol: "stq",
    name: "Storiqa",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stq"
  },
  {
    id: 81,
    symbol: "str",
    name: "Stellar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/str"
  },
  {
    id: 94,
    symbol: "strat",
    name: "Stratis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/strat"
  },
  {
    id: 5119,
    symbol: "strax",
    name: "Stratis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/strax"
  },
  {
    id: 5411,
    symbol: "strk",
    name: "Strike",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/strk"
  },
  {
    id: 5075,
    symbol: "strong",
    name: "Strong",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/strong"
  },
  {
    id: 425,
    symbol: "stx",
    name: "Stox",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stx"
  },
  {
    id: 5375,
    symbol: "stx.2",
    name: "Stacks",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/stx.2"
  },
  {
    id: 304,
    symbol: "sub",
    name: "substratum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sub"
  },
  {
    id: 4980,
    symbol: "suku",
    name: "SUKU",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/suku"
  },
  {
    id: 4997,
    symbol: "sun",
    name: "SUN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sun"
  },
  {
    id: 5360,
    symbol: "super",
    name: "SuperFarm",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/super"
  },
  {
    id: 5223,
    symbol: "sure",
    name: "inSure",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sure"
  },
  {
    id: 3434,
    symbol: "susd",
    name: "sUSD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/susd"
  },
  {
    id: 4990,
    symbol: "sushi",
    name: "Sushi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sushi"
  },
  {
    id: 5303,
    symbol: "sushibear",
    name: "3X Short Sushi Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sushibear"
  },
  {
    id: 5302,
    symbol: "sushibull",
    name: "3X Long Sushi Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sushibull"
  },
  {
    id: 5291,
    symbol: "sushidown",
    name: "Sushi Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sushidown"
  },
  {
    id: 5290,
    symbol: "sushiup",
    name: "Sushi Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sushiup"
  },
  {
    id: 4956,
    symbol: "suter",
    name: "suterusu",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/suter"
  },
  {
    id: 4958,
    symbol: "swap",
    name: "TrustSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swap"
  },
  {
    id: 460,
    symbol: "swftc",
    name: "SwftCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swftc"
  },
  {
    id: 5084,
    symbol: "swingby",
    name: "Swingby",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swingby"
  },
  {
    id: 666,
    symbol: "swm",
    name: "Swarm",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swm"
  },
  {
    id: 4995,
    symbol: "swrv",
    name: "Swerve",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swrv"
  },
  {
    id: 343,
    symbol: "swt",
    name: "Swarm City",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swt"
  },
  {
    id: 3070,
    symbol: "swth",
    name: "Switcheo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/swth"
  },
  {
    id: 4588,
    symbol: "sxp",
    name: "Swipe",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sxp"
  },
  {
    id: 5285,
    symbol: "sxpdown",
    name: "Swipe Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sxpdown"
  },
  {
    id: 5284,
    symbol: "sxpup",
    name: "Swipe Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sxpup"
  },
  {
    id: 5143,
    symbol: "syn",
    name: "SynLev",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/syn"
  },
  {
    id: 75,
    symbol: "sys",
    name: "Syscoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/sys"
  },
  {
    id: 407,
    symbol: "taas",
    name: "TaaS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/taas"
  },
  {
    id: 475,
    symbol: "tau",
    name: "Lamden",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tau"
  },
  {
    id: 5126,
    symbol: "tbtc",
    name: "tBTC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tbtc"
  },
  {
    id: 1465,
    symbol: "tct",
    name: "TokenClub",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tct"
  },
  {
    id: 494,
    symbol: "tel",
    name: "Telcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tel"
  },
  {
    id: 3105,
    symbol: "temco",
    name: "TEMCO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/temco"
  },
  {
    id: 5106,
    symbol: "tend",
    name: "Tendies",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tend"
  },
  {
    id: 1948,
    symbol: "tfuel",
    name: "Theta Fuel",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tfuel"
  },
  {
    id: 325,
    symbol: "thc",
    name: "HempCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/thc"
  },
  {
    id: 540,
    symbol: "theta",
    name: "Theta Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/theta"
  },
  {
    id: 5217,
    symbol: "thr",
    name: "ThoreCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/thr"
  },
  {
    id: 3475,
    symbol: "thx",
    name: "ThoreNext",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/thx"
  },
  {
    id: 405,
    symbol: "time",
    name: "Chronobank",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/time"
  },
  {
    id: 463,
    symbol: "tio",
    name: "Trade Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tio"
  },
  {
    id: 5032,
    symbol: "titan",
    name: "TitanSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/titan"
  },
  {
    id: 340,
    symbol: "tix",
    name: "Blocktix",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tix"
  },
  {
    id: 408,
    symbol: "tkn",
    name: "TokenCard",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tkn"
  },
  {
    id: 5420,
    symbol: "tko",
    name: "Tokocrypto",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tko"
  },
  {
    id: 501,
    symbol: "tky",
    name: "THEKEY",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tky"
  },
  {
    id: 5430,
    symbol: "tlm",
    name: "Alien Worlds",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tlm"
  },
  {
    id: 4902,
    symbol: "tmtg",
    name: "The Midas Touch Gold",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tmtg"
  },
  {
    id: 168,
    symbol: "tnb",
    name: "Time New Bank",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tnb"
  },
  {
    id: 1623,
    symbol: "tnc",
    name: "Trinity Network Credit",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tnc"
  },
  {
    id: 423,
    symbol: "tnt",
    name: "Tierion",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tnt"
  },
  {
    id: 1461,
    symbol: "tomo",
    name: "TomoChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomo"
  },
  {
    id: 4805,
    symbol: "tomobear",
    name: "3X Short TomoChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomobear"
  },
  {
    id: 4806,
    symbol: "tomobull",
    name: "3X Long TomoChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomobull"
  },
  {
    id: 4807,
    symbol: "tomodoom",
    name: "10X Short TomoChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomodoom"
  },
  {
    id: 4808,
    symbol: "tomohalf",
    name: "0.5X Long TomoChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomohalf"
  },
  {
    id: 4809,
    symbol: "tomohedge",
    name: "1X Short TomoChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomohedge"
  },
  {
    id: 4810,
    symbol: "tomomoon",
    name: "10X Long TomoChain Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tomomoon"
  },
  {
    id: 5416,
    symbol: "ton",
    name: "Tokamak Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ton"
  },
  {
    id: 1882,
    symbol: "top",
    name: "TOP",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/top"
  },
  {
    id: 5293,
    symbol: "torn",
    name: "Tornado Cash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/torn"
  },
  {
    id: 1014,
    symbol: "tpay",
    name: "TokenPay",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tpay"
  },
  {
    id: 470,
    symbol: "trac",
    name: "OriginTrail",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trac"
  },
  {
    id: 4972,
    symbol: "trade",
    name: "Unitrade",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trade"
  },
  {
    id: 4971,
    symbol: "trb",
    name: "Tellor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trb"
  },
  {
    id: 5418,
    symbol: "tribe",
    name: "Tribe",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tribe"
  },
  {
    id: 541,
    symbol: "trig",
    name: "Triggers",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trig"
  },
  {
    id: 1118,
    symbol: "trio",
    name: "Tripio",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trio"
  },
  {
    id: 4027,
    symbol: "troy",
    name: "TROY",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/troy"
  },
  {
    id: 337,
    symbol: "trst",
    name: "WeTrust",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trst"
  },
  {
    id: 5127,
    symbol: "tru",
    name: "TrueFi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tru"
  },
  {
    id: 487,
    symbol: "true",
    name: "True Chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/true"
  },
  {
    id: 4638,
    symbol: "trump2020",
    name: "President 2020 Trump",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trump2020"
  },
  {
    id: 5113,
    symbol: "trv",
    name: "TrustVerse",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trv"
  },
  {
    id: 199,
    symbol: "trx",
    name: "TRON",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trx"
  },
  {
    id: 4811,
    symbol: "trxbear",
    name: "3X Short TRX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trxbear"
  },
  {
    id: 4812,
    symbol: "trxbull",
    name: "3X Long TRX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trxbull"
  },
  {
    id: 4813,
    symbol: "trxdoom",
    name: "10X Short TRX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trxdoom"
  },
  {
    id: 4814,
    symbol: "trxhalf",
    name: "0.5X Long TRX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trxhalf"
  },
  {
    id: 4815,
    symbol: "trxhedge",
    name: "1X Short TRX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trxhedge"
  },
  {
    id: 4816,
    symbol: "trxmoon",
    name: "10X Long TRX Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trxmoon"
  },
  {
    id: 4656,
    symbol: "tryb",
    name: "BiLira",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tryb"
  },
  {
    id: 4817,
    symbol: "trybbear",
    name: "3X Short BiLira Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trybbear"
  },
  {
    id: 4818,
    symbol: "trybbull",
    name: "3X Long BiLira Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trybbull"
  },
  {
    id: 4819,
    symbol: "trybhalf",
    name: "0.5X Long BiLira Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trybhalf"
  },
  {
    id: 4820,
    symbol: "trybhedge",
    name: "1X Short BiLira Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/trybhedge"
  },
  {
    id: 4855,
    symbol: "tshp",
    name: "12Ships",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tshp"
  },
  {
    id: 5067,
    symbol: "tsla",
    name: "Tesla",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tsla"
  },
  {
    id: 2608,
    symbol: "tt",
    name: "Thunder Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tt"
  },
  {
    id: 1421,
    symbol: "ttc",
    name: "TTC Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ttc"
  },
  {
    id: 5144,
    symbol: "ttt",
    name: "The Transfer Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ttt"
  },
  {
    id: 683,
    symbol: "ttu",
    name: "TaTaTu",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ttu"
  },
  {
    id: 367,
    symbol: "tube",
    name: "BitTube",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tube"
  },
  {
    id: 271,
    symbol: "tusd",
    name: "True USD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tusd"
  },
  {
    id: 5371,
    symbol: "tvk",
    name: "Terra Virtua Kolect",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/tvk"
  },
  {
    id: 5195,
    symbol: "twt",
    name: "Trust Wallet Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/twt"
  },
  {
    id: 5163,
    symbol: "twtr",
    name: "Twitter",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/twtr"
  },
  {
    id: 3766,
    symbol: "uah",
    name: "Ukrainian hryvnia",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/uah"
  },
  {
    id: 5164,
    symbol: "uber",
    name: "Uber",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uber"
  },
  {
    id: 5094,
    symbol: "ubomb",
    name: "Unibomb",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ubomb"
  },
  {
    id: 282,
    symbol: "ubq",
    name: "Ubiq",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ubq"
  },
  {
    id: 1158,
    symbol: "ubt",
    name: "Unibright",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ubt"
  },
  {
    id: 5065,
    symbol: "uca",
    name: "UCA Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uca"
  },
  {
    id: 4423,
    symbol: "ufr",
    name: "Upfiring",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ufr"
  },
  {
    id: 5359,
    symbol: "uft",
    name: "UniLend",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uft"
  },
  {
    id: 1983,
    symbol: "ugas",
    name: "UGAS",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ugas"
  },
  {
    id: 3103,
    symbol: "uip",
    name: "UnlimitedIP",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uip"
  },
  {
    id: 318,
    symbol: "ukg",
    name: "Unikoin Gold",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ukg"
  },
  {
    id: 5213,
    symbol: "ult",
    name: "Ultiledger",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ult"
  },
  {
    id: 4973,
    symbol: "uma",
    name: "UMA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uma"
  },
  {
    id: 5486,
    symbol: "umx",
    name: "UniMex Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/umx"
  },
  {
    id: 5130,
    symbol: "unfi",
    name: "Unifi Protocol DAO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/unfi"
  },
  {
    id: 5012,
    symbol: "uni",
    name: "Uniswap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uni"
  },
  {
    id: 5325,
    symbol: "unistake",
    name: "Unistake",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/unistake"
  },
  {
    id: 4983,
    symbol: "uniswap",
    name: "uniswap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uniswap"
  },
  {
    id: 5513,
    symbol: "unn",
    name: "UNION Protocol Governance Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/unn"
  },
  {
    id: 5059,
    symbol: "uno",
    name: "Unobtanium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uno"
  },
  {
    id: 3928,
    symbol: "uos",
    name: "Ultra",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uos"
  },
  {
    id: 293,
    symbol: "up",
    name: "UpToken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/up"
  },
  {
    id: 1003,
    symbol: "upp",
    name: "Sentinel Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/upp"
  },
  {
    id: 4919,
    symbol: "uqc",
    name: "Uquid Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uqc"
  },
  {
    id: 98,
    symbol: "usd",
    name: "United States Dollar",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/usd"
  },
  {
    id: 793,
    symbol: "usdc",
    name: "USD//Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdc"
  },
  {
    id: 4853,
    symbol: "usdj",
    name: "JUST Stablecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdj"
  },
  {
    id: 4622,
    symbol: "usdk",
    name: "USDK",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdk"
  },
  {
    id: 5003,
    symbol: "usdn",
    name: "Neutrino USD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdn"
  },
  {
    id: 1160,
    symbol: "usds",
    name: "StableUSD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usds"
  },
  {
    id: 2,
    symbol: "usdt",
    name: "Tether",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdt"
  },
  {
    id: 4821,
    symbol: "usdtbear",
    name: "3X Short Tether Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdtbear"
  },
  {
    id: 4822,
    symbol: "usdtbull",
    name: "3X Long Tether Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdtbull"
  },
  {
    id: 4823,
    symbol: "usdtdoom",
    name: "10X Short Tether Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdtdoom"
  },
  {
    id: 4824,
    symbol: "usdthalf",
    name: "0.5X Long Tether Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdthalf"
  },
  {
    id: 4825,
    symbol: "usdthedge",
    name: "1X Short Tether Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdthedge"
  },
  {
    id: 4826,
    symbol: "usdtmoon",
    name: "10X Long Tether Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdtmoon"
  },
  {
    id: 5136,
    symbol: "usdx",
    name: "USDX [Kava]",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usdx"
  },
  {
    id: 5524,
    symbol: "use",
    name: "ElenaUSD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/use"
  },
  {
    id: 5507,
    symbol: "usf",
    name: "Unslashed Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usf"
  },
  {
    id: 2938,
    symbol: "usk",
    name: "UpSkills",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/usk"
  },
  {
    id: 5129,
    symbol: "ust",
    name: "TerraUSD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ust"
  },
  {
    id: 366,
    symbol: "utk",
    name: "UTRUST",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/utk"
  },
  {
    id: 482,
    symbol: "utnp",
    name: "Universa",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/utnp"
  },
  {
    id: 685,
    symbol: "utt",
    name: "United Traders Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/utt"
  },
  {
    id: 519,
    symbol: "uuu",
    name: "U Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/uuu"
  },
  {
    id: 5259,
    symbol: "vai",
    name: "Vai",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vai"
  },
  {
    id: 5397,
    symbol: "val",
    name: "Validity",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/val"
  },
  {
    id: 2509,
    symbol: "vbk",
    name: "VeriBlock",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vbk"
  },
  {
    id: 5253,
    symbol: "vbtc",
    name: "Venus BTC",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vbtc"
  },
  {
    id: 3466,
    symbol: "vdx",
    name: "Vodi X",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vdx"
  },
  {
    id: 289,
    symbol: "vee",
    name: "BLOCKv",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vee"
  },
  {
    id: 298,
    symbol: "ven",
    name: "VeChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/ven"
  },
  {
    id: 1156,
    symbol: "veo",
    name: "Amoveo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/veo"
  },
  {
    id: 427,
    symbol: "veri",
    name: "Veritaseum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/veri"
  },
  {
    id: 727,
    symbol: "vet",
    name: "VeChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vet"
  },
  {
    id: 5327,
    symbol: "veth",
    name: "Venus ETH",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/veth"
  },
  {
    id: 3499,
    symbol: "vex",
    name: "Vexanium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vex"
  },
  {
    id: 5138,
    symbol: "vgx",
    name: "Voyager Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vgx"
  },
  {
    id: 38,
    symbol: "via",
    name: "Viacoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/via"
  },
  {
    id: 317,
    symbol: "vib",
    name: "Viberate",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vib"
  },
  {
    id: 441,
    symbol: "vibe",
    name: "VIBE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vibe"
  },
  {
    id: 4888,
    symbol: "vid",
    name: "VideoCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vid"
  },
  {
    id: 5039,
    symbol: "vidt",
    name: "VIDT Datalink",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vidt"
  },
  {
    id: 3829,
    symbol: "vidy",
    name: "VIDY",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vidy"
  },
  {
    id: 5455,
    symbol: "visr",
    name: "Visor.Finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/visr"
  },
  {
    id: 4629,
    symbol: "vitae",
    name: "Vitae",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vitae"
  },
  {
    id: 1011,
    symbol: "vite",
    name: "VITE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vite"
  },
  {
    id: 4896,
    symbol: "vlx",
    name: "Velas",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vlx"
  },
  {
    id: 169,
    symbol: "vox",
    name: "Voxels",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vox"
  },
  {
    id: 2609,
    symbol: "vra",
    name: "Verasity",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vra"
  },
  {
    id: 8,
    symbol: "vrc",
    name: "VeriCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vrc"
  },
  {
    id: 103,
    symbol: "vrm",
    name: "Verium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vrm"
  },
  {
    id: 5381,
    symbol: "vsp",
    name: "Vesper",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vsp"
  },
  {
    id: 3136,
    symbol: "vsys",
    name: "V Systems",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vsys"
  },
  {
    id: 100,
    symbol: "vtc",
    name: "Vertcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vtc"
  },
  {
    id: 4928,
    symbol: "vtho",
    name: "VeThor Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/vtho"
  },
  {
    id: 542,
    symbol: "wabi",
    name: "WaBi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wabi"
  },
  {
    id: 5123,
    symbol: "waif",
    name: "Waifu",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/waif"
  },
  {
    id: 543,
    symbol: "wan",
    name: "Wanchain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wan"
  },
  {
    id: 5099,
    symbol: "wanatha",
    name: "Wrapped ANATHA",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wanatha"
  },
  {
    id: 4640,
    symbol: "warren2020",
    name: "President 2020 Warren",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/warren2020"
  },
  {
    id: 242,
    symbol: "waves",
    name: "Waves",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/waves"
  },
  {
    id: 5514,
    symbol: "waxe",
    name: "WAX Economic Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/waxe"
  },
  {
    id: 3565,
    symbol: "waxp",
    name: "WAX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/waxp"
  },
  {
    id: 2907,
    symbol: "wbtc",
    name: "Wrapped Bitcoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wbtc"
  },
  {
    id: 5503,
    symbol: "wcelo",
    name: "Wrapped Celo",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wcelo"
  },
  {
    id: 5509,
    symbol: "wcres",
    name: "Wrapped CrescoFin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wcres"
  },
  {
    id: 5471,
    symbol: "wdoge",
    name: "Wrapped Dogecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wdoge"
  },
  {
    id: 5178,
    symbol: "west",
    name: "Waves Enterprise",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/west"
  },
  {
    id: 1487,
    symbol: "wet",
    name: "WeShow Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wet"
  },
  {
    id: 5080,
    symbol: "weth",
    name: "Wrapped Ether",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/weth"
  },
  {
    id: 5389,
    symbol: "whale",
    name: "WHALE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/whale"
  },
  {
    id: 5237,
    symbol: "white",
    name: "Whiteheart",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/white"
  },
  {
    id: 2148,
    symbol: "wib",
    name: "Wibson",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wib"
  },
  {
    id: 1041,
    symbol: "wicc",
    name: "WaykiChain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wicc"
  },
  {
    id: 3435,
    symbol: "win",
    name: "WINk",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/win"
  },
  {
    id: 5165,
    symbol: "wing",
    name: "Wing",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wing"
  },
  {
    id: 284,
    symbol: "wings",
    name: "Wings",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wings"
  },
  {
    id: 5465,
    symbol: "wise",
    name: "Wise Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wise"
  },
  {
    id: 4985,
    symbol: "wnxm",
    name: "Wrapped NXM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wnxm"
  },
  {
    id: 4970,
    symbol: "wom",
    name: "WOM Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wom"
  },
  {
    id: 5270,
    symbol: "woo",
    name: "Wootrade",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/woo"
  },
  {
    id: 5167,
    symbol: "wozx",
    name: "Efforce",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wozx"
  },
  {
    id: 544,
    symbol: "wpr",
    name: "WePower",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wpr"
  },
  {
    id: 4460,
    symbol: "wrx",
    name: "WazirX",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wrx"
  },
  {
    id: 445,
    symbol: "wtc",
    name: "Waltonchain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wtc"
  },
  {
    id: 1032,
    symbol: "wwb",
    name: "Wowbit",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wwb"
  },
  {
    id: 3665,
    symbol: "wxt",
    name: "Wirex Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/wxt"
  },
  {
    id: 5097,
    symbol: "xamp",
    name: "Antiample",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xamp"
  },
  {
    id: 1034,
    symbol: "xas",
    name: "Asch",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xas"
  },
  {
    id: 1096,
    symbol: "xaur",
    name: "Xaurum",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xaur"
  },
  {
    id: 4258,
    symbol: "xaut",
    name: "Tether Gold",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xaut"
  },
  {
    id: 4827,
    symbol: "xautbear",
    name: "3X Short Tether Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xautbear"
  },
  {
    id: 4828,
    symbol: "xautbull",
    name: "3X Long Tether Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xautbull"
  },
  {
    id: 4829,
    symbol: "xauthalf",
    name: "0.5X Long Tether Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xauthalf"
  },
  {
    id: 4830,
    symbol: "xauthedge",
    name: "1X Short Tether Gold Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xauthedge"
  },
  {
    id: 101,
    symbol: "xbc",
    name: "Bitcoin Plus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xbc"
  },
  {
    id: 4636,
    symbol: "xbx",
    name: "Bitex Global XBX Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xbx"
  },
  {
    id: 5188,
    symbol: "xcm",
    name: "CoinMetro Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xcm"
  },
  {
    id: 2412,
    symbol: "xcon",
    name: "Connect Coin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xcon"
  },
  {
    id: 47,
    symbol: "xcp",
    name: "Counterparty",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xcp"
  },
  {
    id: 5185,
    symbol: "xdb",
    name: "DigitalBits",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xdb"
  },
  {
    id: 4984,
    symbol: "xdc",
    name: "XinFin Network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xdc"
  },
  {
    id: 279,
    symbol: "xdn",
    name: "DigitalNote",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xdn"
  },
  {
    id: 315,
    symbol: "xel",
    name: "Elastic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xel"
  },
  {
    id: 24,
    symbol: "xem",
    name: "NEM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xem"
  },
  {
    id: 5091,
    symbol: "xfi",
    name: "Xfinance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xfi"
  },
  {
    id: 5498,
    symbol: "xfit",
    name: "Xfit",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xfit"
  },
  {
    id: 1005,
    symbol: "xhv",
    name: "Haven Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xhv"
  },
  {
    id: 275,
    symbol: "xin",
    name: "Mixin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xin"
  },
  {
    id: 5173,
    symbol: "xio",
    name: "XIO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xio"
  },
  {
    id: 171,
    symbol: "xlm",
    name: "Stellar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xlm"
  },
  {
    id: 5296,
    symbol: "xlmdown",
    name: "Stellar Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xlmdown"
  },
  {
    id: 5295,
    symbol: "xlmup",
    name: "Stellar Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xlmup"
  },
  {
    id: 3598,
    symbol: "xmc",
    name: "Monero Classic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xmc"
  },
  {
    id: 76,
    symbol: "xmr",
    name: "Monero",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xmr"
  },
  {
    id: 1751,
    symbol: "xmx",
    name: "XMax",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xmx"
  },
  {
    id: 345,
    symbol: "xmy",
    name: "Myriad",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xmy"
  },
  {
    id: 4632,
    symbol: "xns",
    name: "Insolar",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xns"
  },
  {
    id: 5074,
    symbol: "xor",
    name: "Sora",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xor"
  },
  {
    id: 46,
    symbol: "xpm",
    name: "Primecoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xpm"
  },
  {
    id: 4843,
    symbol: "xpr",
    name: "Proton",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xpr"
  },
  {
    id: 5464,
    symbol: "xprt",
    name: "Persistence",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xprt"
  },
  {
    id: 3469,
    symbol: "xrc",
    name: "Bitcoin Rhodium",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrc"
  },
  {
    id: 110,
    symbol: "xrp",
    name: "XRP",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrp"
  },
  {
    id: 4831,
    symbol: "xrpbear",
    name: "3X Short XRP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrpbear"
  },
  {
    id: 4832,
    symbol: "xrpbull",
    name: "3X Long XRP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrpbull"
  },
  {
    id: 4833,
    symbol: "xrpdoom",
    name: "10X Short XRP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrpdoom"
  },
  {
    id: 5281,
    symbol: "xrpdown",
    name: "XRP Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrpdown"
  },
  {
    id: 4834,
    symbol: "xrphalf",
    name: "0.5X Long XRP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrphalf"
  },
  {
    id: 4835,
    symbol: "xrphedge",
    name: "1X Short XRP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrphedge"
  },
  {
    id: 4836,
    symbol: "xrpmoon",
    name: "10X Long XRP Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrpmoon"
  },
  {
    id: 5280,
    symbol: "xrpup",
    name: "XRP Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrpup"
  },
  {
    id: 4988,
    symbol: "xrt",
    name: "Robonomics.network",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xrt"
  },
  {
    id: 5620,
    symbol: "xsgd",
    name: "XSGD",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xsgd"
  },
  {
    id: 5222,
    symbol: "xsn",
    name: "Stakenet",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xsn"
  },
  {
    id: 4093,
    symbol: "xsr",
    name: "Xensor",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xsr"
  },
  {
    id: 1000,
    symbol: "xst",
    name: "Stealth",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xst"
  },
  {
    id: 5481,
    symbol: "xtk",
    name: "xToken",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtk"
  },
  {
    id: 4225,
    symbol: "xtp",
    name: "Tap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtp"
  },
  {
    id: 29,
    symbol: "xtz",
    name: "Tezos",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtz"
  },
  {
    id: 4837,
    symbol: "xtzbear",
    name: "3X Short Tezos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzbear"
  },
  {
    id: 4838,
    symbol: "xtzbull",
    name: "3X Long Tezos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzbull"
  },
  {
    id: 4839,
    symbol: "xtzdoom",
    name: "10X Short Tezos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzdoom"
  },
  {
    id: 5287,
    symbol: "xtzdown",
    name: "Tezos Down",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzdown"
  },
  {
    id: 4840,
    symbol: "xtzhalf",
    name: "0.5X Long Tezos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzhalf"
  },
  {
    id: 4841,
    symbol: "xtzhedge",
    name: "1X Short Tezos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzhedge"
  },
  {
    id: 4842,
    symbol: "xtzmoon",
    name: "10X Long Tezos Token",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzmoon"
  },
  {
    id: 5286,
    symbol: "xtzup",
    name: "Tezos Up",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xtzup"
  },
  {
    id: 26,
    symbol: "xvc",
    name: "Vcash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xvc"
  },
  {
    id: 170,
    symbol: "xvg",
    name: "Verge",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xvg"
  },
  {
    id: 5038,
    symbol: "xvs",
    name: "Venus",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xvs"
  },
  {
    id: 310,
    symbol: "xwc",
    name: "WhiteCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xwc"
  },
  {
    id: 5463,
    symbol: "xym",
    name: "Symbol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xym"
  },
  {
    id: 2080,
    symbol: "xyo",
    name: "XYO",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xyo"
  },
  {
    id: 243,
    symbol: "xzc",
    name: "ZCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/xzc"
  },
  {
    id: 4976,
    symbol: "yam",
    name: "YAM",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yam"
  },
  {
    id: 5477,
    symbol: "yax",
    name: "yAxis",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yax"
  },
  {
    id: 1750,
    symbol: "yee",
    name: "YEE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yee"
  },
  {
    id: 925,
    symbol: "yeed",
    name: "YGGDRASH",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yeed"
  },
  {
    id: 5081,
    symbol: "yf-dai",
    name: "YFDAI.FINANCE",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yf-dai"
  },
  {
    id: 5101,
    symbol: "yfbeta",
    name: "yfBeta",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yfbeta"
  },
  {
    id: 4929,
    symbol: "yfi",
    name: "yearn.finance",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yfi"
  },
  {
    id: 4989,
    symbol: "yfii",
    name: "DFI.Money",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yfii"
  },
  {
    id: 5000,
    symbol: "yfl",
    name: "YF Link",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yfl"
  },
  {
    id: 5009,
    symbol: "yfv",
    name: "YFValue",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yfv"
  },
  {
    id: 5323,
    symbol: "yld",
    name: "YIELD App",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yld"
  },
  {
    id: 5306,
    symbol: "yop",
    name: "Yield Optimization Platform & Protocol",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yop"
  },
  {
    id: 4623,
    symbol: "you",
    name: "YOU COIN",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/you"
  },
  {
    id: 439,
    symbol: "yoyow",
    name: "YOYOW",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/yoyow"
  },
  {
    id: 4962,
    symbol: "zap",
    name: "Zap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zap"
  },
  {
    id: 57,
    symbol: "zar",
    name: "South African rand",
    fiat: true,
    route: "https://api.cryptowat.ch/assets/zar"
  },
  {
    id: 294,
    symbol: "zcl",
    name: "ZClassic",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zcl"
  },
  {
    id: 681,
    symbol: "zcn",
    name: "0chain",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zcn"
  },
  {
    id: 1043,
    symbol: "zco",
    name: "Zebi",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zco"
  },
  {
    id: 23,
    symbol: "zec",
    name: "Zcash",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zec"
  },
  {
    id: 5407,
    symbol: "zee",
    name: "ZeroSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zee"
  },
  {
    id: 36,
    symbol: "zen",
    name: "Horizen",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zen"
  },
  {
    id: 301,
    symbol: "zil",
    name: "Zilliqa",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zil"
  },
  {
    id: 5238,
    symbol: "zks",
    name: "ZKSwap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zks"
  },
  {
    id: 3371,
    symbol: "zla",
    name: "Zilla",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zla"
  },
  {
    id: 5180,
    symbol: "zlw",
    name: "Zelwin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zlw"
  },
  {
    id: 5157,
    symbol: "zm",
    name: "Zoom",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zm"
  },
  {
    id: 1620,
    symbol: "zpr",
    name: "ZPER",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zpr"
  },
  {
    id: 512,
    symbol: "zpt",
    name: "Zeepin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zpt"
  },
  {
    id: 545,
    symbol: "zrc",
    name: "ZrCoin",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zrc"
  },
  {
    id: 54,
    symbol: "zrx",
    name: "0x",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zrx"
  },
  {
    id: 443,
    symbol: "zsc",
    name: "Zeusshield",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zsc"
  },
  {
    id: 5659,
    symbol: "zwap",
    name: "Zilswap",
    fiat: false,
    route: "https://api.cryptowat.ch/assets/zwap"
  }
];

export default function (symbol) {
  for (var i = 0; i < resources.length; i++) {
    if (resources[i].symbol === symbol) {
      return resources[i]
    }
  }
}
