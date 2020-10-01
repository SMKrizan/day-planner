// variable to hold array of schedule entries
var schedule = {};

// get today's date
var today = moment().format("dddd, MMMM Do YYYY");
console.log(today)

// place the day/date at top of page
var displayDate = function (today) {   
    // create element to hold date
    var dateH5 = $("<h5>")
        .text(today);

    //append h5 element to parent div on the page
    $(".div.today").append(dateH5);
}
console.log(displayDate)

// delegating to parent div element for child textarea element
$(".form-group").on("blur", "textarea", function () {
    // get textarea's current value/text and remove leading/trailing whitespace
    var schedEntry = $(this).val().trim();
    console.log(schedEntry)

    // get the row div's id attribute
    var rowId = $(this)
    .closest(".row")
    .attr("id");
    console.log(rowId)
})

// create object for schedule entry
// // placeholders for task entries
// schedule[schedEntry][rowId].val = schedEntry;
// console.log(schedule)
// console.log(schedule[schedEntry])
// console.log(schedule[schedEntry].val)
// console.log(schedule[schedEntry][rowId])
// console.log
// // saveSched();

// click event listener for save buttons
$(".saveBtn").on("click", function () {
})

// save schedule entries to local storage
var saveSched = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

// update schedule to show status of entries
var auditSched = function () {
    // determine current time
    var timeNow = moment();
    console.log(timeNow)

}
