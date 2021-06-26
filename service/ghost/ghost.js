import GhostContentAPI from '@tryghost/content-api'

const API_KEY = process.env.GHOST_API_KEY
const APP_URL = process.env.GHOST_APP_URL

const ghost = (url, key) => {
  return new GhostContentAPI({
    url,
    key,
    version: 'v2',
  })
}

const postIndexFields = [
  'id',
  'uuid',
  'title',
  'slug',
  'feature_image',
  'published_at',
  'html',
  'excerpt',
]

const postsPerPage = 8

const ghostAPI = () => {
  return ghost(APP_URL, API_KEY)
}

export { ghostAPI, postsPerPage, postIndexFields }
