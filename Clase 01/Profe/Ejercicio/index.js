function User (firstName, age, isAdmin = false, telephones = []) {
  this.addPhone = function (phone) {
    telephones.push(phone)
  }
  this.show = function () {
    let stringTelephones = ''

    for (let i = 0; i < telephones.length; i++) {
      const tel = telephones[i].number
      stringTelephones = `${stringTelephones}, ${tel}`
    }

    console.log(`Nombre: ${firstName} Edad: ${age} Telefonos: ${stringTelephones}`)
  }

  this.showIsAdmin = function () {
    console.log(isAdmin)
  }
}

const student = new User('Nehuen', 26, true, [ { number: 876876 } ])

student.addPhone({ number: 1177228833 })

console.log(student.firstName)

student.show()
