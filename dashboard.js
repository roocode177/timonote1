fetch("http://localhost:3000/appointments")
.then(res => res.json())
.then(data => {

let output = "";

data.forEach(item => {
output += `
<div style="padding:10px; border:1px solid #ccc; margin:10px 0;">
<b>${item.name}</b> - ${item.service} <br>
${item.date} at ${item.time} <br>
${item.email} | ${item.phone} <br>
${item.message}
</div>
`;
});
document.getElementById("appointments").innerHTML = output;

});
data.forEach(item => {
output += `
...
`;
});