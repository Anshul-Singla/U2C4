// write js code here corresponding to favourites.html
var getFavData = JSON.parse(localStorage.getItem("favourite"));
getFavData.forEach(displayInTable);
function displayInTable(ele,index){
    var tBody = document.querySelector("tbody");
    var newRow = document.createElement("tr");
    tBody.append(newRow);
    var td1 = document.createElement("td");
    td1.innerText = ele.matchNumber;

    var td2 = document.createElement("td");
    td2.innerText = ele.teamA;

    var td3 = document.createElement("td");
    td3.innerText = ele.teamB;

    var td4 = document.createElement("td");
    td4.innerText = ele.matchDate;

    var td5 = document.createElement("td");
    td5.innerText = ele.matchVenue;
    

    var td6 = document.createElement("td");
    td6.innerText = "Delete";
    td6.style.color = "red";
    td6.style.cursor = "pointer"
    td6.addEventListener("click" ,function(){
        
        myDelete(ele,index)
    } )
    newRow.append(td1,td2,td3,td4,td5,td6);
}

function myDelete(ele,index){
    getFavData.splice(index,1);
    localStorage.setItem("favourite",JSON.stringify(getFavData))
    window.location.reload()
    

}
