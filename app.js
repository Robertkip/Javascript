document.addEventListener('DOMContentLoaded'),function(){

    const list  =document.querySelector('#task-list ul');
    const forms = document.forms;

    //delete task
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
}