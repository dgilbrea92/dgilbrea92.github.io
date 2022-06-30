import { makeHomeView } from "./views/home.view.js"
import { renderView } from "./views/view.utils.js"

function init() {
    const navSection = document.getElementById("section-nav")

    const homeView = makeHomeView()
    renderView(homeView)
}

init()
