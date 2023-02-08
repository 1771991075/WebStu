import say from './user.js'
import {list} from './student.js'
import './index.css'

say()

list.forEach(item=>{
    console.log(item);
})