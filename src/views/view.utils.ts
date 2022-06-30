export function makeParagraph(text = "") {
    const paragraph = document.createElement("p")
    paragraph.textContent = text
    return paragraph
}

export function renderView(view: HTMLElement) {
    const wrapper = clearMainWrapper()
    wrapper?.appendChild(view)
}

function clearMainWrapper() {
    const wrapper = document.getElementById("section-content")
    wrapper?.childNodes.forEach((childNode) => {
      wrapper.removeChild(childNode)
    })
    return wrapper
}