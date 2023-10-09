import { infoList,todoList,addToNav,addEditTable,addNewTodo} from "./addElement";
import { setLocalData,popUpOverWrite,selfDes,getLocalData,getToday,checkInlineInput} from "./list";

function today(){ 
    let target = document.querySelector("#today");
    target.addEventListener("click",()=>{
        _clearContent();
        _clearNav();
        let date = getToday();
        if(!isDataExit(date)){
            emptyMessage();
            return;
        }
        todoList(date);
        addToNav(date);
    })
}

function upcoming(){
    let target = document.querySelector("#upcoming");
    target.addEventListener("click",()=>{
        _clearContent();
        _clearNav();
    })
}

function NewList(){
    let target = document.querySelector("#newList");
    target.addEventListener("click",()=>{
        let form = document.querySelector("#infoList");
        form !== null?form.remove():"";
        infoList(target);
    })
}

function deleteList(target){
    target.addEventListener("click",(e)=>{
        let list = document.querySelector(".selected");
        let [id,date] = list.dataset.id.split(" ");
        let data = getLocalData();
        (data[date]).splice(Number(id),1);
        localStorage.setItem("data",JSON.stringify(data));
        _clearContent();
        _clearNav();
        todoList(date);
        addToNav(date);
        e.target.parentNode.parentNode.remove();
    })
}

function addToDo(target){
    target.addEventListener("click",()=>{
        let place = document.querySelector("#editOption>ul");
        addNewTodo(place,"new todo");
    })
}

function delToDo(target){
    target.addEventListener("click",(e)=>{
        e.target.parentNode.remove();
    })
}

function Create(target){
    target.addEventListener("click",(e)=>{
        let date = document.querySelector("#DateInput");
        let title = document.querySelector("#TitleInput");
        if(isInputEmty(date.value) && isInputEmty(title.value)){
            return;
        }
        if(!popUpOverWrite(date.value,title.value)){
            return;
        }
        setLocalData(date.value,title.value,"",[]);
        selfDes(e);
    })
}

function listEdit(){
    let target = document.querySelector("#listEdit");
    let place = document.querySelector("#content-box");
    target.addEventListener("click",()=>{
        let nav = document.querySelector("#navigator");
        let content = nav.childNodes;
        let listIndex = _getSelectedID(content);
        if(listIndex){
            addEditTable(place,listIndex);
        }
    })
}

function save(target){
    target.addEventListener("click",(e)=>{
        let date = document.querySelector(".time.inlineInput");
        let title = document.querySelector(".title.inlineInput");
        let content = document.querySelectorAll(".content.inlineInput");
        content = Array.from(content);
        let dateData = checkInlineInput(date.value,date.placeholder);
        let titleData = checkInlineInput(title.value,title.placeholder);
        let contentData = [];
        for(let i of content){
            contentData.push(checkInlineInput(i.value,i.placeholder));
        }
        setLocalData(dateData,titleData,"",contentData);
        _clearContent();
        todoList(dateData);
        e.target.parentNode.parentNode.remove();
    })
}

function removePopup(){
    document.addEventListener("click",(e)=>{
        if(!removeCondition(e.target)){
            setTimeout(()=>{removeItem()},500);
        }
    })
}
function removeCondition(target){
    if(target.id ==="infoList" || target.id ==="newList" || target.nodeName === "INPUT" || target.nodeName ==="LABEL" 
    || target.nodeName === "FORM" || target.id === "Create-button"){
        return true;
    }
    return false;
}

function _getSelectedID(array){
    for(let i of array){
        if(i.classList == "selected"){
            return i.dataset.id.split(" ");
        }
    }
    return false
}
function _clearContent(){
    let content = document.querySelector("#content");
    content.innerHTML="";
}

function _clearNav(){
    let nav = document.querySelector("#navigator");
    nav.innerHTML ="";
}

function removeItem(){
    let infoList = document.querySelector("#infoList");
    infoList !== null?infoList.remove():"";

}
function isInputEmty(value){
    if(value ===""){
        return true
    }
    return false;
}

function isDataExit(value){
    let data = getLocalData();
    if(data.hasOwnProperty(value)){
        return true;
    }
    return false;
}

function emptyMessage(){
    let nav = document.querySelector("#navigator");
    nav.textContent = "WOW so empty! Let create new list!"
}

function enableAllButton() {
    today();
    NewList();
    removePopup();
    listEdit();
}
export {enableAllButton,today,NewList,removePopup,Create,save,deleteList,addToDo,delToDo};