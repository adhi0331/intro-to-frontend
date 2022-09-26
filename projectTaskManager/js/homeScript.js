let projects = []

function homeScript() {
    let mainContainer = document.querySelector(".container")
    let userInputbtn = document.querySelector("#userInputbtn")
    let workOnProjectbtn = document.querySelector("#workProjectsbtn")

    let addProjectsnippet = "html-snippets/addproject.html";
    let workOnProjectsnippet = "html-snippets/workonproject.html";


    /* getRequestObject, sendGetRequest, handleResponse functions code 
    from Yaakov Chaivin from HTML/CSS/Javascript Course on coursera */

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

    /* function for changing inner html*/
    function innerHTML(targetElem, html) {
        targetElem.innerHTML = html;
    };

    userInputbtn.addEventListener("click", function() {
        sendGetRequest(addProjectsnippet, function(newPageHTML){innerHTML(mainContainer, newPageHTML)}, false) 
        setTimeout(addScript, 1000)
    })

    currentProjectsbtn.addEventListener("click", function() {
        sendGetRequest(currProjectssnippet, function(newPageHTML){innerHTML(mainContainer, newPageHTML)}, false)
        setTimeout(currProjects, 1000)
    })

    workOnProjectbtn.addEventListener("click", function() {
        sendGetRequest(workOnProjectsnippet, function(newPageHTML){innerHTML(mainContainer, newPageHTML)}, false)
        setTimeout(workOnProject, 1000)
    })
 // here is a change

}

homeScript()













