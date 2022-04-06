import Joi from 'joi'
import { NextApiRequest, NextApiResponse } from 'next'

const places = (req: NextApiRequest, res: NextApiResponse) => {
  const placesQuery = Joi.object({
    query: Joi.string().required(),
    location: Joi.array().required(),
  })
  const { value } = placesQuery.validate(req.body)
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value.query}&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`
  return fetch(url)
    .then((r) => r.json())
    .then(({ predictions }) =>
      res.status(200).json({ predictions: predictions })
    )
    .catch((e) => res.status(500).send({ message: e }))
}

export default places
