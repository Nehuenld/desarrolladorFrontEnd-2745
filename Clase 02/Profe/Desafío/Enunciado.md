# Modificar el siguiente código para utilizar Promises en lugar de callbacks:

https://swapi.co/documentation

```js
function request(url, cbk) {
  let req = new XMLHttpRequest()
  req.onreadystatechange = () => {
    if(req.readyState == 4){
      if(req.status === 200){
        cbk(req.response, null)
      } else {
        cbk(null, new Error(req.statusText))
      }
    }
  }
  req.onerror = () => cb(new Error(req.statusText))
  req.open('GET', url)
  req.send()
}
request('http://demo.getdkan.com/sites/default/files/Bike_Lane_23.csv', (response, error) => console.log(response, error))
```