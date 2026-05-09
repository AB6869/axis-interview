import { http, HttpResponse } from 'msw'

const API_URL = 'http://localhost:3000'

// SHA-256 of the plain-text password "password"
const DEMO_PASSWORD_HASH = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'

export const handlers = [
  http.get(`${API_URL}/users`, ({ request }) => {
    const username = new URL(request.url).searchParams.get('username')
    if (username === 'demouser1') {
      return HttpResponse.json([{ id: 1, username: 'demouser1', password: DEMO_PASSWORD_HASH }])
    }
    return HttpResponse.json([])
  }),

  http.get(`${API_URL}/sites`, ({ request }) => {
    const owner = new URL(request.url).searchParams.get('owner')
    if (owner === 'demouser1') {
      return HttpResponse.json([
        { id: 1, title: 'Demo site 1', owner: 'demouser1' },
        { id: 2, title: 'Demo site 2', owner: 'demouser1' },
      ])
    }
    return HttpResponse.json([])
  }),
]
