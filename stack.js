class Node {
    constructor(value) {
        this.top = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        }
        const node = this.top
        this.top = newNode
        this.top.next = node
        console.log(this)
        this.length++
        return this
    }
    pop() {
        if(!this.top) {
            return null
        }
        if(this.top === this.bottom) {
            this.bottom = null
        }
        this.length
        this.top = this.top.next
        this.length--;
        return this
    }
}

const stack = new Stack()
stack.peek()
stack.push(2)
stack.push(6)