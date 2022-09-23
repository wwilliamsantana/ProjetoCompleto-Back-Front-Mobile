import "./styles/main.css"
import {useEffect, useState} from "react"
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"
import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import logoImg from "./assets/logo-nlw.svg"


import { CreateModal } from "./components/CreateModal"

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
    axios("http://localhost:3333/games")
    .then(Response => {
      setGame(Response.data)
    })
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
     <img src={logoImg} alt="" />

    <h1 className="text-6xl text-white font-extrabold mt-20">
      Seu <span className="text-transparent bg-nlw-linear bg-clip-text ">duo</span> está aqui.
    </h1>

    <div className="grid grid-cols-6 gap-6 mt-16">

      {games.map(game => {

        return(
          <GameBanner
           key={game.id}
           bannerUrl={game.bannerUrl} 
           title={game.title} 
           adsCount={game._count.ads}
           />
        )})}

    </div>
        <Dialog.Root>
          <CreateAdBanner/>

          <CreateModal/>

        </Dialog.Root>
    </div>
  )
 
}

export default App
