function toggleDetails(memberId) {
    var details = document.getElementById(memberId).getElementsByClassName("details")[0];
    details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
}
