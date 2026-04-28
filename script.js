function bookAppointment(){

const name = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const phone = document.querySelectorAll('input[type="text"]')[1].value;
const service = document.querySelector("select").value;
const date = document.querySelector('input[type="date"]').value;
const time = document.querySelector('input[type="time"]').value;
const message = document.querySelector("textarea").value;

fetch("http://localhost:3000/book",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
name,email,phone,service,date,time,message
})
})
.then(res=>res.json())
.then(data=>{
alert("Appointment Booked");
});

}
function bookAppointment(){

const name = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const phone = document.querySelectorAll('input[type="text"]')[1].value;
const service = document.querySelector("select").value;
const date = document.querySelector('input[type="date"]').value;
const time = document.querySelector('input[type="time"]').value;
const message = document.querySelector("textarea").value;

fetch("http://localhost:3000/book", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name,
email,
phone,
service,
date,
time,
message
})
})
.then(res => res.json())
.then(data => {
alert("Appointment Booked");
});

}
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
fetch("/book")