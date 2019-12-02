function populateList(array_param, target_elem) {
    for (let i = 0; i < array_param.length; i++) {
        let new_item = document.createElement("LI");
        let item_text = document.createTextNode(array_param[i]);
        new_item.appendChild(item_text);
        document.querySelector(target_elem).appendChild(new_item);
    }
}

function emptyContainer(target_elem_id) {
    let content_html = document.querySelector(target_elem_id);
    while (content_html.firstChild) {
        content_html.removeChild(content_html.firstChild);
    }
}

function idElemCreator(created_elemType, created_elemID, target_container) {
    let content_html = document.querySelector(target_container);
    let new_list = document.createElement(created_elemType);
    new_list.setAttribute("id", created_elemID);
    new_list.setAttribute("padding", "0px 25px");
    content_html.appendChild(new_list);
}

function loadData() {
    emptyContainer(".content");
    idElemCreator("OL", "course-list", ".content");
    console.log('fetch'); // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
            // for (let i=0; i < 10; i++) {
            //     mainDB.create(res.data.data[i][8],
            //         res.data.data[i][9],
            //         res.data.data[i][10],
            //         res.data.data[i][11],
            //         res.data.data[i][12]);
            //
            // }
            console.log(res)
        });
}

