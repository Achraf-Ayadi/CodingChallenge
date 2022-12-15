import logo from './image/logo.svg'
import bild1 from './image/Hosting_DE.svg'
import bild2 from './image/SSL_Cert.svg'
import bild3 from './image/ausbildung_produkt_thumbnail_bewegungstherapie_online.jpg'
import bild4 from './image/Screenshot 2022-12-15 142447.jpg'

import './App.css'
import { useEffect, useState } from 'react'
// 6878d9ee31aa40659c395c6e67535620
function App() {
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'sw-access-key': 'SWSCNKRPANNTOELDZFNVWKPAAW',
      },
      // body: '{"page":0,"limit":0,"filter":[{"type":"string","field":"string","value":"string"}],"sort":[{"field":"string","order":"string","naturalSorting":true}],"post-filter":[{"type":"string","field":"string","value":"string"}],"associations":{},"aggregations":[{"name":"string","type":"string","field":"string"}],"grouping":["string"]}',
    }

    fetch(
      'https://staging-ausbildung-shop.liebscher-bracht.com/store-api/product/6878d9ee31aa40659c395c6e67535620',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResponse(response)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  console.log(response)
  const url = window.location.href
  const breite = window.innerWidth
  const height = window.innerHeight

  let userAgent = navigator.userAgent
  let browserName

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'chrome'
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'firefox'
  } else if (userAgent.match(/safari/i)) {
    browserName = 'safari'
  } else if (userAgent.match(/opr\//i)) {
    browserName = 'opera'
  } else if (userAgent.match(/edg/i)) {
    browserName = 'edge'
  } else {
    browserName = 'No browser detection'
  }

  const handleClick = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'sw-access-key': 'SWSCNKRPANNTOELDZFNVWKPAAW',
      },
      daten: {
        url: url,
        breite: breite,
        height: height,
        browser: browserName,
      },
    }

    fetch('https://trackingDashboard.liebscher-bracht.com/addToCart', options)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }

  console.log(url, breite, height, browserName)
  if (response) {
    return (
      <div className='App'>
        <div className='h-40 flex flex-row justify-between items-center px-32 py-20 bg-[#f5f1e9]'>
          <div className='w-60 h-28 flex items-center'>
            <img src={logo}></img>
          </div>
          <div className='text-left '>
            <p className='font-medium'>Du hast Fragen? Wende dich an uns!</p>
            <p className='font-medium'>+49 6172-139 59 49 </p>
            <p> Mo.-Do. von 9-18 Uhr, Fr. von 9-16 Uhr</p>
          </div>
        </div>
        <div className='flex flex-row items-center w-full justify-center my-10'>
          <div className='relative'>
            <div className=' bg-gray-600 rounded-full w-7 h-7 text-white'>
              1
            </div>
            <div className='absolute top-8 -right-20 w-40'>produkt wählen</div>
          </div>

          <div className='w-48 h-[1px] bg-black'></div>

          <div className='relative'>
            <div className='bg-gray-400 rounded-full w-7 h-7 text-white'>2</div>
            <div className='absolute top-8 -right-20 w-40'>Deine Daten</div>
          </div>

          <div className='w-48 h-[1px] bg-black'></div>

          <div className='relative'>
            <div className=' bg-gray-400 rounded-full w-7 h-7 text-white'>
              3
            </div>
            <div className='absolute top-8 -right-28 w-60'>
              Zahlungsart und Übersicht
            </div>
          </div>

          <div className='w-48 h-[1px] bg-black'></div>
          <div className='relative'>
            <div className='bg-gray-400 rounded-full w-7 h-7 text-white'>4</div>
            <div className='absolute top-8 -right-20 w-40'>Fertig</div>
          </div>
        </div>
        <div>
          <div className='text-bold text-4xl text-left px-32 mt-16 mb-10'>
            {response.product.name}
            <img src={bild4} className='my-2' />
          </div>

          <div className='flex flex-row'>
            <img src={bild3} className='w-1/2 ml-32 mr-14' />

            <div className='flex flex-col text-left w-full mr-32'>
              <div className=' border-b border-gray-400'>
                <div className='mb-8 '>
                  {response.product.calculatedCheapestPrice.unitPrice},00 Euro
                </div>
                <button
                  onClick={handleClick}
                  className='px-4 py-3 bg-[#d6d3d1] rounded-full mb-10 hover:bg-opacity-50 '
                >
                  weiter zur Buchung
                </button>
              </div>
              <div>
                <p className='font-medium'>Du hast Fragen?</p>
                <p>Wende dich jederzeit an deinen Ausbildungsbetreuer unter:</p>
                <p>06172-139 59 49</p>
                <p>Mo.-Do. von 9 - 18 Uhr, Fr. von 9 - 16 Uhr</p>
                <p>oder kontaktiere uns über ausbildung@liebscher-bracht.com</p>
              </div>
            </div>
          </div>

          <div className='text-lg border-b border-gray-400 w-fit pb-4 ml-32 mt-16 mb-8'>
            Beschreibung
          </div>
          <div className='text-2xl text-bold text-left ml-32 mb-5'>
            Produktinformationen "Bewegungstherapie Online"
          </div>
          <p className='mx-32 text-left text-gray-600 mb-10'>
            {response.product.description}
          </p>
        </div>

        <div className=' flex flex-col justify-between  items-center px-32 py-20 bg-[#f5f1e9] py-5 space-y-2'>
          <div>Bei uns sind Deine Daten sicher!</div>
          <div className='flex flex-row space-x-5'>
            <div className=' w-24 h-24 bg-white rounded-full flex items-center justify-center'>
              <img className='w-16 h-16' src={bild1}></img>
            </div>
            <div className=' w-24 h-24 bg-white rounded-full flex items-center justify-center'>
              <img className='w-16 h-16' src={bild2}></img>
            </div>
          </div>
          <div>
            <p className='mt-5'>
              * Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl. Versandkosten
              und ggf. Nachnahmegebühren, wenn nicht anders angegeben.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
