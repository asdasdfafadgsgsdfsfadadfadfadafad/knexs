const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const knex = require('knex')({
  client:"pg",
  connection:{connectionString:process.env.DATABASE_URL,ssl:true}
});
app.get("/",async (req,resp)=>{
    const data = await knex.select("*").from("users")
    resp.json(data)
})
app.listen(process.env.PORT || 3000)
