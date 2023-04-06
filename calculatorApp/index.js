var submit = document.getElementById('submit').addEventListener('click', sendRequest)
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var result = document.getElementById('result')

async function sendRequest(e){
  e.preventDefault()
  var n1Value = n1.value
  var n2Value = n2.value

  const formData = new FormData()
  formData.append('n1',n1Value)
  formData.append('n2',n2Value)
  
 
  // sending a post request to the backend
  const response = await fetch("http://localhost:3000/calculator",{
    method:"POST",
    body:formData
  })

  const json = await response.json()
  if(response.ok){
    console.log(json);//result coming from backend
    result.innerText = json
  }
}