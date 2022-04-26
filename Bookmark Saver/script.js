// caching DOM elements

const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalclose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

// global variables
let bookmarks = [];

// Show Modal, Focus on first Input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}

// Close Modal
function closeModal() {
  modal.classList.remove("show-modal");
}

// Modal Event Listener
modalShow.addEventListener("click", showModal);
modalclose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => (e.target === modal ? closeModal() : false));

function validate(nameValue, urlValue) {
  // Check if both values have been provided
  if (!nameValue || !urlValue) {
    alert("Please make sure to complete both fields!");
    return false;
  }

  // Check if valid url
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);

  if (!urlValue.match(regex)) {
    alert("Please provide a valid web address");
    return false;
  }

  // Valid
  return true;
}

// Build Bookmarks DOM
function buildBookmarks() {
  // Clear the container
  bookmarksContainer.textContent = "";

  // Build items
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;

    // Item
    const item = document.createElement("div");
    item.classList.add("item");
    // Close Icon
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
    closeIcon.setAttribute("title", "Delete Bookmark");
    closeIcon.setAttribute("onclick", `deleteBookmark('${url}')`);
    // Favicon / Link Container
    const linkInfo = document.createElement("div");
    linkInfo.classList.add("name");
    // Favicon
    const favicon = document.createElement("img");
    favicon.setAttribute("src", `https://www.google.com/s2/favicons?domain=${url}`);
    favicon.setAttribute("atl", "Favicon");
    // link
    const link = document.createElement("a");
    link.setAttribute("href", `${url}`);
    link.setAttribute("target", "_blank");
    link.textContent = name;

    // Append to bookmarks container
    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
  });
}

// Fetch Bookmars from localstorage
function fetchBookmarks() {
  // Get them if available
  if (localStorage.getItem("bookmarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  } else {
    // Create bookmarks array in localStorage
    bookmarks = [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/gurjeet-singh-virdee-25a476199/",
      },
    ];
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  buildBookmarks();
}

// Delete Bookmark
function deleteBookmark(url) {
  bookmarks.forEach((bookmark, i) => {
    if (bookmark.url === url) {
      bookmarks.splice(i, 1);
    }
  });

  // update bookmarks in localStorage, repopulate the DOM
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBookmarks();
}

// Handle Data from Form
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;

  if (!urlValue.includes("http://") && !urlValue.includes("https://")) {
    urlValue = `https://${urlValue}`;
  }

  if (!validate(nameValue, urlValue)) {
    return false;
  }

  // add the new bookmark
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkForm.reset();
  websiteNameEl.focus();
  fetchBookmarks();
}

// Event Listeners
bookmarkForm.addEventListener("submit", storeBookmark);

// onLoad
fetchBookmarks();