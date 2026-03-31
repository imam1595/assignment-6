
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import Tabs from './Component/Tabs/Tabs'
import Datum from './Datum/Datum'
import Carts from './Component/Carts/Carts'



// Getting Datum
const getDatum = async () => {
  const res = await fetch("/data.json");

  return res.json();
}

function App() {

  const datumPromise = getDatum();

  const [activeTab, setActiveTab] = useState("products")

  const [showCarts, setShowCarts] = useState([]);

  

  return (
    <>
      <NavBar showCarts={showCarts} />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} showCarts={showCarts} />

      {
        activeTab === "products" ?

        (
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Datum datumPromise={datumPromise} activeTab={activeTab} showCarts={showCarts} setShowCarts={setShowCarts} />
          </Suspense>
        )   :

        (
          <Carts showCarts={showCarts} />
        )
      }

      

      

      <Footer/>
    </>
  )
}

export default App
