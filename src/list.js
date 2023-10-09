function setLocalData(date,title,note,content){
    let data = getLocalData();
    let newdata = {title,note,content};
    if(!data.hasOwnProperty(`${date}`)){
        data[`${date}`] = [];
    }
    for(let i of data[`${date}`]){
        if(i.title === title && data[`${date}`] != ""){
            i.note = note;
            i.content = content;
            localStorage.setItem("data",JSON.stringify(data));
            return;
        }
    }
    data[`${date}`].push(newdata);
    localStorage.setItem("data",JSON.stringify(data));
}
function getLocalData(){
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    return data;
}

function getToday(){
    let calendar = new Date();
    let day = calendar.getDate(),month =calendar.getMonth() + 1, year = calendar.getFullYear();
    if(Number(month) < 10){
        month = `0${month}`;
    }
    return `${year}-${month}-${day}`;
}

function getNextDay(){
    let calendar = new Date();
    let day = calendar.getDate(),month =calendar.getMonth() + 1, year = calendar.getFullYear();
    if(Number(month) < 10){
        month = `0${month}`;
    }
    day = Number(day) + 1;
    if(day > 3  );
}

function selectedOnClick(target){
    target.addEventListener("click",(e)=>{
        _deSelectedAll(e.target.parentNode);
        e.target.classList = "selected";
    })
}

function _deSelectedAll(target){
    let arr = target.childNodes;
    for(let i of arr){
        i.classList ="";
    }
}

function popUpOverWrite(date,key){
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    if(data.hasOwnProperty(date)){
        data = data[date];
        for(let i of data){
            if(i.title === key){
                if(confirm("This List aready exist! Overwrite ?")){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
    return true;
}

function checkInlineInput(value,oldValue){
    if(value === ""){
        return oldValue;
    }
    return value;
}

function selfDes(event){
    event.target.parentNode.parentNode.remove();
}
export {setLocalData,popUpOverWrite,selfDes,getLocalData,getToday,selectedOnClick, checkInlineInput};