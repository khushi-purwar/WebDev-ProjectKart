const apiKey = '7XhDAuhKBpZnbHPQbNK0EKDuM1PW0ZtxAU9RewVE-P0'; // key 1
// const apiKey = '611y3PelGQQ3L81ROn7G1UeLG8RzaW-9QOiS-IKh73w'; // key 2

// DOM elements
const imagesContainer = document.getElementById('imagesContainer');
const loader = document.getElementById('loader');

// configuration
const initialLoadNumber = 10;
const regularLoadNumber = 15;
const loadMoreDistance = 1000;
const showLoaderDistance = 100;

// globals
let photos = [];
let photosRequested = 0;
let photosDownloaded = 0;

// helper functions
function setAttributes (item, attributes) {
  for (attr in attributes) {
    item.setAttribute(attr, attributes[attr]);
  }
}

// functions
async function getPhotosFromUnsplash (numberToLoad) {

  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${numberToLoad}`;

  try {
  const result = await fetch(apiUrl);
  photos = await result.json();
  
  } catch (error) {
    console.log(error);
  }

  updatePhotosOnApp();  
}

function updatePhotosOnApp() {

  photos.forEach (currentPhoto => {

    let item = document.createElement('a');
    setAttributes(item, {
      href: currentPhoto.links.html,
      target: '_blank'
    });

    let image = document.createElement('img');
    setAttributes(image, {
      src: currentPhoto.urls.regular, 
      title: currentPhoto.alt_description,
      alt: currentPhoto.alt_description
    });

    item.appendChild(image);
    imagesContainer.appendChild(item);

    image.addEventListener ('load', () => {
      photosDownloaded++;
      checkLoader();
    });
  });

}

function checkLoader () {
  if (document.body.offsetHeight - window.scrollY - window.innerHeight < showLoaderDistance) {
    loader.hidden = false;
  } else {
    loader.hidden = true;
  }
}

// onLoad
checkLoader();
getPhotosFromUnsplash (initialLoadNumber);
photosRequested += initialLoadNumber;

// onScroll
window.addEventListener('scroll', () => {
  // make another request only if all previous photos are already loaded
  if(photosRequested === photosDownloaded) {
    // check if user scrolled at the bottom of the page
    if((document.body.offsetHeight - window.scrollY - window.innerHeight) < loadMoreDistance ) {
      photosRequested += regularLoadNumber;
      getPhotosFromUnsplash(regularLoadNumber);
    }    
  }

  checkLoader();
})