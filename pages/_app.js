import '../styles/globals.css'
import Link from 'next/link'

// border-b p-6 = border bottom, padding 6

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 bg-slate-900">
        <p className="text-4xl text-teal-500 font-bold">Minty</p>
        <div className='flex mt-4'>
            <Link href="/">
              <a className='mr-6 text-teal-500'>
                Home
              </a>
            </Link>
            <Link href="/create-item">
              <a className='mr-6 text-teal-500'>
                Sell Digital Asset
              </a>
            </Link>
            <Link href="/my-assets">
              <a className='mr-6 text-teal-500'>
                My Digital Assets
              </a>
            </Link>
            <Link href="/creator-dashboard">
              <a className='mr-6 text-teal-500'>
                Creator Dashboard
              </a>
            </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>

  )
  
}

export default MyApp
