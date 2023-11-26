document.addEventListener("DOMContentLoaded", function() {
  const layers = document.querySelectorAll('.layer');

  document.getElementById('popup-container').addEventListener('click', function(event) {
    if (event.target === this) {
      closePopup();
    }
  });

  layers.forEach(function(layer) {
    layer.addEventListener('mouseover', function() {
      changeContent(layer);
    });

    layer.addEventListener('mouseout', function() {
      restoreContent(layer);
    });
  });
});

function changeContent(element) {
  var layerNumber = element.id.slice(-1);

  switch (layerNumber) {
    case '1':
      element.querySelector('p').innerText = 'Meet our dynamic team members who played key roles in making the Website a success.';
      break;
    case '2':
      element.querySelector('p').innerText = 'Join us in celebrating our successful Hour of Code event that took place in BSB on October 27th.';
      break;
    case '3':
      element.querySelector('p').innerText = 'Click to see our progress throughout the making of the website.';
      break;
    default:
      break;
  }
}

function restoreContent(element) {
  var layerNumber = element.id.slice(-1);

  switch (layerNumber) {
    case '1':
      element.querySelector('p').innerText = 'TEAM MEMBERS';
      break;
    case '2':
      element.querySelector('p').innerText = 'HOUR OF CODE';
      break;
    case '3':
      element.querySelector('p').innerText = 'WEBSITE';
      break;
    default:
      break;
  }
}

function showPopup() {
  document.getElementById('popup-container').style.display = 'flex';
  document.body.style.overflow = 'hidden'; 
}

function closePopup() {
  document.getElementById('popup-container').style.display = 'none';
  document.body.style.overflow = 'visible'; 
}
