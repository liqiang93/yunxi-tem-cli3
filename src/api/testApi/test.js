import { get, post } from "@/server/http"

// export const auth = payload => post('/cc/json/mobile_tel_segment.htm', payload)
function testGet(params) {
  return get("/api/get", params)
}

function testPost(params) {
  return post("/api/post", params)
}

export default {
  testGet,
  testPost,
}
