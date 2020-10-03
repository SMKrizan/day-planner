// variable to hold array of schedule entries
var schedule = [];
console.log(schedule)

// get today's date & place at top of page
var today = moment().format("dddd, MMMM Do YYYY");
var displayDate = function () {
    $("#currentDay").text(today);
}
displayDate()

// load schedule from local storage and parse into array
var loadSched = function () {
    schedule = localStorage.getItem("schedule");
    console.log(schedule)

    // if nothing has been saved to local storage, discontinue function
    if (!schedule) {
        schedule = [];
        return false
    }

    // parse string back into an array of objects
    schedule = JSON.parse(schedule);
    console.log(schedule)

    // loop through each saved schedule entry to place text within schedule
    for (var i = 0; i < schedule.length; i++) {
        var textEntry = schedule[i].text;
        var hourEntry = "#" + schedule[i].hour
        $(hourEntry).val(textEntry);
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
    var textEntry = $(this).val().trim();

    // get the schedule entry position in the list of other entries
    var hourEntry = $(this)
        .attr("id")

    schedEntry = {
        text: textEntry,
        hour: hourEntry,
    };

    // push entry as an array to 'schedule'
    schedule.push(schedEntry);
    saveSched()
});

// audit schedule entries with reference to current time
var auditSched = function () {
    // establish current time
    currentHour = parseInt(moment().format("H"));

    // calculate difference between schedule entries and current time; my TA helped me to define the string literal enabling this solution to the problem
    for (i=7; i<19; i++) {
        if (currentHour > i) {
            $(`.t${i}`).addClass("past");
        }
        else if (currentHour == i) {
            $(`.t${i}`).addClass("present");
        }
        else if (currentHour < i) {
            $(`.t${i}`).addClass("future");
        }
    };
}
auditSched()

// // calculate difference between schedule entries and current time; this is the code I would prefer to use but could not get it to work. Nevertheless - not ready to dispose of it.
// // audit schedule entries with reference to current time
// var auditSched = function () {
//     // establish current time
//     currentHour = parseInt(moment().format("H"));
//     minutesNow = parseInt(moment().format("m"));
//     // if (minutesNow > 30) {
//     //     currentHour = currentHour + 1;
//     // console.log(currentHour)
    // get time from schedule for comparison
    // var sched = $(".hour");
    // $.each(sched, function () {
    //     var schedHour = $(this).attr("id").substring(1);
    //     schedHour = parseInt(schedHour);
    //     // console.log($(this).attr("id"))
    //     console.log($(this).attr("id").substring(1))

    //     // change classes to affect color-coding
    //     console.log(currentHour)
    //     console.log(schedHour)
    //     if (currentHour > schedHour) {
    //         $(".row").addClass("past");
    //     }
    //     else if (currentHour == schedHour) {
    //         $(".row").addClass("present");
    //     }
    //     else if (currentHour < schedHour) {
    //         $(".row").addClass("future");
    //     }
    // });