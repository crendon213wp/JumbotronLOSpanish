// Hide the Other Amount text
$('#buttons input').hide();
// When the button is pressed
$('#buttons .other-button').on('click',function () {
    // Show Other Amount Text
    $('#buttons input').show();
});