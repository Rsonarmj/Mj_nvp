
document.addEventListener("DOMContentLoaded", function () {
  fetch("")
    .then(() => {
      const menu = document.getElementById("menu");
      const links = [
        { name: "Home", file: "index.html" },
        { name: "About", file: "about.html" },
        { name: "Gallery", file: "gallery.html" },
        { name: "Contact", file: "contact.html" }
      ];
      menu.innerHTML = links.map(l => `<a href="${l.file}" style="margin-right:10px;">${l.name}</a>`).join("");
    });
});
