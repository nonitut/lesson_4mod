document.addEventListener("DOMContentLoaded", function(){
    let count = 2;
    let table_button = document.querySelector(".table_button");

    table_button.addEventListener("click", function(){
        let week = document.querySelector("input[name='week']").value;
        let name_of = document.querySelector("input[name='name_of']").value;
        let date = document.querySelector("input[name='date']").value;
        let disc = document.querySelector("select[name='disc']").value;
        let type = document.querySelector("select[name='type']").value;

        let newrow = document.createElement("tr");
        newrow.innerHTML = `
                <td>${week}</td>
                <td>${name_of}</td>
                <td>${date}</td>
                <td><span class="sp_red">${disc}</span></td>
                <td><span class="sp_green">${type}</span></td>
                <td></td>
        `
        let tbody = document.querySelector("table tbody");
        tbody.appendChild(newrow);
        count++

        document.querySelector("input[name='week']").value = "";
        document.querySelector("input[name='name_of']").value = "";
        document.querySelector("input[name='date']").value = "";
        document.querySelector("select[name='disc']").selectedIndex = 0;
        document.querySelector("select[name='type']").selectedIndex = 0;
    });
});