function notification(sms, email) {
    console.log("Process Starts");
    sms();
    email();
}

notification(function sms() {
    alert('send sms');
},
    function email() {
        alert('send email');
    });

console.log('End process');













