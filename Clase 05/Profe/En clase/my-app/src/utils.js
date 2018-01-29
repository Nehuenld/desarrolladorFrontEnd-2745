export const request = (url, method) =>
  new Promise((resolve, reject) => {
    let req = new XMLHttpRequest()
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          const parsedResponse = req.response && JSON.parse(req.response)
          resolve(parsedResponse)
        } else {
          reject(new Error(req.statusText))
        }
      }
    }
    req.onerror = () => reject(new Error(req.statusText))
    req.open(method, url)
    req.send()
  })
