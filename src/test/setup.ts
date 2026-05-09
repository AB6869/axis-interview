import '@testing-library/jest-dom'
import { server } from './server'

// Start MSW before all tests, reset between each, close after all
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
