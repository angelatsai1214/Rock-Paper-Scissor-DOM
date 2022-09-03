//.buttons is a class name
const btns = document.querySelectorAll('.buttons')
let user = ""
//object
let counters = {Won: 0, Lost: 0, Tie: 0}

btns.forEach( button => {
  //for each buttons, we want these to happen when the buttons are clicked on
  button.onclick = () => {
    user = button.value
    let computer = computerChoice()
    let result = compare(user, computer)
    resultTimes(result)
    summary.innerHTML = `
    <h2>👩 ${user} vs 🤖 ${computer} </h2>
    <h3>${result}</h3>
    <p>Score: ${counters['Won']-counters['Lost']}</p>
    <p>Score Breakdown: Won ${counters['Won']}, Lost ${counters['Lost']}, Tie ${counters['Tie']}</p>
    `
  }
})

const endBtn = document.getElementById('endBtn')
endBtn.onclick = () => clearResults()

const compare = (user, computer) => {
  if( user == "Rock" && computer == "Scissor" )
    return "You win!"
  else if( user == "Rock" && computer == "Paper" )
    return "You lose!"
  else if( user == "Scissor" && computer == "Paper" )
    return "You win!"
  else if( user == "Scissor" && computer == "Rock" )
    return "You lose!"
  else if( user == "Paper" && computer == "Rock" )
    return "You win!"
  else if( user == "Paper" && computer == "Scissor" )
    return "You lose!"
  else
    return "It's a Draw!"
}

const computerChoice = () => {
  let val = Math.floor(Math.random()*3)
  if( val == 2 )
    return "Rock"
  else if( val == 1 )
    return "Paper"
  else
    return "Scissor"
}

const resultTimes = (result) => {
  let letter = result[4]
  if( letter == 'w' )
    counters['Won']++
  else if( letter == 'l' )
    counters['Lost']++
  else
    counters['Tie']++
}

const clearResults = () => {
  summary.innerHTML = ""
  counters.Won = 0
  counters.Lost = 0
  counters.Tie = 0
}

