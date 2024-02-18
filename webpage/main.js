// assign button functions to variable
const fortuneBtn = document.getElementById("fortuneCookie")
const drawCardBtn = document.getElementById("deckOfCards")
const getSeatBtn = document.getElementById("seatAssignment")
const drinkListBtn = document.getElementById("drinkMenu")
const seeAllBtn = document.getElementById("allAttendee")
const rsvpBtn = document.querySelector("rsvpForm")

//axios requests
const showAllAttendees = () => {
    axios.get(`http://localhost:4040/api/attendees`)
        .then(res => {
            
        })
}


//add event listeners
seeAllBtn.addEventListener("click", showAllAttendees)