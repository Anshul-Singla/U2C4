// write js code here corresponding to matches.html
var tabledata = JSON.parse(localStorage.getItem("schedule"));
// console.log(tabledata);
tabledata.forEach(displayInTable);
function displayInTable(ele){
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
    td6.innerText = "Favourite";
    td6.style.color = "green";
    td6.style.cursor = "pointer"
    td6.addEventListener("click" , function(){
        addToFavourite(ele)
    } )
    newRow.append(td1,td2,td3,td4,td5,td6);
}
var favMatchArr =JSON.parse(localStorage.getItem("favourite"))|| [];
function addToFavourite(ele){
    console.log(ele)
    favMatchArr.push(ele);
    localStorage.setItem("favourite",JSON.stringify(favMatchArr))

}
