/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable quotes */
/* eslint-disable new-cap */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */

let time = ['2:00pm-4:00pm', '4:00pm-6:00pm', '6:00pm-8:00pm', '8:00pm-10:00pm', '10:00pm-12:00pm']
let allPartyHalls = [];
let id = 0;
let urlSearch = window.location.search.substring(1);
let localHalls = JSON.parse(localStorage.getItem("PartyHalls"))
let arrNameHalls = ["Birthday", "Garduation", "weddings"]

function newPartyHalls(name, imgPath, description, cost, address, type) {
    this.id = ++id
    this.name = name,
        this.imgPath = imgPath,
        this.description = description,
        this.cost = cost,
        this.dates = time,
        this.address = address,
        this.type = type
    allPartyHalls.push(this)
    savingPartyHalls()

}
new newPartyHalls('West farm ', '../img/wastfarm.jpg', 'Creating  your wedding In West farm mean a whole lot of time outdoors, walking in the sunshine   in our West farm you can create a great party. ', 2500, 'Location : Amman - Airport area -street 10 near ltuc university ', "weddings")
new newPartyHalls('South farm  ', '../img/southfarm.jpg', 'Creating  your wedding In South farm mean a whole lot of time outdoors, walking in the sunshine   in our West farm you can create a great party. ', 2700, 'Location : Amman - Airport area -street 10 near ltuc university ', "weddings")
new newPartyHalls('Dead sea', '../img/deadsee.jpg', 'A beach wedding at the height of summer calls for creative ways to help guests beat the heat. In our location in dead see you can create a great party with special services', 3500, 'Location : Dead sea - panorama dead sea complex', "weddings")
new newPartyHalls('Aqaba hotel', '../img/aqabahotel.jpg', 'A beach wedding at the height of summer calls for creative ways to help guests beat the heat. In our location in dead see you can create a great party with special services', 3700, 'Location : Aqaba- Airport area -street 10 near Jordan collage', "weddings")
new newPartyHalls('West hotel', '../img/westhotel.jpg', 'a hotel is a great location for a party. Some people may think a hotel would be too expensive, but the cost can actually be the same as renting or booking other types of venues .We have a  West hotel option of Wedding Hotels Destinations in Amman . ', 4000, '	Location : Amman- Airport area -street 10', "weddings")
new newPartyHalls('South hotel', '../img/southhotel.jpg', 'a hotel is a great location for a party. Some people may think a hotel would be too expensive, but the cost can actually be the same as renting or booking other types of venues.. We have a  South hotel as an option for Wedding Hotels Destinations in Amman .', 4200, 'Location : Amman- Airport area -street 10', "weddings")

new newPartyHalls('Happy farm', '../img/happyfarm.jpg', 'Graduation is fast approaching, and you are starting to wonder if you have everything ready. If this is your first time throwing a graduation party, you may be feeling a bit underprepared. To make sure you have everything you need and you get everything done in time, you can book to create your party in Happy farm.', 1500, 'Location : Amman- Airport area -street 10', "Garduation")
new newPartyHalls('Happy land farm', '../img/happyland.jpg', 'Graduation is fast approaching, and you are starting to wonder if you have everything ready. If this is your first time throwing a graduation party, you may be feeling a bit underprepared. To make sure you have everything you need and you get everything done in time, you can book to create your party in Happy land farm.', 1200, 'Location : Amman- Airport area -street 10', "Garduation")
new newPartyHalls('Geen Restaurant ', '../img/greenrestaurnt.jpg', 'a restaurant is a great location for graduation  , you can book in this our beautiful place At geen Restaurant ', 900, 'Location : Amman- Airport area -street 10', "Garduation")
new newPartyHalls('West land farm.', '../img/greenrestaurnt.jpg', 'a restaurant is a great location for graduation  , you can book in this our beautiful place At geen Restaurant ', 900, 'Location : Amman- Airport area -street 10', "Garduation")
new newPartyHalls('Big farm', '../img/bigfarm.jpg', 'Graduation is fast approaching, and you are starting to wonder if you have everything ready. If this is your first time throwing a graduation party, you may be feeling a bit underprepared. To make sure you have everything you need and you get everything done in time, you can book to create your party in Happy land farm.', 1200, 'Location : Amman- Airport area -street 10', "Garduation")
new newPartyHalls('Blue Restaurant ', '../img/westlandparty.jpg', 'a restaurant is a great location for graduation  , you can book in this our beautiful place At west land farm', 2500, 'Location : Amman- Airport area -street 10', "Garduation")

