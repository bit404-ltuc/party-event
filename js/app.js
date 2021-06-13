/* eslint-disable new-cap */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
let allPartyHalls = [];

function newPartyHalls(name, imgPath, description, cost,dates, address) {
    this.name = name,
        this.imgPath = imgPath,
        this.description = description,
        this.cost = cost,
        this.dates = dates,
        this.address = address
    allPartyHalls.push(this)
    savingPartyHalls()

}
new newPartyHalls('West farm ', '../img/wastfarm.jpg', 'Creating  your wedding In West farm mean a whole lot of time outdoors, walking in the sunshine   in our West farm you can create a great party. ', 2500, ['15/6/2021', '18/6/2021', '19/6/2021','26/6/2021'],'Location : Amman - Airport area -street 10 near ltuc university ')
new newPartyHalls('South farm  ', '../img/southfarm.jpg', 'Creating  your wedding In South farm mean a whole lot of time outdoors, walking in the sunshine   in our West farm you can create a great party. ', 2700, ['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman - Airport area -street 10 near ltuc university ')
new newPartyHalls('Dead sea', '../img/deadsee.jpg', 'A beach wedding at the height of summer calls for creative ways to help guests beat the heat. In our location in dead see you can create a great party with special services',3500,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Dead sea - panorama dead sea complex')
new newPartyHalls('Aqaba hotel', '../img/aqabahotel.jpg', 'A beach wedding at the height of summer calls for creative ways to help guests beat the heat. In our location in dead see you can create a great party with special services',3700,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Aqaba- Airport area -street 10 near Jordan collage')
new newPartyHalls('West hotel', '../img/westhotel.jpg', 'a hotel is a great location for a party. Some people may think a hotel would be too expensive, but the cost can actually be the same as renting or booking other types of venues .We have a  West hotel option of Wedding Hotels Destinations in Amman . ',4000,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10 ')
new newPartyHalls('South hotel', '../img/southhotel.jpg', 'a hotel is a great location for a party. Some people may think a hotel would be too expensive, but the cost can actually be the same as renting or booking other types of venues.. We have a  South hotel as an option for Wedding Hotels Destinations in Amman .',4200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')

new newPartyHalls('Happy farm', '../img/happyfarm.jpg', 'Graduation is fast approaching, and you are starting to wonder if you have everything ready. If this is your first time throwing a graduation party, you may be feeling a bit underprepared. To make sure you have everything you need and you get everything done in time, you can book to create your party in Happy farm.',1500,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Happy land farm', '../img/happyland.jpg', 'Graduation is fast approaching, and you are starting to wonder if you have everything ready. If this is your first time throwing a graduation party, you may be feeling a bit underprepared. To make sure you have everything you need and you get everything done in time, you can book to create your party in Happy land farm.',1200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Geen Restaurant ', '../img/greenrestaurnt.jpg','a restaurant is a great location for graduation  , you can book in this our beautiful place At geen Restaurant ',900,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('West land farm.', '../img/greenrestaurnt.jpg','a restaurant is a great location for graduation  , you can book in this our beautiful place At geen Restaurant ',900,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Big farm', '../img/bigfarm.jpg', 'Graduation is fast approaching, and you are starting to wonder if you have everything ready. If this is your first time throwing a graduation party, you may be feeling a bit underprepared. To make sure you have everything you need and you get everything done in time, you can book to create your party in Happy land farm.',1200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Blue Restaurant ', '../img/westlandparty.jpg','a restaurant is a great location for graduation  , you can book in this our beautiful place At west land farm',2500,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')

new newPartyHalls('Blue Sky ', '../img/bluesky.jpg','In Blue sky  farm  you can create  maybe the perfect birthday celebration. A farm birthday party is a great way to be creative with farm party food ideas, ',250,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Colorful place ', '../img/colorful.jpg','Are you trying to do something special for a birthday but dont have space? Throwing a party at a restaurant is a great way to bring large groups together for the ultimate celebration. Blue sky restaurant is the best place to do this type of party',200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Pink place ', '../img/pink.jpg','Are you trying to do something special for a birthday but dont have space? Throwing a party at a restaurant is a great way to bring large groups together for the ultimate celebration. Orange restaurant is the best place to do this type of party',200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Orange place ', '../img/orange.jpg','In Orange  farm  you can create  maybe the perfect birthday celebration. A farm birthday party is a great way to be creative with farm party food ideas, ',200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Red flower ', '../img/redflower.jpg','Are you trying to do something special for a birthday but dont have space? Throwing a party at a restaurant is a great way to bring large groups together for the ultimate celebration.red flower  restaurant is the best place to do this type of party',200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')
new newPartyHalls('Red flower farm ','../img/redflowerfarm.jpg', 'In Red flower farm  you can create  maybe the perfect birthday celebration. A farm birthday party is a great way to be creative with farm party food ideas, ',200,['15/6/2021','16/6/2021','17/6/2021','18/6/2021','19/6/2021', '20/6/2021', '21/6/2021','26/6/2021'],'Location : Amman- Airport area -street 10')




function savingPartyHalls() {
    let convertedArr = JSON.stringify(allPartyHalls);
    localStorage.setItem('PartyHalls', convertedArr);
}