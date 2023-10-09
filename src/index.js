import './style.css';
import List from './list';
import { enableAllButton } from './Button';

function palcehoder(){
    let data = localStorage.getItem("data");
    let obj = {};
    data === null?localStorage.setItem("data",JSON.stringify(obj)):"";
}palcehoder();

function page(){

    enableAllButton();
}page();