
let toggle = () => {
    let theme
    if (document.body.getAttribute('data-bs-theme') == 'dark') {
        theme = "light"
    }
    else {
        theme = "dark"
    }
    localStorage.setItem("theme", theme)
    document.body.setAttribute('data-bs-theme', theme)
}
document.getElementById("toggleTheme").addEventListener("input", toggle)

const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
        return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

if (getPreferredTheme() == "dark") {
    document.getElementById("toggleTheme").setAttribute("checked", "")
    toggle()
}