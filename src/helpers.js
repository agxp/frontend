let ROUTER_URL = 'http://192.168.1.74:31924';

export function GetVideoInfo(id) {
  return fetch(ROUTER_URL + '/videoInfo', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
  },
    body: "id=" + id,
  }).then((res) => {return res})
}

export function GetVideoURL(id, resolution) {
  return fetch(ROUTER_URL + '/v', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "id=" + id + "&resolution=" + resolution,
  })
}

export function Upload() {

}

export function GetTrending() {
  return fetch(ROUTER_URL + '/trending', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
}

export function Search(query, page) {

}

export function GetComments(video_id) {

}

export function WriteComment(video_id, content) {

}

