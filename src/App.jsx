
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import Tabs from './Component/Tabs/Tabs'
import Datum from './Datum/Datum'
import Carts from './Component/Carts/Carts'
import Hero from './Component/Hero/Hero'
import ActiveUsers from './Component/ActiveUsers/ActiveUsers'
import Transform from './Component/Transform/Transform'
import GetStarted from './Component/GetStarted/GetStarted'
import ChoosePlan from './Component/ChoosePlan/ChoosePlan'



// Getting Datum
const getDatum = async () => {
  const res = await fetch("/data.json");

  return res.json();
}

const datumPromise = getDatum();

function App() {


  const [activeTab, setActiveTab] = useState("products")

  const [showCarts, setShowCarts] = useState([]);

  

  return (
    <>
      <NavBar showCarts={showCarts} />

      <Hero />

      <ActiveUsers />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} showCarts={showCarts} />

      {
        activeTab === "products" ?

        (
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Datum datumPromise={datumPromise} activeTab={activeTab} showCarts={showCarts} setShowCarts={setShowCarts} />
          </Suspense> 
        )   :

        (
          <Carts showCarts={showCarts} setShowCarts={setShowCarts} />
        )
      }


      <GetStarted />

      <ChoosePlan datumPromise={datumPromise} />
      

      <Transform />

      <Footer />
    </>
  )
}

export default App
