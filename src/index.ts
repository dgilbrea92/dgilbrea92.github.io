import { makeHomeView } from "./views/home.view.js"
import { renderView } from "./views/view.utils.js"
import { makeNavView } from "./views/navigation.view.js"

function init() {
    const navSection = document.getElementById("section-nav")
    const navView = makeNavView()
    navSection?.appendChild(navView)

    const homeView = makeHomeView()
    renderView(homeView)
}

export default init()
