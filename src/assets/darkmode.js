const updateMode = () => {
    const mode = localStorage.getItem('theme')
    if (mode === null) {
        localStorage.setItem("theme", window.matchMedia('(prefers-color-scheme: dark)').matches.toString())
    }

    if (mode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
const changeMode = () => {
    document.documentElement.classList.toggle('dark')
}

document.addEventListener("astro:page-load", (_e) => updateMode())