function toggleDetails(memberId) {
    var allDetails = document.getElementsByClassName("details");

    for (var i = 0; i < allDetails.length; i++) {
        if (allDetails[i].id !== memberId) {
            allDetails[i].style.display = 'none';
        }
    }

    var details = document.getElementById(memberId).getElementsByClassName("details")[0];
    details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
}
