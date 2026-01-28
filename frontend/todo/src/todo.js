export class Todo {
    constructor(data, root){
        this.data = data;
        this.root = root;
        this.render();
    }
    render(){
        this.htmlelement = document.createElement("li");
        this.htmlelement.textContent = this.data.text;
        this.htmlelement.className = "todo";
        this.root.appendChild(this.htmlelement);
    }
}

