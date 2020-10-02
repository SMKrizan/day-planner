// variable to hold array of schedule entries
var schedule = [];

// get today's date & place at top of page
var today = moment().format("dddd, MMMM Do YYYY");
var displayDate = function () {
    $("#currentDay").text(today);
}
displayDate()

// load schedule from local storage and parse into array
var loadSched = function () {
    var savedSched = localStorage.getItem("schedule");

    // if nothing has been saved to local storage, discontinue function
    if (!savedSched) {
        return false
    }

    // parse string back into an array of objects
    savedSched = JSON.parse(savedSched);
    console.log(savedSched)
    
    // loop through each saved schedule entry to place text within schedule
    for (var i=0; i<savedSched.length; i++) {
        console.log(savedSched[i].text)
        var textEntry = savedSched[i].text;
        console.log(savedSched[i].hour)
        var hourEntry = "#" + savedSched[i].hour;
        console.log(hourEntry)
        console.log(textEntry)
        $("hourEntry").val("textEntry");
        console.log($("hourEntry").val("textEntry"))
    }
}
loadSched()

var updateEntries = function (savedSched) {

}

// save schedule entries to local storage
var saveSched = function () {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// click event listener for save buttons
saveEntry = $(".saveBtn").on("click", function () {
    saveSched()
})

// delegating to parent div element for child textarea element
$(".form-group").on("blur", "textarea", function () {
    // get textarea's current value/text and remove leading/trailing whitespace
    var textEntry = $(this).val().trim();
    console.log(textEntry)

    // get the schedule entry position in the list of other entries
    var hourEntry = $(this)
        .attr("id")
    console.log(hourEntry)

    schedEntry = {
        text: textEntry,
        hour: hourEntry,
    };
    console.log(schedEntry)
    
    // push entry as an array to 'schedule'
    schedule.push(schedEntry);
    console.log(schedule)
    saveSched()
});

// // audit schedule entries with reference to current time
// auditSched = function {
//     // establish current time
//     var timeNow = moment();
//     console.log(timeNow)


//     // get time from schedule entry
//     var 
//     // calculate difference between time of entry and current time

//     // remove any old classes from associated schedule entry

//     // apply new class if needed
// }
