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

    goBackbtn.addEventListener("click", function() {
        loadHomeHTML()
        console.log("Button being clicked")
        setTimeout(homeScript, 1000)
    })

    addMilestonebtn.addEventListener("click", function() {
        let mileStoneName = document.querySelector("#milestone-el").value 
        let mileStoneDate = document.querySelector("#milestoneDate-el").value
        if(mileStoneName != "" && mileStoneDate != ""){
            mileStones.push({
                name: mileStoneName,
                date: mileStoneDate
            })
        }
        if(mileStones.length != 0){
            let listEL = document.querySelector("#ul-el")
            let listItems = ''
            for(var i = 0; i < mileStones.length; i++){
            let time = mileStones[i].date.split("T")
            listItems += `
                <li>
                    Milestone name: ${mileStones[i].name}, Date: ${time[0]}, Time: ${time[1]}
                </li>
            `
            } 
            listEL.innerHTML = listItems
        }
    })

    addProjectbtn.addEventListener("click", function() {
        let projectName = document.querySelector("#name-el").value
        let projectDate = document.querySelector("#completionDate-el").value
        if(projectName != "" && projectDate != "" && mileStones.length != 0){
            mileStones.push(projectDate)
            projects.push(projectName)
            localStorage.setItem(projectName, JSON.stringify(mileStones))
            console.log("Item added")
            mileStones = []
            loadHomeHTML()
            setTimeout(homeScript, 1000)
        }
    })
}