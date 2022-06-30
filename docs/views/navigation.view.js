import { makeHomeView } from "./home.view.js";
import { makePortfolioView } from "./portfolio.view.js";
import { renderView } from "./view.utils.js";
const NAV_ITEMS = [["Home", makeHomeView], ["Portfolio", makePortfolioView]];
export function makeNavView() {
    const wrapper = document.createElement("div");
    NAV_ITEMS.forEach((navItem) => {
        const navLink = makeNavLink(...navItem);
        wrapper.appendChild(navLink);
    });
    return wrapper;
}
function makeNavLink(label, viewFn) {
    const link = document.createElement("a");
    link.textContent = label;
    link.addEventListener("click", handleNavClick(viewFn));
    link.setAttribute("style", "padding: 2px; text-decoration: underline; cursor: pointer");
    return link;
}
function handleNavClick(viewFn) {
    return function (event) {
        event.preventDefault();
        renderView(viewFn());
    };
}
//# sourceMappingURL=navigation.view.js.map