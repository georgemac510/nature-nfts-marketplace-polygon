# IPFS-Filcoin Video Marketplace

Prerequisites:
    Node version 12.x or higher. I built mine with Node 14.16.1

1) In your terminal:
        
        git clone https://github.com/georgemac510/ipfs-filecoin-video-marketplace.g

2) Install app

        yarn

3) Start your Hardhat node
   
        yarn hardhat node

4) Deploy your smart contracts to `localhost`

        yarn hardhat run scripts/deploy.js --network localhost

5) In another terminal in the same directory, start the app with
   
        yarn run dev

6) In your browser, navigate to `http://localhost:3000/`

You should be up and running!
