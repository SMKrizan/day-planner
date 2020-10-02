// get today's date & place at top of page
var today = moment().format("dddd, MMMM Do YYYY");
var displayDate = function () {
    $("#currentDay").text(today);
}
displayDate()

// variable to hold array of schedule entries
var schedule = [];

var createSched = function (savedText, savedId) {
    // saved schedule entry text should be placed in the textarea associated with its index upon loading the page
    $("#schedule-entry") = 

    schedule[index].text = text;
  saveSched();
}

// load schedule from local storage and parse into array
var loadSched = function () {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    // if nothing has been saved to local storage, create a new object to track schedule entries
    if (!schedule) {
        schedule = {
            text: [],
            id: [],
        };
    }

    // loop through entry objects
    $.each(schedule, function (list, arr) {
        createSched(schedule.text, schedule.id);
    });
}

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

    // get the schedule entry position in the list of other entries
    var index = $(this)
        .closest(".row")
        .index();
    console.log(index)
    
    // push entry as an array to 'schedule'
    schedule.push({
        text: schedEntry,
        id: index,
    });
    saveSched()
});


// update schedule to show status of entries
var auditSched = function () {
    // determine current time
    var timeNow = moment();
    console.log(timeNow)
}
