class Stack{
    constructor(){
       this.stack = []
       this.size = 5
    }
    isEmpty(){
        if(this.stack.length===0){
            console.log('stack is underflow');
        }
    }
    add(val){
        if(this.stack.length<this.size){
          this.stack.push(val)
        }else{
            console.log('stack overflow');
        }
    }
    pop(){
       if(this.stack.length>1){
        this.stack.pop()
       }
    }
    print(){
        console.log(this.stack);
    }
}

const stack = new Stack()
stack.add(5)
stack.add(5)
stack.add(5)
stack.add(5)
stack.add(5)
stack.pop()
stack.pop()
stack.pop()
stack.isEmpty()
stack.print()