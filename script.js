let todos=[];
function addTask(){
    const taskInput=document.getElementById('task');
    todos.push(taxkInput.value);
    taskInput.value=''
    console.log('Task added',todos)
}
document.getElementById('btn').addEventListener('click',function (){
    const taskInput=document.getElementById('task');
    todos.push(taskInput.value)
    taskInput.value='';
    console.log('Task Added',todos)
    displayData();
 
   
})
function displayData(){
    const tasklist=documen.getElementById('tasks')
    if(todos.lenght==0){
        tasklist.innerHTML=`<li class ='list-group-item'>List is empty</li>`
    }else{
        let html=''
        for(let t of todos){
            html=`<li class='list-group-item'>$(t)
            <button class='btn btn-danger'></button>
            </li>`
        }
        tasklist.innerHTML=html;
    }
}
function deleteTask(task){
   for(let i=0;i<todos.length;i++){
    if(todos[i]==task){
        foundIndex=i;
        break;
    }
 
   }
   if(foundIndex){
    todos.splice(foundIndex,1);
    alert('task deleted')
    displayData();
 
   }
 
}
displayData()
