$().ready(() => {
    fetch('../nav.html')
        .then(response => response.text())
        .then((data) => {
            $(".nav").replaceWith(data);
        });
});
console.log(window.location.pathname);


switch (window.location.pathname) {
    case "/":
    case "/index.html":
        $("#home").addClass('active').attr("aria-current", "page");
        break
    case "/about.html":
        $("#about").addClass('active').attr("aria-current", "page");

        break;
    case "/projects.html":
        $("#projects").addClass('active').attr("aria-current", "page");

        break;
    case "/accomplishments.html":
        $("#accomplishments").addClass('active').attr("aria-current", "page");

        break;
    case "/resume.html":
        $("#resume").addClass('active').attr("aria-current", "page");

        break;
    case "/contact.html":

        break;
    default:
        break;
}