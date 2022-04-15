// import { getResponse } from "../../Fauna.js"
// export default async function handler(req, res) {
//   console.log(req)
//   if (req.method !== "GET") {
//     return res.status(405)
//   }
//   try {
//     const todos = await getResponse()
//     return res.status(200).json(todos)
//   } catch (err) {
//     console.log(err)
//       res.status(500).json({ msg: "Something went wrong." })
//   }
// }

const { Ref } = require("faunadb");
const faunadb = require("faunadb");

const secret = "fnAEkEchxoACSwPBDow11WYOFyNvrwnVbJz2LbkB";
const q = faunadb.query;
const client = new faunadb.Client({secret});

module.exports = async (req,res) =>{
try {
  const dbs = await client.query(
    q.Map(
      q.Paginate(
        q.Match(
          q.Collection("todos")
        )
      ),
      Ref = q.Get(Ref)
    )
  )
  res.status(200).json(dbs.data);
} catch (error) {
  res.status(500).json({error: error.message})
}
}