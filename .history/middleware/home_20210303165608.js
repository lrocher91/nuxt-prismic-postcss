import http from 'http'

export default function ({ route }) {
  return http.post('http://arnaudgay.re/wp-json/wp/v2/pages/25?_embed', {
    url: route.fullPath
  })
}
