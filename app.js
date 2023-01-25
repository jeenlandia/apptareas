// date

const dateNum = document.getElementById('dateNum');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateDay = document.getElementById('dateDay');

const containerTasks = document.getElementById('containerTasks');

const setDate = () => {
    const date = new Date();
    dateNum.textContent = date.toLocaleDateString('es', {day: 'numeric'});
    dateMonth.textContent = date.toLocaleDateString('es', {month: 'long'});
    dateYear.textContent = date.toLocaleDateString('es', {year: 'numeric'});
    dateDay.textContent = date.toLocaleDateString('es', {weekday: 'long'});
};

const newTask = event => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value)
    return;
    
    const task = document.createElement('div');
    task.classList.add('task');
    task.addEventListener('click', taskState)
    task.textContent = value;
    containerTasks.prepend(task);
    event.target.reset();
};

const taskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const slope = [];
    
    containerTasks.childNodes.forEach( elemento => {
        elemento.classList.contains('done') ? done.push(elemento) : slope.push(elemento)
    })
    return [...slope, ...done];
    
};

const orderedTasks = () => {
    order().forEach(elemento => containerTasks.appendChild(elemento))
};

setDate();