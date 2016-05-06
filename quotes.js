var quotes = {"David Allen": "You can do anything, but not everything",
    "Antoine de Saint-Exupery": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    "Unknown Author": "The richest man is not he who has the most, but he who needs the least.",
    "Wayne Gretzky": "You miss 100 percent of the shots you never take.",
    "Ambrose Redmoon": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
    "Lao-Tze": "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."
}
var quotesArr = [{"David Allen": "You can do anything, but not everything"},
    {"Antoine de Saint-Exupery": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."},
    {"Unknown Author": "The richest man is not he who has the most, but he who needs the least."},
    {"Lao-Tze": "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."}
    ]
$(document).ready(function(){
    $("#quoteBtn").click(function randomQuote() {
        var randomNumber = Math.floor(Math.random() * (quotesArr.length));
        // if (randomNumber == currNumber) {
        // }
        for (var key in quotesArr[randomNumber]) {
            var val = quotesArr[randomNumber][key];
            $("#quoteText").text(val);
            $("#author").text(key);
        }
    });
});

// function randomQuote() {
//     for (var key in quotesArr[2]) {
//         var val = quotesArr[2][key];
//         $("#quoteText").text(val);
//         $("#author").text(key);
//     }
// }