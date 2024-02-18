// storage bank for function used in other server files

let globalID = 2

const attendees = [
    {
        "id": 0,
        "name": "Bride",
        "allergies": "none",
        "partySize": 1
    },
    {
        "id": 1,
        "name": "Groom",
        "allergies": "shellfish",
        "partySize": 1
    }
]

const fortunes = [
    "Good fortune awaits you at the next turn of the road.",
    "Your creativity will lead to great success in the near future.",
    "An unexpected gift will brighten your day.",
    "Opportunities are endless for those who are willing to take risks.",
    "A smile is your passport to a world of happiness.",
    "The best way to predict the future is to create it.",
    "A journey of a thousand miles begins with a single step.",
    "You are destined for greatness; believe in yourself.",
    "Your kindness will bring you joy and fulfillment.",
    "The present moment holds all the power; seize it with confidence."
]

const deckOfCards = [
    [
        "Ace of Hearts",
        "2 of Hearts",
        "3 of Hearts",
        "4 of Hearts",
        "5 of Hearts",
        "6 of Hearts",
        "7 of Hearts",
        "8 of Hearts",
        "9 of Hearts",
        "10 of Hearts",
        "Jack of Hearts",
        "Queen of Hearts",
        "King of Hearts"
    ],
    [
        "Ace of Diamonds",
        "2 of Diamonds",
        "3 of Diamonds",
        "4 of Diamonds",
        "5 of Diamonds",
        "6 of Diamonds",
        "7 of Diamonds",
        "8 of Diamonds",
        "9 of Diamonds",
        "10 of Diamonds",
        "Jack of Diamonds",
        "Queen of Diamonds",
        "King of Diamonds"
    ]
]


module.exports = {
    getAllAttendees: (req, res) => {
        res.status(200).send(attendees)
    }
}