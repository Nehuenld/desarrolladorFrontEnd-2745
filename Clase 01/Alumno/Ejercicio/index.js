function User(firstName, age, isAdmin, telephones = []) {
  this.telephones = function(phone) {
    telephones.push(phone)
  }
  this.shows = function() {
    let stringTelephones = ''

    for (let i = 0; i < telephones.length; i++) {
      const tel = telephones[i]

      stringTelephones = `${stringTelephones}, ${tel}`
    }
    console.log(`Nombre>${firstName}, edad> ${age} y telefono> ${telephones}`)
  }
  this.showsIsAdmin = function() {
    console.log(isAdmin)
  }
}

const client = new User('coco', 178, false, [1, 5, 6, 8, 9, 3, 5, 7, 2, 4])
client.addPhone((number = 112244563))

console.log(client.firstName)

client.show()
