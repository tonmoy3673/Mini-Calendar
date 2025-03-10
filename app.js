console.log('connected');

// ================ get value by id ========//
let dateValue = document.getElementById('date');
let dayValue = document.getElementById('day');
let monthValue = document.getElementById('month');
let yearValue = document.getElementById('year');

// ========== get today date ==========//
let today = new Date();


// ============= Assign Date =======//
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

dateValue.innerText = today.getDate()<10 ? "0" :"" + today.getDate();
dayValue.innerText = weekDays[today.getDay()];
monthValue.innerText = allMonths[today.getMonth()];
yearValue.innerText= today.getFullYear();

