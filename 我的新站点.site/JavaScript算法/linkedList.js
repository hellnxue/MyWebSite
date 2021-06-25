 
export function defaultEquals(a,b){
    return a===b
}
export class Node { 
    constructor(element) { 
        this.element = element; 
        this.next = undefined; 
    } 
   }

export default class LinkedList{
    constructor(equalsFn=defaultEquals){
        this.head=undefined
        this.count=0
        this.equalsFn=equalsFn
    }

    push(element){
        const node=new Node(element)
        let current;
        if(this.head==null){
            current=node
        }else{
            current=this.head
            while(current.next!=null){
                current=current.next
            }
            current.next=node
        }
        this.count++
    }
}

