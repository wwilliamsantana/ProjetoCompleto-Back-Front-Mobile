import { MagnifyingGlassPlus } from "phosphor-react";


export function CreateAdBanner(){

  return(
    <div className="self-stretch mt-8 rounded-lg bg-nlw-linear pt-1 ">

      <div className="bg-[#2A2634] px-8 py-4 flex justify-between items-center">
    
      <div>
          <strong className="text-white font-black text-2xl block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>

      </div>

      <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white font-medium rounded-md flex items-center gap-3">
        <MagnifyingGlassPlus size={24}/>
        Publicar anúncio
      </button>

      </div>

    </div>
  )


}