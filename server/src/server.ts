import express from "express"
import cors from "cors"
import { PrismaClient} from "@prisma/client"
import { convertHoursToMinutes } from "./utils/convertHourToMinute"
import { convertMinuteToHours } from "./utils/convertMinuteToHours"

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.get("/games", async(request, response)=>{
    const games = await prisma.game.findMany({
      include:{
        _count:{
          select:{
            ads: true
          }
        }
      }
    })

    return response.json(games)

})

app.post("/games/:id/ads", async(request, response)=>{
  const gameId = request.params.id
  const body:any = request.body

  const ad = await prisma.ad.create({
    data:{
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHoursToMinutes(body.hoursStart),
      hourEnd: convertHoursToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel

    }
  })


  return response.json(ad)

})

app.get("/games/:id/ads", async (request, response)=>{
    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
      select:{
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hoursStart: true,
        hourEnd: true
      },
      where:{
        gameId
      },
      orderBy:{
        createdAt: "desc"
      }
    })



    return  response.json(ads.map(ad =>{
      return{
        ...ad,
        weekDays: ad.weekDays.split(","),
        hoursStart: convertMinuteToHours(ad.hoursStart),
        hourEnd: convertMinuteToHours(ad.hourEnd)
      }
    }))

})

app.get("/ads/:id/discord", async(request, response)=>{
    const adId = request.params.id

    const ad = await prisma.ad.findUnique({
      select:{
        discord: true
      },
      where:{
        id:adId
      }
    })

   return response.json(ad)

})


app.listen(3333, ()=>{
  console.log("Server is running!")
})