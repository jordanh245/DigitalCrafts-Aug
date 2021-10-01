//1. access captneyepatch

//2. change wonderwoman to diana prince

//3. use an array method to delete the last superhero in the justice league

//4. use an array method to add the word "member" to every hero in the theOtherHeroes array. (ex. crimsonmechdudemember)

//5. combine the justice league members and the other heroes together in a crosserOver array

//6. delete all heroes in the justice league who have the word "man" in their title

//7. iterate over both arrays so that they are no longer just strings but they are objects that are structured like this
//combine them so they are all heroes in one array
[
    {
    name: "spiderman",
    league: "otherHeroes",
   },
    {
    name: "batman",
    league: "Justice league",
   }
]

const justiceLeague = [
    "batman", "wonderwoman", "cyborg", "flash", "aquaman","spiderman", "superman", "greenlantern"
]
justiceLeague[1]="Diana Prince"
console.log(justiceLeague)
// change
const removePerson = justiceLeague.splice(7)
console.log(justiceLeague)
// removed

const theOtherHeroes = [
    "crimsonmechdude", "hammerboy", "greenguy", "hawkguy", "blackassassin","shieldbro", "captneyepatch"
]
const captn =theOtherHeroes[6]
console.log(captn)
// access

