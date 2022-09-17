
interface GameBannerProps{
  bannerUrl: string
  title: string
  adsCount: number
}



export function GameBanner(props: GameBannerProps){
  return (
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src={props.bannerUrl} alt="" />

        <div className="w-full pt-16 px-4 pb-4 bg-nlw-game absolute bottom-0 left-0 right-0">

          <strong className="font-bold text-white block">{props.title}</strong>
          <span className="text-zinc-300 block text-sm">{props.adsCount} anúncio(s)</span>
        </div>
      </a>
  )
}