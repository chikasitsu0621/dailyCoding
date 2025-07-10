const task = document.getElementById("task-form");
const submitBtn = document.getElementById("submit");
const taskList = document.querySelector(".task-list");

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    const submittedTask = task.value;
    let list = document.createElement(`li`);
    if(!submittedTask.trim()){        
        return ;
    }else{
        list.textContent = submittedTask;
    }
    taskList.appendChild(list);
    task.value = "";
});

const testBtn = document.getElementById("test-btn");

testBtn.addEventListener("click", function(){
console.log("ボタンを押しただけ！")
});
