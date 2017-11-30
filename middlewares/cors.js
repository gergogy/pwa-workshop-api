const ACAH = 'Access-Control-Allow-Headers'
const ACRH = 'Access-Control-Request-Headers'
const ACAO = 'Access-Control-Allow-Origin'

export default (req, res, next) => {
  res.set(ACAH, req.header(ACRH))
  res.set(ACAO, '*')
  next()
}