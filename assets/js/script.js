var schedule = {};

// click event listener for save buttons
$(".saveBtn").on("click", function () {
})

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

// // placeholders for task entries
// schedule[schedEntry][rowId].val = schedEntry;
// console.log(schedule)
// console.log(schedule[schedEntry])
// console.log(schedule[schedEntry].val)
// console.log(schedule[schedEntry][rowId])
// console.log
// // saveSched();