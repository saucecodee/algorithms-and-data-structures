class CustomArray {
     constructor() {
          this.length = 0
          this.state = {}
     }

     push(data) {
          this.state[this.length] = data
          this.length++

          return this.value
     }

     pop() {
          let value = this.state[this.length - 1]
          delete this.state[this.length - 1]
          this.length--

          return value
     }

     findByIndex(index) {
          if (index >= this.length) return undefined
          let result = this.state[index]

          return result
     }

     delete(index) {
          if (index >= this.length) return undefined
          let value = this.state[index]

          if (index < this.length) {
               for (let i = index; i < this.length; i++)
                    this.state[i] = this.state[i + 1]
          }

          delete this.state[this.length]
          this.length--

          return value
     }


     get value() {
          let res = "";
          for (let i = 0; i < this.length; i++) {
               res += this.state[i] + ", "
          }

          return `[${res}]`.replace(", ]", "]")
     }
}


let newArr = new CustomArray()

newArr.push("H1")
newArr.push("H2")
newArr.push("H3")
newArr.push("H4")
newArr.push("H5")
console.log(newArr.value)

console.log(newArr.pop())
console.log(newArr.value)

console.log(newArr.findByIndex(1))

console.log(newArr.value)
console.log(newArr.delete(2))
console.log(newArr.value)



