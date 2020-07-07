$(document).ready(function() {
    //Generate current time
    // var date = new Date();
    var date = moment().format('dddd');
    var hour = moment().format('HH');
    var minutes = moment().format('mm');
    $("#currentDay").text(date + "  " + hour + ":" + minutes);

    // Generate Hours
    var hourColumn = $("#row-event");

    function rowEvent() {
        for(var i = 8; i <= 18; i++) {
        
            var hourColumnCard = $("<div>");
            hourColumnCard.addClass("col-md-2 card");
            hourColumnCard.attr("id", "hour-card");
            hourColumnCard.text(i + ":00");
            hourColumn.append(hourColumnCard);
            var saveColumnForm = $("<form>");
            saveColumnForm.addClass("col-md-8 form");
            saveColumnForm.attr("id", "event-form"+ i);
            var saveColumnInput = $("<input>");
            saveColumnInput.addClass("col-md-8 input");
            saveColumnInput.attr("type", "text")
            saveColumnInput.attr("id", "event-input" + i)

            var storageSpace = localStorage.getItem("eventInput" + i);
            console.log(storageSpace);
            $(saveColumnInput).val(storageSpace);  
            saveColumnInput.appendTo(saveColumnForm);
            hourColumn.append(saveColumnForm);
            

            var saveColumnButton = $("<button>");
            saveColumnButton.addClass("col-md-2 button");
            saveColumnButton.attr("id", "save-button" + i);
            saveColumnButton.attr("value", i);
            saveColumnButton.text("Save");
            hourColumn.append(saveColumnButton);

            saveButton(); 
            
        }  
    
    }

    function saveButton() {
        hourColumn.delegate("#save-button8", "click", function() {
            var eventInput8 = $("#event-form8 :text");
            localStorage.setItem("eventInput8", eventInput8.val()); 
        })
        hourColumn.delegate("#save-button9", "click", function() {
            var eventInput9 = $("#event-form9 :text");
            localStorage.setItem("eventInput9", eventInput9.val());
            $("#event-form9 :text").text(localStorage.getItem("eventInput9")); 
        })
        hourColumn.delegate("#save-button10", "click", function() {
            var eventInput10 = $("#event-form10 :text");
            localStorage.setItem("eventInput10", eventInput10.val());
            $("#event-form10 :text").text(localStorage.getItem("eventInput10")); 
        })
        hourColumn.delegate("#save-button11", "click", function() {
            var eventInput11 = $("#event-form11 :text");
            localStorage.setItem("eventInput11", eventInput11.val());
            $("#event-form11 :text").text(localStorage.getItem("eventInput11")); 
        })
        hourColumn.delegate("#save-button12", "click", function() {
            var eventInput12 = $("#event-form12 :text");
            localStorage.setItem("eventInput12", eventInput12.val());
            $("#event-form12 :text").text(localStorage.getItem("eventInput12")); 
        })
        hourColumn.delegate("#save-button13", "click", function() {
            var eventInput13 = $("#event-form13 :text");
            localStorage.setItem("eventInput13", eventInput13.val());
            $("#event-form13 :text").text(localStorage.getItem("eventInput13")); 
        })
        hourColumn.delegate("#save-button14", "click", function() {
            var eventInput14 = $("#event-form14 :text");
            localStorage.setItem("eventInput14", eventInput14.val());
            $("#event-form14 :text").text(localStorage.getItem("eventInput14")); 
        })
        hourColumn.delegate("#save-button15", "click", function() {
            var eventInput15 = $("#event-form15 :text");
            localStorage.setItem("eventInput15", eventInput15.val());
            $("#event-form15 :text").text(localStorage.getItem("eventInput15")); 
        })
        hourColumn.delegate("#save-button16", "click", function() {
            var eventInput16 = $("#event-form16 :text");
            localStorage.setItem("eventInput16", eventInput16.val());
            $("#event-form16 :text").text(localStorage.getItem("eventInput16")); 
        })
        hourColumn.delegate("#save-button17", "click", function() {
            var eventInput17 = $("#event-form17 :text");
            localStorage.setItem("eventInput17", eventInput17.val());
            $("#event-form17 :text").text(localStorage.getItem("eventInput17")); 
        })
        hourColumn.delegate("#save-button18", "click", function() {
            var eventInput18 = $("#event-form18 :text");
            localStorage.setItem("eventInput18", eventInput18.val());
            $("#event-form18 :text").text(localStorage.getItem("eventInput18")); 
        })
    }
    
    function printStorage () {
        $("#event-form8 :text").text(localStorage.getItem("eventInput8"));

    }
    rowEvent();
    printStorage();
    
    
});