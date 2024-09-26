function loadData() {
    $.ajax({
        type: "GET",
        url: "projects.xml",     // The URL to which the request is sent. In this case, it’s the path to the XML file.
        dataType: "xml",
        // Sends an HTTP GET request to fetch mov.xml from server(local or any) and expects server response in an XML format.
        success: function (xml) {
            let projects_arr = [];

            $(xml).find('projects').each(function () {
                const title = $(this).find('title').text();    // innerText        
                const time = $(this).find('time').text();
                const desc = $(this).find('desc').text();

                projects_arr.push({ title, time, desc });
            });

            projects_arr.forEach(i =>  {
                $('.left').append(`
                    <p>${i.time}<p>
                    `);
                $('.right').append(`
                    <div class="title">${i.title}</div>
                    <div class="content">${i.desc}</div>
                    `);
            });      
        },
        error: function () {
            alert("Oye;")
        }
    });
};

$(document).ready(function () {
    loadData();
});
