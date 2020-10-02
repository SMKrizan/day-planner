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
    schedule = JSON.parse(localStorage.getItem("schedule"));
    console.log(schedule)

    for (var i=0; i<schedule.length; i++) {
        var savedId = "'#" + schedule[i].id + "'";
        var savedText = schedule[i].text;
        $(savedId).val(savedText)
    }
    console.log($(savedId).val(savedText))

    // if nothing has been saved to local storage, create a new object to track schedule entries
    if (!schedule) {
        schedule = {
            text: [],
            id: [],
        };
    }

}
loadSched()

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
    var schedEntry = $(this).val().trim();
    console.log(schedEntry)

    // get the schedule entry position in the list of other entries
    var hourEntry = $(this)
        .attr("id")
    console.log(hourEntry)
    
    // push entry as an array to 'schedule'
    schedule.push({
        text: schedEntry,
        id: hourEntry,
    });
    saveSched()
});


// update schedule to show status of entries
var auditSched = function () {
    // determine current time
    var timeNow = moment();
    console.log(timeNow)
}
