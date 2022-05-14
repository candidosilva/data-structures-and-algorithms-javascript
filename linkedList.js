class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
    }
    prepend(value) {
        const newNode = {
            value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    printList() {
        const array = []
        let noAtual = this.head
        while(noAtual !== null) {
            array.push(noAtual.value)
            noAtual = noAtual.next
        }
        console.log(array)
        return array
    }
    insert(index, value) {
        if(index >= this.length) {
            return this.append(value)
        }
        const novoNo = {
            value,
            next: null
        }
        const lider = this.encontrarIndex(index - 1)
        const aposOLider = lider.next
        lider.next = novoNo
        novoNo.next = aposOLider
        this.length++
        return 
    }
    encontrarIndex(index) {
        let contador = 0
        let no = this.head
        while(contador !== index) {
            no = no.next
            contador++
        }
        return no
    }
    remove(index) {
        const lider = this.encontrarIndex(index - 1)
        const aposOLider = lider.next
        lider.next = aposOLider.next
        this.length--;
    }
    reverse() {
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this.printList()
    }
}

// [1 4 43 23 99 76]

const lista = new LinkedList(2)
// lista.append(1)
// lista.append(4)
// lista.append(43)
// lista.append(23)
// lista.append(99)
lista.printList()
// lista.reverse()