
class node {
    constructor(value = 0, next = null){
        this.value = value
        this.next = next
    }
    
    show = function(){
        console.log(`The value is: ${this.value}`);
    }

}

class linkedList {
    constructor(head){
        const headV = new node(head, null)
        this.head = headV
    }

    add(value){
        const aux = new node(value, this.head)
        this.head = aux
    }

    show(){
        let pos = this.head
        while(pos){
            console.log(pos.value);
            pos = pos.next;
        }
    }
}

linked =new linkedList(2);
linked.add(3);
linked.add(4);
linked.add(7);
linked.add(5);
linked.show();
