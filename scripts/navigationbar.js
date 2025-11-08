async function load_nav_bar() {
    const response = await fetch("../componements/navigationbar.html");
    const html = await response.text();
    return document.getElementsByClassName("pages_overview")[0];
    
}

function set_index_links(){
    //const link_table = document.getElementsByClassName("pages_overview")[0];
    const link_table2 = load_nav_bar()
    console.log("link Table 2: "+ link_table2)
    //console.log(link_table)
    const links = ["./pages/underconstruction.html"];
    const row = link_table.rows[0];
    for(let i = 1; i < row.cells.length; i++){
        const cell = row.cells[i];
        const text = cell.innerHTML;
        console.log(text)
        cell.innerHTML = `<a href="${links}" target="_blank">${text}</a>`

    }
}