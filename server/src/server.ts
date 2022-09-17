import express from "express"


const app = express()

app.get("/games", (request, response)=>{

  response.json([])

})

app.post("/ads", (request, response)=>{

  response.json({message: "Hello WorldS"})

})
app.get("/games/:id/ads", (request, response)=>{
    const gameId = request.params.id
    response.send(gameId)

})
app.get("/ads/:id/discord", (request, response)=>{
    const adId = request.params.id
    response.json([])

})


app.listen(3333, ()=>{
  console.log("Server is running!")
})