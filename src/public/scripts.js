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
    console.log('DBfetch'); // confirm code is running on click
    fetch('/api')
        .then(res => res.json())
        .then(res => {
                console.log(res)
            }
        );
}


function thenableReturn_arr(input_var, input_arr) {
    input_arr.push(input_var)
}

function fetchSQL(func_param) {
    fetch(`/sqlQuery`, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            param: func_param
        })
    })
        .then(res => res.json())
        .then(res => loadHist(res.data))
}

function loadHist(sql_arr) {
    let chart = new CanvasJS.Chart("content", {
        animationEnabled: true,
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Prince George's County Fiscal Spending"
        },
        subtitles: [{
            text: "In USD",
            fontSize: 16
        }],
        axisY: {
            prefix: "$",
            scaleBreaks: {
                customBreaks: [{
                    startValue: 1000,
                    endValue: 7000
                }]
            }
        },
        data: [{
            type: "column",
            yValueFormatString: "$#,##0.00",
            dataPoints: sql_arr
        }]
    });
    chart.render()
}
