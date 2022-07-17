function addScript() {
    let mainContainer = document.querySelector(".container")
    let addMilestonebtn = document.querySelector("#addMilestonebtn")
    let addProjectbtn = document.querySelector("#addProjectbtn")
    let goBackbtn = document.querySelector("#goBackbtn")

    let homeHTML = "html-snippets/homepage.html";

    let mileStones = []

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

    function loadHomeHTML() {
        sendGetRequest(homeHTML, function(homePageHTML){innerHTML(mainContainer, homePageHTML)}, false)
    }

     /* function for changing inner html*/
     function innerHTML(targetElem, html) {
        targetElem.innerHTML = html;
    };

    /* Load the homeHTML, wait 1 sec then run homeScript */
    goBackbtn.addEventListener("click", function() {
        
    })

    addMilestonebtn.addEventListener("click", function() {
        let mileStoneName = document.querySelector("#milestone-el").value 
        let mileStoneDate = document.querySelector("#milestoneDate-el").value
        /* Add milestone objects to the milestone array */
        if(mileStoneName != "" && mileStoneDate != ""){
            
        }
        /* List milestones in the ul tag of addproject.html snippet */
        if(mileStones.length != 0){
            
        }
    })

    addProjectbtn.addEventListener("click", function() {
        let projectName = document.querySelector("#name-el").value
        let projectDate = document.querySelector("#completionDate-el").value
        
        /* Add projectDate to the end milestone, add project to local storage,
        reset milestones, and loadHomeHTML */
        if(projectName != "" && projectDate != "" && mileStones.length != 0){
    
        }
    })
}