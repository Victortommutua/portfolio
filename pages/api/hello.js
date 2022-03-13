// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useState } from "react"

export default function handler(req, res) {
  let name = "Victor .M. Tom"
  res.status(200).json({ message: `Hire Me for the Best Tech Services ${name}`})
}
