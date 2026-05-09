import { login, ApiError } from '@/api'

describe('login', () => {
  it('returns AuthUser without password on valid credentials', async () => {
    const result = await login('demouser1', 'password')

    expect(result).toEqual({ id: 1, username: 'demouser1' })
    expect(result).not.toHaveProperty('password')
  })

  it('throws ApiError 401 on wrong password', async () => {
    await expect(login('demouser1', 'wrongpassword')).rejects.toMatchObject({
      status: 401,
    })
  })

  it('throws ApiError 401 when username does not exist', async () => {
    await expect(login('unknown', 'password')).rejects.toBeInstanceOf(ApiError)
  })
})
