import $ from '../local_modules/jquery/dist/jquery.min'

import GoogleMap from "./GoogleMap"

const googleMap = new GoogleMap()


/* Get ending */

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

/* Modal windows */

document.addEventListener(`DOMContentLoaded`, function () {

    const modalButtons = document.querySelectorAll(`.js-open-modal`)
    const overlay = document.querySelector(`.js-overlay-modal`)
    const body = document.querySelector(`body`)
    const closeButtons = document.querySelectorAll(`.js-modal-close`)

    modalButtons.forEach(function (item) {
        item.addEventListener(`click`, function (e) {
            e.preventDefault()
            // eslint-disable-next-line no-invalid-this
            const modalId = this.getAttribute(`data-modal`)
            const modalElem = document.querySelector(`.modal[data-modal="` + modalId + `"]`)
            modalElem.classList.add(`active`)
            overlay.classList.add(`active`)
            body.classList.add(`faded-content`)
        })
    })

    closeButtons.forEach(function (item) {
        item.addEventListener(`click`, function () {
            const parentModal = item.closest(`.modal`)
            parentModal.classList.remove(`active`)
            overlay.classList.remove(`active`)
            body.classList.remove(`faded-content`)
        })

    })

    document.body.addEventListener(`keyup`, function (event) {
        if (event.code === `Escape`) {
            document.querySelector(`.modal.active`).classList.remove(`active`)
            document.querySelector(`.overlay`).classList.remove(`active`)
            document.querySelector(`body`).classList.remove(`faded-content`)
        }

    }, false)

    overlay.addEventListener(`click`, function () {
        document.querySelector(`.modal.active`).classList.remove(`active`)
        document.querySelector(`body`).classList.remove(`faded-content`)
        overlay.classList.remove(`active`)
    })
})

// Accordion
function accordionInit() {
    const accordions = document.querySelectorAll(`.accordion`)
    if (accordions) {
        // eslint-disable-next-line no-unused-vars
        accordions.forEach(function (item) {
            const accordionOpener = item.querySelectorAll(`.accordion-opener`)
            accordionOpener.forEach(function (link) {
                link.addEventListener(`click`, function (e) {
                    e.preventDefault()
                    if (link.classList.contains(`opened`)) {
                        link.classList.remove(`opened`)
                    } else {
                        link.classList.add(`opened`)
                    }
                })
            })
        })
    }
}


// Tabs
function openTab() {
    const tabLinks = document.querySelectorAll(`.tabs__link`)
    const tabContent = document.querySelectorAll(`.tabs__content`)
    tabLinks.forEach(function (item) {
        item.addEventListener(`click`, function (e) {
            e.preventDefault()
            tabLinks.forEach(function (links) {
                links.classList.remove(`active`)
            })
            tabContent.forEach(function (content) {
                content.classList.remove(`active`)
            })
            const tabsId = item.dataset.tab
            const tabsContentActive = document.getElementById(tabsId)
            tabsContentActive.classList.add(`active`)
            item.classList.add(`active`)
        })
    })
}


/* Init functions */
document.addEventListener(`DOMContentLoaded`, function () {
    openTab()
    accordionInit()
})

// TNS
document.addEventListener(`DOMContentLoaded`, function () {
    if (document.getElementById(`main-slider`)) {
        // eslint-disable-next-line no-unused-vars,no-undef
        const bannerItemsSlider = tns({
            "container": `.main-banners__slider`,
            "autoWidth": false,
            "controls": true,
            "nav": true,
            "navPosition": `bottom`,
            "speed": 400,
            "mouseDrag": true,
            "arrowKeys": true,
        })
    }
})


document.addEventListener(`DOMContentLoaded`, function () {
    if (window.matchMedia(`(max-width: 991.98px)`).matches) {
        // statement
    }
})


/* Jquery test */

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})
