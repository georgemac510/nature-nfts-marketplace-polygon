/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import { MoralisProvider } from "react-moralis"
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Nature NFTs Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-blue-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-blue-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-blue-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
<<<<<<< HEAD
      <MoralisProvider initializeOnMount={false}>
          <Header/>
          <Component {...pageProps} />
      </MoralisProvider>
=======
          <MoralisProvider initializeOnMount={false}>
              <Header/>
              <Component {...pageProps} />
          </MoralisProvider>
>>>>>>> be9aeef3cf2b2828664dca3ce90121406c3b4430
    </div>
  )
}

export default MyApp