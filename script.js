$(document).ready(function() {

    // Generate Hours
    var hourColumn = $("#row-event");


    function rowEvent() {
        for(var i = 8; i <= 18; i++) {
            console.log(i);
            
            var hourColumnCard = $("<div>");
            hourColumnCard.addClass("col-md-2", "card");
            hourColumnCard.text(i + ":00");
            hourColumn.append(hourColumnCard);

            var saveColumnInputCard = $("<input>");
            saveColumnInputCard.addClass("col-md-8");
            hourColumn.append(saveColumnInputCard);

            var saveColumnButton = $("<button>");
            saveColumnButton.addClass("col-md-2");
            saveColumnButton.text("Save");
            hourColumn.append(saveColumnButton);
        }
    };

    rowEvent();
});