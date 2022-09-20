import { Input } from "./Form/Input"
import * as Dialog from "@radix-ui/react-dialog"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from "phosphor-react"
import { useEffect, useState } from "react"

interface GamesProps{
  id: string,
  title: string,
}


export function CreateModal(){

  const [weekDays, setWeekDays] = useState<string[]>([])
  const [games, setGame] = useState<GamesProps[]>([])

  console.log(weekDays)

  useEffect(()=>{
    fetch("http://localhost:3333/games")
    .then(res => res.json())
    .then(data => {
      setGame(data)
    })
  }, [])



  return (
    <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/60"/>
    <Dialog.Content className=" fixed py-8 px-10 text-white bg-[#2A2634] rounded-lg w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg ">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <label className="font-semibold " htmlFor="game">Qual o game?</label>

            <select className="bg-zinc-900 py-3 px-4 placeholder-zinc-500 text-sm rounded appearance-none"  defaultValue={""} >
              <option disabled value="">Selecione o game que deseja jogar</option>
              
              {games.map(game => {
                 return <option key={game.id} id={game.id}>{game.title}</option>
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2"> 
            <label htmlFor="name">Seu nome(ou nickname)</label>
            <Input id="name" placeholder="Como te chamam dentro do game?" />
          </div>

          <div  className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
            </div>
            <div className="flex flex-col gap-2">
             <label htmlFor="discord">Qual seu Discord?</label>
              <Input id="discord" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
               <label htmlFor="weekDay">Quando costuma jogar?</label>

              
               <ToggleGroup.Root className="flex" type="multiple" onValueChange={setWeekDays} value={weekDays}>
                  <ToggleGroup.Item className= {`w-8 h-8  rounded ${weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900" }`} value="0">D</ToggleGroup.Item>
                  <ToggleGroup.Item className={`w-8 h-8  rounded ${weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900" }`} value="1">S</ToggleGroup.Item>
                  <ToggleGroup.Item className= {`w-8 h-8  rounded ${weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900" }`} value="2">T</ToggleGroup.Item>
                  <ToggleGroup.Item className={`w-8 h-8  rounded ${weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900" }`}  value="3">Q</ToggleGroup.Item>
                  <ToggleGroup.Item className={`w-8 h-8  rounded ${weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900" }`} value="4">Q</ToggleGroup.Item>
                  <ToggleGroup.Item className= {`w-8 h-8  rounded ${weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900" }`} value="5">S</ToggleGroup.Item>
                  <ToggleGroup.Item className={`w-8 h-8  rounded ${weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900" }`}  value="6">S</ToggleGroup.Item>
                </ToggleGroup.Root>


            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="">Qual horário do dia?</label>
             <div className="grid grid-cols-2 gap-2">
              <Input placeholder="De"/>
              <Input placeholder="Até" />
             </div>
            </div>
          </div>

          <label className=" mt-2 flex gap-2 items-center text-sm">
            
          <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
             <Checkbox.Indicator >
                  <Check className="w-4 h-4 text-emerald-400"/>
             </Checkbox.Indicator>
          </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close 
              type="button"
              className="px-5 h-12 bg-zinc-500 rounded-md hover:bg-zinc-600">Cancelar
              </Dialog.Close >
              <button
              className="flex items-center gap-2 px-5 h-12 bg-violet-500 rounded-md hover:bg-violet-600"
              type="submit">
                <GameController size={24}/>
                Encontrar duo
              </button>
          </footer>
        </form>

      
    </Dialog.Content>
  </Dialog.Portal>
  )

}