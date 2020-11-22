import { createApp } from '@nuxt/h2'
import cookie from 'cookie'

const app = createApp()

const setCookie = (res, key, value) => {
  const cookieString = res.hasHeader('Set-Cookie')
    ? res.getHeader('Set-Cookie')
    : []
  const cookies = Array.isArray(cookieString) ? cookieString : [cookieString]
  res.setHeader('Set-Cookie', [
    ...cookies,
    cookie.serialize(key, value, { path: '/' }),
  ])
}

app.use('/api/js/csrf', (req, res, next) => {
  if (req.method !== 'GET') return next()
  setCookie(res, 'XSRF-TOKEN', 'xsrf-token')

  res.statusCode = 204
  res.end()
})

export default app
