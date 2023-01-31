import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)

  const users = [
    {id: 1, name: 'Kened'},
    {id: 1, name: 'Maria'},
    {id: 1, name: 'Joao'},
  ]

  return response.json(users)
}