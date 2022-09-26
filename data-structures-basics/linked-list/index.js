class LinkedList {
    
    constructor(head = null){
        this.head = head
        this.size = 1
    }

    add(index, data) {
        
        if(index < 0 || index > this.size || data == null){
            throw "Invalid arguments"
        }

        let newNode = new ListNode(data)
        let currNode = this.head
        let curIndex = 0
        while(curIndex!=index){
            currNode = currNode.getNext()
            curIndex++
        }
        newNode.setNext(currNode.getNext)
        currNode.setNext(newNode)
        this.size++;
    }

    append(data) {
        this.add(this.size, data)
    }

    //Finish method to remove elements in the linked list
    remove(index) {
        if(index<0 || index>=this.size) {
            throw "Invalid arguments"
        }

        let curNode = this.head
        let curIndex = 0
        while(index-1!=curIndex){
            curNode = curNode.next
            curIndex++
        }
        curNode.setNext(curNode.getNext().getNext())
        this.size--;

    }


}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

    setNext(next){
        this.next = next
    }

    setElement(data) {
        this.data = data
    }

    getNext() {
        return this.next
    }

    getElement() {
        return this.data
    }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
node1.next = node2

console.log(node1.next)
let list = new LinkedList(node1)
list.append(3)
console.log(list.head.next.next.data)
list.remove(1)
console.log(list.head.next.data)