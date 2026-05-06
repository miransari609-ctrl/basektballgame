let scoreMin = 12
let scoreSec = 4 

let minute = document.getElementById("min")
let second = document.getElementById("sec")

function add1min(){
  scoreMin += 1
  minute.textContent=(scoreMin)
}
function add2min(){
  scoreMin += 2
  minute.textContent=(scoreMin)
}
function add3min(){
  scoreMin += 3
  minute.textContent=(scoreMin)
}
function add1sec(){
  scoreSec += 1
  second.textContent=(scoreSec)
}
function add2sec(){
  scoreSec += 2
  second.textContent=(scoreSec)
}
function add3sec(){
  scoreSec += 3
  second.textContent=(scoreSec)
}
function resetbtn(){
    scoreSec = 0
    scoreMin = 0
    second.textContent=(scoreSec)
    minute.textContent=(scoreMin)
}