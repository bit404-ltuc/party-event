/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable quotes */
/* eslint-disable new-cap */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
let pass = prompt("enter password")
if (pass !== "*******") {
    location.href = "/";

}
let divTable = document.getElementById("table")
let tableTag = document.createElement("table")
let arrHalls = JSON.parse(localStorage.getItem("Booking"))
let PartyHalls = JSON.parse(localStorage.getItem("PartyHalls"))



let html = "<h1>Booking Table </h1><table border='1|1'>";
html += "<tr>";
html += "<th>" + 'nameHall' + "</th>";
html += "<th>" + 'fullName' + "</th>";
html += "<th>" + 'phone1' + "</th>";
html += "<th>" + 'phone2' + "</th>";
html += "<th>" + 'emailAddress' + "</th>";
html += "<th>" + 'time' + "</th>";
html += "<th>" + 'date' + "</th>";
html += "<th>" + 'quantity' + "</th>";
html += "<th>" + 'radios' + "</th>";
html += "<th>" + 'confirmation' + "</th>";

html += "</tr>";


for (let i = 0; i < arrHalls.length; i++) {
    html += "<tr>";
    html += "<td>" + arrHalls[i].nameHall + "</td>";
    html += "<td>" + arrHalls[i].fullName + "</td>";
    html += "<td>" + arrHalls[i].phone1 + "</td>";
    html += "<td>" + arrHalls[i].phone2 + "</td>";
    html += "<td>" + arrHalls[i].emailAddress + "</td>";
    html += "<td>" + arrHalls[i].time + "</td>";
    html += "<td>" + arrHalls[i].date + "</td>";
    html += "<td>" + arrHalls[i].quantity + "</td>";
    html += "<td>" + arrHalls[i].radios + "</td>";
    html += "<td>" + arrHalls[i].confirmation + "</td>";

    html += "</tr>";

}
html += "</table>";
document.getElementById("table").innerHTML = html;



var html1 = "<h1>Halls Table </h1><table border='1|1'>";
html1 += "<tr>";
html1 += "<th>" + 'id' + "</th>";
html1 += "<th>" + 'name' + "</th>";
html1 += "<th>" + 'type' + "</th>";
html1 += "<th>" + 'cost' + "</th>";
html1 += "<th>" + 'address' + "</th>";

html1 += "</tr>";


for (let i = 0; i < PartyHalls.length; i++) {
    html1 += "<tr>";
    html1 += "<td>" + PartyHalls[i].id + "</td>";
    html1 += "<td>" + PartyHalls[i].name + "</td>";
    html1 += "<td>" + PartyHalls[i].type + "</td>";
    html1 += "<td>" + PartyHalls[i].cost + "</td>";
    html1 += "<td>" + PartyHalls[i].address + "</td>";


    html1 += "</tr>";

}
html1 += "</table>";
document.getElementById("table2").innerHTML = html1;