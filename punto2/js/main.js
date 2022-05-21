function cargarTabla() {
    let tbody = document.querySelector("#bodyData");

    fetch("https://rickandmortyapi.com/api/character?status=alive")
        .then((respuesta) => respuesta.json())
        .then((data) => {
        let rowData = data.results
            .map((item) => {
            return `<tr>
                <td>${item.name}</td>
                <td><img src="${item.image}" class="imgapi"></td>
                <td>${item.status}</td>
            </tr>`;
        })
        .join("");
        tbody.innerHTML = rowData;
    });
}
cargarTabla();