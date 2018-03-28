console.log("testing")
let run = document.getElementById('run')
let update = document.getElementById('update')
let result = document.getElementById('result')
let variableField = document.getElementById('variableField')
let value = document.getElementById('value')
let variables = document.getElementsByClassName('functionVariable')
let bigVariables = document.getElementsByClassName('bigFunctionVariable')

update.addEventListener('click', function() {
  variables[0].innerHTML = variableField.value
  variables[1].innerHTML = variableField.value
  variables[2].innerHTML = variableField.value
})

update.addEventListener('click', function() {
  bigVariables[0].innerHTML = variableField.value
  bigVariables[1].innerHTML = variableField.value
  bigVariables[2].innerHTML = variableField.value
  bigVariables[3].innerHTML = variableField.value
})

document.addEventListener('click', function() {
  event.preventDefault()
  result.innerHTML = value.value * value.value
})

document.addEventListener('click', function() {
  event.preventDefault()
  result.innerHTML = value.value * value.value
  if (value.value >= 10) {
    document.getElementById('bigResult').innerHTML = value.value * value.value
  } else {
    document.getElementById('bigResult').innerHTML = "not big enough"
  }
})