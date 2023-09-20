import { selectedOnClick,getLocalData,setLocalData,getToday } from "./list";
import { Create,save,deleteList,addToDo,delToDo} from "./Button";
const addDiv= (target,name,type)=>{
    let newDiv = document.createElement("div");
    if(name != "" && name != null){
        newDiv.setAttribute(type,name);
    }
    target.appendChild(newDiv);
    return newDiv
}
const addList = (target)=>{
    let newList = document.createElement("ul");
    newList.setAttribute("class","list");
    target.appendChild(newList);
    return newList;
}
const addListContent =(target,array)=>{
    for(let i of array){
        let content = document.createElement("li");
        content.textContent = i;
        target.appendChild(content);
    } 
}
const infoList = (target)=>{
    let content = document.querySelector("#content-box");
    let info = addDiv(target,"infoList","id");
    let form = document.createElement("form");
    content.appendChild(info);
    info.appendChild(form);
    addInput(form,"Title","text");
    addInput(form,"Date","date");
    addbutton(form,"Create",Create);
}

const todoList=(date)=>{
    let array = getLocalData();
    array = array[date];
    let content = document.querySelector("#content");
    let index =0;
    for(let i of array){
        let box = addDiv(content,"todo-box","class");
        let title = addDiv(box,"list-title","class");
        title.textContent = i.title;
        let list = addList(box);
        list.setAttribute("id",`list-${index}`)
        addListContent(list,i.content);
        index++; 
    }   
}
const addToNav = (date)=>{
    let array = getLocalData();
    array = array[date];
    let nav = document.querySelector("#navigator");
    let index = 0;
    for(let i of array){
        let tab = addDiv(nav);
        tab.textContent =`${i.title}`;
        tab.setAttribute("data-id",`${index} ${date}`);
        selectedOnClick(tab);
        index++;
    }   
}

const addInlineInput = (target,name,placeholder)=>{
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.classList =`${name} inlineInput`;
    input.setAttribute("placeholder",`${placeholder}`);
    target.appendChild(input);
    return input;
}

const addEditTable = (target,info)=>{
    let day =info[1],id = info[0];
    let block = addDiv(target,"blockAll","id");
    let box = addDiv(block,"editOption","id");
    let data = getLocalData();
    data = data[day][id];
    let time = addInlineInput(box,"time",day);
    time.setAttribute("onfocus",`this.type ="date"`);
    addInlineInput(box,"title",data.title);
    let list = addList(box);
    if(data.content.length === 0){
        addNewTodo(list,"new todo");
    }else{
        for(let i of data.content){
            addNewTodo(list,i);
        }
    }
    addbutton(box,"NewTodo",addToDo);
    addbutton(box,"SAVE",save);
    addbutton(box,"DELETE",deleteList);
}

const addNewTodo = (target,placeholder)=>{
    let smallBox = addDiv(target,"small-todo-box","class");
    addInlineInput(smallBox,"content",placeholder);
    addbutton(smallBox,"-",delToDo);
}

const addbutton = (target,name,event)=>{
    let Button = document.createElement("button");
    Button.setAttribute("type","Button");
    Button.setAttribute("id",`${name}-button`);
    Button.textContent = `${name}`;
    target.appendChild(Button);
    event(Button);
}

const addListNote = (target)=>{
    let newNote= document.createElement("li");
    newNote.setAttribute("class","Note");
    target.appendChild(newList);
    return newNote;
}
const addInput=(target,name,type)=>{
    let NameLabel= document.createElement("label");
    NameLabel.setAttribute("for",`${name}Input`);
    NameLabel.textContent = `${name}: `; 
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type",type);
    nameInput.setAttribute("id",`${name}Input`);
    target.appendChild(NameLabel);
    target.appendChild(nameInput);
}


export {infoList,todoList,addToNav,addInlineInput,addEditTable,addNewTodo};