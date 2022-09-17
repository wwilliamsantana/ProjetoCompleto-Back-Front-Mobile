import "./styles/main.css"
import {useEffect, useState} from "react"
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"
import * as Dialog from "@radix-ui/react-dialog"
import logoImg from "./assets/logo-nlw.svg"
import { GameController } from "phosphor-react"
import { Input } from "./components/Form/Input"

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
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60"/>
            <Dialog.Content className=" fixed py-8 px-10 text-white bg-[#2A2634] rounded-lg w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg ">
                <Dialog.Title className="text-3xl font-black">
                  Publique um anúncio
                </Dialog.Title>

        
                 
                <form className="mt-8">

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold " htmlFor="game">Qual o game?</label>
                    <Input placeholder="Selecione o game que deseja jogar" id="game"/>
                  </div>

                  <div>
                    <label htmlFor="name">Seu nome(ou nickname)</label>
                    <Input id="name" placeholder="Como te chamam dentro do game?" />
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                      <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                    </div>
                    <div>
                     <label htmlFor="discord">Qual seu Discord?</label>
                      <Input id="discord" placeholder="Usuario#0000" />
                    </div>
                  </div>

                  <div>
                    <div>
                       <label htmlFor="weekDays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <label htmlFor="">Qual horário do dia?</label>
                     <div>
                      <Input placeholder="De"/>
                      <Input placeholder="Até" />
                     </div>
                    </div>
                  </div>

                  <div>
                    <Input type="checkbox"  />
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer>
                      <button>Cancelar</button>
                      <button type="submit">
                        <GameController/>
                        Encontrar duo
                      </button>
                  </footer>
                </form>

              
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    </div>
  )
 
}

export default App
