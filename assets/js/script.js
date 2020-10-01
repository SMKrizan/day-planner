
// delegating click listener to parent div element for child textarea element
$(".form-group").on("click", "textarea", function () {
    console.log("the schedule entry textarea was clicked");
    // get inner text content of current element and remove leading/trailing whitespace
    var entry = $(this).text().trim();
    console.log(entry);

})