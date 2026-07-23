import "./style.css";
import { loadPage } from "./scripts/router";

let currentLang = "en"
let currentPage = "home"

renderPage();

const langlinks = document.querySelectorAll<HTMLAnchorElement>("[data-lang]")

langlinks.forEach(link => {
    link.addEventListener("click", () => {
        const lang = link.dataset.lang;

        if(!lang) return;

        currentLang = lang;
        renderPage();
    })
})

const links = document.querySelectorAll<HTMLAnchorElement>("[data-page]")

links.forEach(link => {
    link.addEventListener("click", (event) => {

        event.preventDefault()

        const page = link.dataset.page;

        if(page){
            currentPage = page;
            renderPage();
        }
    })
})

function renderPage(){
    loadPage(currentPage, currentLang)
}