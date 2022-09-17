import "./styles/main.css"
import {useEffect, useState} from "react"
import logoImg from "./assets/logo-nlw.svg"
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"

interface GamesProps{
  id: string,
  title: string,
  bannerUrl: string,
  _count:{
    ads: number
  }
}



function App() {

  const [games, setGame] = useState<GamesProps[]>([])


  useEffect(()=>{
    fetch("http://localhost:3333/games")
    .then(res => res.json())
    .then(data => {
      setGame(data)
    })
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
     <img src={logoImg} alt="" />

    <h1 className="text-6xl text-white font-extrabold mt-20">
      Seu <span className="text-transparent bg-nlw-linear bg-clip-text ">duo</span> está aqui.
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">

      {games.map(card => {

        return(
          <GameBanner
           bannerUrl={card.bannerUrl} 
           title={card.title} 
           adsCount={card._count.ads}
           />
  
        )


      })}

     


    </div>

      <CreateAdBanner/>

    </div>
  )
 
}

export default App
