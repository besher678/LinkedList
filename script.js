class LinkedList{

    constructor() {
        this.head = null;
    }

    append(value){
        if(this.head === null){
            this.head = new Node(value);
            return this;
        }
        let current = this.tail();
        current.nextNode = new Node(value);
        return current;


    }
    prepend(value){
        if(this.head === null) this.head = new Node(value);
        let current = this.head;
        while (current.nextNode){
            current = current.nextNode;
        }
        const prevHead = this.head;
        this.head = new Node(value, prevHead);

    }

    size(){
        let i = 0;
        let current = this.head;
        while (current.nextNode){
            i++;
            current = current.nextNode;
        }
        return i;
    }

    Head(){
        return this.head;
    }

    tail(){
        if(!this.head) return null;
        let tail = this.head;
        while (tail.nextNode != null){
            tail = tail.nextNode;
        }
        return tail;
    }

    at(index){
       if(!this.head) return null;
       let current = this.head;
       for(let i = 0; i < index; i++){
           current = current.nextNode;
       }
       return current ? current : null;

    }

    pop(){
        if(!this.head) return null;
        if(!this.head.nextNode) this.head = null;
        let point = this.at(this.size() - 1);
        point.nextNode = null;
    }

    contains(value){
        let count = 0;
        let current = this.head;

        while (current != null){
            if (current.value === value){
                return true;
            }
            count++;
            current = current.nextNode;
        }
        return false;
    }

    find(value){
        let count = 0;
        let current = this.head;

        while (current != null){
            if (current.value === value){
                return count;
            }
            count++;
            current = current.nextNode;
        }
        return false;
    }

    toString(){
        let current = this.head;
        let array = [];
        while (current != null){
            array.push(current);
            current = current.nextNode;
        }
        return [...array];
    }

    /*insertAt(value, index){
        if(!this.head) this.append(value);
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.nextNode;
        }
        console.log(current);
        current = new Node(value);
        console.log(current);
    }*/
}

class Node{

    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;

    }
}



