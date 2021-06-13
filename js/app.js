/* eslint-disable new-cap */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
let allPartyHalls = [];

function newPartyHalls(name, imgPath, description, cost, address, dates) {
    this.name = name,
        this.imgPath = imgPath,
        this.description = description,
        this.cost = cost,
        this.dates = dates,
        this.address = address
    allPartyHalls.push(this)
    savingPartyHalls()

}

new newPartyHalls('any name', '../img/party-1.jpg', 'Birthday party .... ', 250, ['15/6/2021', '18/6/2021', '19/6/2021'])

function savingPartyHalls() {
    let convertedArr = JSON.stringify(allPartyHalls);
    localStorage.setItem('PartyHalls', convertedArr);
}