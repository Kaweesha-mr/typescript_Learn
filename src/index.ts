
import {v4 as uuidV4} from "uuid"

const list = document.querySelector('.list') as HTMLUListElement;
const form = document.querySelector('#new-task-form') as HTMLFormElement;
const input = document.querySelector('#new-task-title') as HTMLInputElement;
 


form.addEventListener("submit",(e) => {
  e.preventDefault()

  if(input?.value == "" || input?.value == null)return

  const task = {
    id: uuidV4(),
    title:input.value,
    completed:false,
    createdAt: new Date()
  }

})