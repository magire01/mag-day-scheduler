$(document).ready(function() {

    // Generate Hours
    var hourColumn = $("#row-event");

    function rowEvent() {
        for(var i = 8; i <= 18; i++) {
            
            var hourColumnCard = $("<div>");
            hourColumnCard.addClass("col-md-2", "card");
            hourColumnCard.attr("id", "hour-card")
            hourColumnCard.text(i + ":00");
            hourColumn.append(hourColumnCard);

            var saveColumnInput = $("<input>");
            saveColumnInput.addClass("col-md-8");
            saveColumnInput.attr("type", "text")
            saveColumnInput.attr("id", "event-input" + i)
            hourColumn.append(saveColumnInput);

            var saveColumnButton = $("<button>");
            saveColumnButton.addClass("col-md-2");
            saveColumnButton.attr("id", "save-button" + i);
            saveColumnButton.attr("value", i);
            saveColumnButton.text("Save");
            hourColumn.append(saveColumnButton);
     
        }    
    }

    function saveButton() {
        hourColumn.delegate("#save-button8", "click", function() {
            var eventInput8 = $(":text");
            localStorage.setItem("eventInput8", eventInput8.val());
        })
        hourColumn.delegate("#save-button9", "click", function() {
            console.log("test9");
        })
    }
    // function saveButton() {
    //     for(var j = 8; j <= 18; j++) {
    //         return j;
    //     }
    //     hourColumn.delegate("#save-button" + j, "click", function() {
    //         console.log("test");
    //     })
    // }
    
    rowEvent();
    saveButton();

    
});