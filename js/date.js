//expected - date
$(document).ready(function(){
    $("#date").flatpickr({
        mode: "range",
        dateFormat: "Y-m-d",
        minDate: "2M",
        maxDate: new Date().fp_incr(30),
    });
});