import * as webHttps from '@Configurations/WebHttp'

const performHandshake = async () => {
  const promises = Object.values(webHttps).map(handshake)
  const responses = await Promise.allSettled(promises)
  responses.forEach(response => {
    if (response.status === 'rejected') {
      throw response.reason
    }
  })
}

const handshake = async (webHttp) => { //: { context: { get: (arg0: string) => any; set: (arg0: string, arg1: any) => void }; request: (arg0: { url: string; method: string }) => any }
  if (!webHttp) { return }

  const options = {
    url: '/auth/handshake',
    method: 'GET'
  }

  try {
    const storedPublicKey = webHttp.context.get('PUBLIC_KEY')
    console.log('PUBLIC_KEY', storedPublicKey)

    if (storedPublicKey) {
      console.log("PUBLIC_KEY RETURN");
      return
    }

    const response = await webHttp.request(options)
    console.log('RESPONSE', response)
    const { data: body } = response
    const { data } = body
    const { publicKey } = data
    webHttp.context.set('PUBLIC_KEY', publicKey)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default performHandshake
