// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",addMatchData)
var matchArr = JSON.parse(localStorage.getItem("schedule"))||[];
function addMatchData(){
    event.preventDefault()
    var newMatch = {
        
        matchNumber : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        matchDate :masaiForm.date.value,
        matchVenue :masaiForm.venue.value,

    }
    matchArr.push(newMatch);
    // console.log(matchArr)
    localStorage.setItem("schedule",JSON.stringify(matchArr));
}