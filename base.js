
function togglePortal(portal) {
    const body = portal.querySelector('.body');
    const h5 = portal.querySelector('h5');
    if (body && h5) {
       if(body.style.display == "none")
       {
          body.style.display = "block"
          
          h5.style.backgroundImage = "url('img/arrow-down.png')"; 
          h5.style.backgroundRepeat = "no-repeat";
       }
       else
       {
          body.style.display = "none"
          
          h5.style.backgroundRepeat = "no-repeat";
          h5.style.backgroundImage = "url('img/arrow-right.png')"; 
       }
    }
 }
 document.addEventListener("DOMContentLoaded", function () {
    const portals = document.querySelectorAll('.portal');

    portals.forEach(function (portal) {
       
       portal.querySelector('.body').style.display = "none"
       portal.addEventListener('click', function () {
          portal.classList.toggle("expanded");
          togglePortal(portal);
       });
    });
 });