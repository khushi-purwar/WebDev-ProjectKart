async function loadImage() {
  let formUrl = document.getElementById('url').value
  let token = "GA0KVYA-EQ94WNV-GKMC33C-3JZKQ3F"
  let url = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${formUrl}`

  const response = await fetch(url)
  const object = await response.json()


  //create an image element
  let newImg = document.createElement('img')

  // set class
  newImg.className= 'screenshot'

  newImg.setAttribute('src', object.screenshot)

  let container = document.querySelector('.image')
  let reference = document.querySelector('.reference')

  if (document.images.length >= 1 ) {
      let existingImg = document.querySelector('.screenshot')
      container.replaceChild(newImg, existingImg)
  } else {
      container.insertBefore(newImg, reference)
  }


  console.log(newImg);

}

let button = document.getElementById('btn')

button.addEventListener("click", async (event) => {
    event.preventDefault()

    try {
      loadImage()
    } catch(e) {
      console.log("Error!");
      console.log(e);
    }
})