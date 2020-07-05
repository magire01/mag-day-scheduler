$(document).ready(function() {

    // Generate Hours
    var hourColumn = $("#row-event");

    function rowEvent() {
        for(var i = 8; i <= 18; i++) {
            console.log(i);
            
            var hourColumnCard = $("<div>");
            hourColumnCard.addClass("col-md-2", "card");
            hourColumnCard.attr("id", "hour-card")
            hourColumnCard.text(i + ":00");
            hourColumn.append(hourColumnCard);

            var saveColumnInput = $("<input>");
            saveColumnInput.addClass("col-md-8");
            saveColumnInput.attr("id", "event-input" + i)
            hourColumn.append(saveColumnInput);

            var saveColumnButton = $("<button>");
            saveColumnButton.addClass("col-md-2");
            saveColumnButton.attr("id", "save-button" + i);
            saveColumnButton.attr("value", i);
            saveColumnButton.text("Save");
            hourColumn.append(saveColumnButton);
            
            // var saveButton = $("#save-button8");
            hourColumn.delegate("#save-button" + i, "click", function() {
            console.log("test");
            
            function saveButtonClick() {
                hourColumn.delegate("#save-button" + i, "click", function() {
                console.log("test");
                })
            }
            
            saveButtonClick();
            })
        }
        
    }

    function saveButtonClick() {
        hourColumn.delegate("#save-button" + i, "click", function() {
        console.log("test");
        })
    }


    rowEvent();
    

    

    
});