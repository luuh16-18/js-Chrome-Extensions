
let number = getRandomNumber(22)

function getRandomNumber(number) {
    let max = number+1
    return Math.floor(Math.random() * Math.floor(max))
}

chrome.runtime.onMessage.addListner((msg, sender, response) => {

    if(msg.name == "fetchWords"){

        const apiKey = 'The Api KEy'
        const dateStr = new Date().toISOString().slice(0, 10)
        const apiCall = 'https://ap.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey
    
        const wordsObj = [
            "assiduous",
            "flanconade",
            "perihelion",
            "surimono",
            "braille",
            "needfire",
            "grandiose",
            "histrionic",
            "rhapsodic",
            "balderdash",
            "declamatory",
            "euphuistic",
            "magniloquent",
            "inflated",
            "rhetorical",
            "fustian",
            "highfalutin",
            "orotund",
            "ostentatious",
            "ranting",
            "overblown",
            "loudmouthed",
            "highflown"
        ]
        const wordsDesObj = [
            "showing great care and perseverance.",
            "a bind in fencing that terminates in a thrust under the adversary's arm.",
            "the point in the orbit of a planet, asteroid, or comet at which it is closest to the sun.",
            "A kind of Japanese woodblock print, privately commissioned for special occasions such as the New Year.",
            "a form of written language for blind people, in which characters are represented by patterns of raised dots that are felt with the fingertips",
            "a purificatory fire traditionally kindled usually by friction of dry wood in time of distress (as during a cattle plague) in the belief that it would ward off evil spirits",
            "characterized by affectation of grandeur or splendor or by absurd exaggeration",
            " deliberately affected : overly dramatic or emotional :",
            "extravagantly emotiona.",
            "senseless talk or writing; nonsense.",
            "vehement or impassioned in expression.",
            "1 : an elegant Elizabethan literary style marked by excessive use of balance, antithesis, and alliteration and by frequent use of similes drawn from mythology and nature 2 : artificial elegance of language.",
            " speaking in or characterized by a high-flown often bombastic style or manner.",
            "1: distended with air or gas 2: expanded to an abnormal or unjustifiable volume or level 3: elaborated or heightened by artificial or empty means 4: being hollow and enlarged or distended.",
            "relating to or concerned with the art of rhetoric.",
            "a strong cotton and linen fabric.",
            "1: pretentious, fancy 2: expressed in or marked by the use of language that is elaborated or heightened by artificial or empty means.",
            "marked by fullness, strength, and clarity of sound :",
            "attracting or seeking to attract attention, admiration, or envy often by gaudiness or obviousness : overly elaborate or conspicuous : characterized by, fond of, or evincing ostentation.",
            " to talk in a noisy, excited, or declamatory manner.",
            "past the prime of bloom.",
            ": given to loud offensive talk.",
            "(especially of language or ideas) extravagant and grand-sounding."
        ]


        let number = rand(0, 21)

        response({
            word: wordsObj[number], desc: wordsDesObj[number]
        })
    }
})