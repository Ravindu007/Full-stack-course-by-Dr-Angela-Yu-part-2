$('#calculate').on('click', sendRequest)

async function sendRequest (e){
  e.preventDefault()
  // creating form data
  const formData = new FormData()
  formData.append('weight', $('#weight').val())
  formData.append('height', $('#height').val())

  const response = await fetch("http://localhost:3000/calculateBMI",{
    method:"POST",
    body:formData
  }) 

  const json = await response.json()
  if(response.ok){

    $('#results').text(json)
  }

}