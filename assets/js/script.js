// GLOBAL VARIABLES
// variable to hold array of schedule entries
var schedule = {};
// get today's date
var today = moment().format("dddd, MMMM Do YYYY");

// place the day/date at top of page
var displayDate = function () {
    $("#currentDay").text(today);
}
displayDate()

// load schedule from local storage and parse into array
var loadSched = function () {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    // if nothing has been saved to local storage, create a new object to track schedule entries
    if (!schedule) {
        schedule = {
            text: [],
            time: [],
            id: [],
        };
    }

    // loop through entry-object properties
    $.each(schedule, function (list, arr) {
        createEntry(schedule.text, schedule.time, schedule.id);
    });
}
loadSched()

// save schedule entries to local storage
var saveSched = function () {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// click event listener for save buttons
saveEntry = $(".saveBtn").on("click", function () {
})
console.log(saveEntry)
saveSched()

// delegating to parent div element for child textarea element
$(".form-group").on("blur", "textarea", function () {
    // get textarea's current value/text and remove leading/trailing whitespace
    var schedEntry = $(this).val().trim();
    console.log(schedEntry)

    // get the parent row div's id attribute
    var rowId = $(this)
        .closest(".row")
        .attr("id");
    console.log(rowId)

    // get the schedule entry position in the list of other entries
    var index = $(this)
        .closest(".row")
        .index()
    console.log(index)

    // push entry as an array to the object 'schedule'
    schedule.push({
        text: schedEntry,
        time: rowId,
        id: index,
    });
})
saveSched();

// update schedule to show status of entries
var auditSched = function () {
    // determine current time
    var timeNow = moment();
    console.log(timeNow)

}
