import dotenv from 'dotenv'

dotenv.config()

import server from './App'

const PORT = process.env.API_PORT || 3333

server.listen(PORT, () => {
    console.log('Server is listening on port ', PORT)
})
