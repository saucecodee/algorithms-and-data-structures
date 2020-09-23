class DoubleLinkedList {
     constructor(value) {
          this.head = this.createNode(value)
          this.length = 1
          this.tail = this.head
     }

     createNode(value) {
          return {
               value: value,
               next: null,
               prev: null
          }
     }

     prepend(value) {
          let node = this.createNode(value)
          this.head.prev = node
          node.next = this.head

          this.head = node
          this.length++
     }

     append(value) {
          let node = this.createNode(value)
          this.tail.next = node
          node.prev = this.tail

          this.tail = node
          this.length++
     }

     insert(index, value) {
          let node = this.createNode(value)
          let currentNode = this.head

          for (let i = 0; i < this.length; i++) {
               if (i == index) {
                    currentNode.prev.next = node
                    currentNode.prev = node
                    node.prev = currentNode.prev
                    node.next = currentNode

                    this.length++
                    break
               }

               currentNode = currentNode.next
          }
     }

     listToArray(){
          let result = []
          let currentNode = this.head

          for (let i = 0; i < this.length; i++) {
               result.push(currentNode.value)
               currentNode = currentNode.next
          }

          return result
     }

     get allNodes() {
          let result = []
          let currentNode = this.head

          for (let i = 0; i < this.length; i++) {
               result.push(currentNode)
               currentNode = currentNode.next
          }

          return result
     }
}




const dl = new DoubleLinkedList("Oo")
console.table(dl.allNodes)

dl.prepend("Aa")
console.table(dl.allNodes)

dl.append("Bb")
console.table(dl.allNodes)

dl.insert(2, "Cc")
console.table(dl.allNodes)


console.log(dl.listToArray())


