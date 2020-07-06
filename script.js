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
            var saveColumnForm = $("<form>");
            saveColumnForm.addClass("col-md-8");
            saveColumnForm.attr("id", "event-form"+ i);
            var saveColumnInput = $("<input>");
            saveColumnInput.attr("type", "text")
            saveColumnInput.attr("id", "event-input" + i)
            hourColumn.append(saveColumnForm);
            saveColumnInput.appendTo(saveColumnForm);

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
            $("#event-form8").text(localStorage.getItem("eventInput8")); 
        })
        hourColumn.delegate("#save-button9", "click", function() {
            var eventInput9 = $(":text");
            localStorage.setItem("eventInput9", eventInput9.val());
            $("#event-form9").text(localStorage.getItem("eventInput9")); 
        })
        hourColumn.delegate("#save-button10", "click", function() {
            var eventInput10 = $(":text");
            localStorage.setItem("eventInput10", eventInput10.val());
            $("#event-form10").text(localStorage.getItem("eventInput10")); 
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