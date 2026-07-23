import "./style.css";
import { loadPage } from "./scripts/router";

loadPage("home")

const links = document.querySelectorAll<HTMLAnchorElement>("[data-page]")

links.forEach(link => {
    link.addEventListener("click", (event) => {

        event.preventDefault()

        const page = link.dataset.page;

        if(page){
            loadPage(page)
        }
    })
})