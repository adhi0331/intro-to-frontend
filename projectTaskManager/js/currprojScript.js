function currProjects() {
    let mainContainer = document.querySelector(".container")
    let gobackbtn = document.querySelector("#gobackbtn")

    let homeHTML = "html-snippets/homepage.html";

    let currProjects = []

    console.log(projects)
    
    let getRequestObject = function() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest);
        }
        else if (window.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            window.alert("Ajax is not supported!");
            return null;
        }
    }

    let sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
        var newRequest = getRequestObject();
        newRequest.onreadystatechange = function() {
            handleResponse(newRequest, responseHandler, isJsonResponse);
        };
        newRequest.open("GET", requestUrl, true);
        newRequest.send(null);
    }

    let handleResponse = function(request, responseHandler, isJsonResponse) {
    if ((request.readyState == 4) && (request.status == 200)) {


        // Default to isJsonResponse = true
        if (isJsonResponse == undefined) {
            isJsonResponse = true;
        }
        if (isJsonResponse) {
            responseHandler(JSON.parse(request.responseText));
        }
        else {
            responseHandler(request.responseText);
        }
    }
    }

    function loadHomeHTML() {
        sendGetRequest(homeHTML, function(homePageHTML){innerHTML(mainContainer, homePageHTML)}, false)
    }

     /* function for changing inner html*/
     function innerHTML(targetElem, html) {
        targetElem.innerHTML = html;
    };

    gobackbtn.addEventListener("click", function() {
        loadHomeHTML()
        setTimeout(homeScript, 1000)
    })

    function getProjects() {
        for(var i = 0; i < projects.length; i++){
            let project = JSON.parse(localStorage.getItem(projects[i]))
            project.push(projects[i])
            currProjects.push(project)
        }
        console.log(currProjects)
    }

    // Create a function that will load a list of all current projects
    function loadProjects() {
        
    }

}