new newPartyHalls('Blue Sky ', '../img/bluesky.jpg', 'In Blue sky  farm  you can create  maybe the perfect birthday celebration. A farm birthday party is a great way to be creative with farm party food ideas, ', 250, 'Location : Amman- Airport area -street 10', "Birthday")
new newPartyHalls('Colorful place ', '../img/colorful.jpg', 'Are you trying to do something special for a birthday but dont have space? Throwing a party at a restaurant is a great way to bring large groups together for the ultimate celebration. Blue sky restaurant is the best place to do this type of party', 200, 'Location : Amman- Airport area -street 10', "Birthday")
new newPartyHalls('Pink place ', '../img/pink.jpg', 'Are you trying to do something special for a birthday but dont have space? Throwing a party at a restaurant is a great way to bring large groups together for the ultimate celebration. Orange restaurant is the best place to do this type of party', 200, 'Location : Amman- Airport area -street 10', "Birthday")
new newPartyHalls('Orange place ', '../img/orange.jpg', 'In Orange  farm  you can create  maybe the perfect birthday celebration. A farm birthday party is a great way to be creative with farm party food ideas, ', 200, 'Location : Amman- Airport area -street 10', "Birthday")
new newPartyHalls('Red flower ', '../img/redflower.jpg', 'Are you trying to do something special for a birthday but dont have space? Throwing a party at a restaurant is a great way to bring large groups together for the ultimate celebration.red flower  restaurant is the best place to do this type of party', 200, 'Location : Amman- Airport area -street 10', "Birthday")
new newPartyHalls('Red flower farm ', '../img/redflowerfarm.jpg', 'In Red flower farm  you can create  maybe the perfect birthday celebration. A farm birthday party is a great way to be creative with farm party food ideas, ', 200, 'Location : Amman- Airport area -street 10', "Birthday")


function savingPartyHalls() {
    let convertedArr = JSON.stringify(allPartyHalls);
    localStorage.setItem('PartyHalls', convertedArr);
}




function createCard() {
    let arrCard = JSON.parse(localStorage.getItem("PartyHalls"))

    let cc = document.getElementById("cc")
    let section = document.createElement("section")
    section.className = "maincard"
    if (urlSearch !== '') {
        allPartyHalls = allPartyHalls.filter(word => word.type === urlSearch)
    }

    if (!arrNameHalls.includes(urlSearch) && urlSearch !== '') {

        document.getElementById("bodyParty").innerHTML = "<div style = " + "'text-align : center ; '" + "> <h1 style = " + "font-size:60px;" + ">404</h1><p>Page Not Found  </p> </div>";
    }


    for (let i = 0; i < allPartyHalls.length; i++) {

        let cardbox = `<div  class="cardbox">
                    <a class="card" href="/pages/form.html?${allPartyHalls[i].id-1}" style="--bg-img: url(${allPartyHalls[i].imgPath})">
                        <div>
                            <h1>${allPartyHalls[i].name}</h1>
                            <p>${allPartyHalls[i].description.slice(0, 50)}...</p>
                            <div class="tags">
                                <div class="tag">${allPartyHalls[i].cost}$</div>
                            </div>
                        </div>
                    </a>
                </div>`
        section.innerHTML += cardbox.trim();
    }
    cc.appendChild(section)
}
createCard()