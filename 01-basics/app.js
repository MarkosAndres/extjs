Ext.onReady(function () {
    /*
    Before the confirmation dialog box appeared there was an alert that didn't show up.
    One important thing to keep in mind is that the messages and alerts from the Ext
    library don't block the JavaScript loop, unlike the native browser dialog box. This
    means that if we add another alert or custom message after the confirm method is
    called, we shall not see the confirmation dialog box anymore.
    */
    Ext.Msg.alert("Alert", "We're ready to go!");
    Ext.Msg.confirm("Confirm", "Do you like Ext JS?",
        function (btn) {
            if (btn === "yes") {
                Ext.Msg.alert("Great!", "This is great!");
            } else {
                Ext.Msg.alert("Really?", "That's too bad.");
            }
        });
});