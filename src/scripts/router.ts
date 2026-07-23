export async function loadPage(page: string) {

    const response = await fetch(`/pages/${page}.html`)

    const html = await response.text()

    const content = document.getElementById("content");

    if(!content) return;
    
    content.innerHTML = html;

}