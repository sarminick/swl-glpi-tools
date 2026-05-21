document.addEventListener("DOMContentLoaded", function () {

   // document.querySelector('.container-tight').style.maxWidth = '35rem';
   const loginForm = document.querySelector("form[action*='login']");
   const faviconLink = document.querySelector("link[rel='shortcut icon']");

   if (faviconLink) {
      faviconLink.href = "/pics/favicon-swisslub-white.png";
   }
   
   if (loginForm) {
        const divTitle = document.createElement("div");

        divTitle.classList.add("content-login-title");

        divTitle.innerHTML = "<img src='https://swisslub.com/wp-content/uploads/2026/04/new-logo-1.png'>";

      loginForm.parentNode.insertBefore(divTitle, loginForm);
   }
});

console.log("Custom JS cargado");
