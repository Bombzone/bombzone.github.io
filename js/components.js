$().ready(() => {
    fetch('../nav.html')
        .then(response => response.text())
        .then((data) => {
            $(".nav").replaceWith(data);
        });
});
console.log(window.location.pathname);


switch (window.location.pathname.split(".")[0].toLowerCase()) {
    case "/":
    case "/index":
        $("#home").addClass('active').attr("aria-current", "page");
        break
    case "/about":
        $("#about").addClass('active').attr("aria-current", "page");

        break;
    case "/projects":
        $("#projects").addClass('active').attr("aria-current", "page");

        break;
    case "/accomplishments":
        $("#accomplishments").addClass('active').attr("aria-current", "page");

        break;
    case "/resume":
        $("#resume").addClass('active').attr("aria-current", "page");

        break;
    case "/contact":
        $("#contact").addClass('active').attr("aria-current", "page");

        break;
    default:
        break;
}