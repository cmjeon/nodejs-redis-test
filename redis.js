const express = require('express')
const redis = require('redis')

const router = express.Router()

const redisClient = redis.createClient({
  /**
   * url: redis[s]://[[username][:password]@][host][:port][/db-number]
   * ex) url: 'redis://alice:foobared@awesome.redis.server:6380/3'
   * url 없으면 localhost:6379 로 기본연결
   */
  legacyMode: true,
})

redisClient.connect().then()
const redisCli = redisClient.v4

const set = async (req, res) => {
  console.log('### set(==update')
  const key = req.body.key
  const value = req.body.value
  const result = await redisCli.set(key, value).catch((err) => console.log(err))

  return res.status(201).json({
    message: 'Success',
    result,
  })
}

const getList = async (req, res) => {
  console.log('### getList')
  const result = await redisCli.keys('*').catch((err) => console.log(err))
  return res.status(200).json({
    message: 'Success',
    result,
  })
}

const show = async (req, res) => {
  console.log('### show')
  const key = req.params.key
  const result = await redisCli.get(key).catch((err) => console.log(err))
  return res.status(200).json({
    message: 'Success',
    result,
  })
}

const destroy = async (req, res) => {
  console.log('### destroy')
  const key = req.params.key
  const result = await redisCli.del(key).catch((err) => console.log(err))
  return res.status(204).json({
    message: 'Success',
    result,
  })
}

const expirationSet = async (req, res) => {
  console.log('### expirationSet')
  const key = req.body.key
  const value = req.body.value
  const ex = req.body.ex ?? 0
  const options = {
    EX: Number(ex),
  }
  const result = await redisCli
    .set(key, value, options)
    .catch((err) => console.log(err))

  return res.status(200).json({
    message: 'Success',
    result,
  })
}

router.post('/', set)
router.get('/', getList)
router.get('/:key', show)
router.delete('/:key', destroy)
router.post('/exp', expirationSet)

module.exports = router
