
function togglePortal(portal) {
    const body = portal.querySelector('.body');
    const h5 = portal.querySelector('h5');
    if (body && h5) {
       if(body.style.display == "none")
       {
         portal.classList.remove("arrow-down");
         portal.classList.remove("arrow-right");
         portal.classList.add("arrow-down");
         body.style.display = "block"
       }
       else
       {
         portal.classList.remove("arrow-down");
         portal.classList.remove("arrow-right");
         portal.classList.add("arrow-right");
         body.style.display = "none"
       }
    }
 }
 document.addEventListener("DOMContentLoaded", function () {
   const portals = document.querySelectorAll('.portal');
   let oLastModif = new Date(document.lastModified);
   let nFullDate = oLastModif.toLocaleDateString();
   let string = "This page was last modified on ";
   let message = string.concat("", nFullDate);

   document.getElementById("footer-info-lastmod").innerHTML = message;

    portals.forEach(function (portal) {
       
       portal.querySelector('.body').style.display = "none"
       portal.classList.add("arrow-right");
       portal.addEventListener('click', function () {
          portal.classList.toggle("expanded");
          togglePortal(portal);
       });
    });
 });
