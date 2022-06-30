import { makeHomeView } from './home.view';
import { makePortfolioView } from './portfolio.view';
import { renderView } from './view.utils';
import { ViewFn } from './views.types';

type NavItem = [label: string, viewFn: ViewFn];

const NAV_ITEMS: NavItem[] = [
    ['Home', makeHomeView],
    ['Portfolio', makePortfolioView],
];

export function makeNavView(): HTMLDivElement {
    const wrapper = document.createElement('div');

    NAV_ITEMS.forEach((navItem) => {
        const navLink = makeNavLink(...navItem);
        wrapper.appendChild(navLink);
    });

    return wrapper;
}

function makeNavLink(label: string, viewFn: ViewFn): HTMLAnchorElement {
    const link = document.createElement('a');

    link.textContent = label;
    link.addEventListener('click', handleNavClick(viewFn));
    link.setAttribute(
        'style',
        'padding: 2px; text-decoration: underline; cursor: pointer'
    );

    return link;
}

function handleNavClick(viewFn: ViewFn): (event: MouseEvent) => void {
    return function (event: MouseEvent) {
        event.preventDefault();
        renderView(viewFn());
    };
}
