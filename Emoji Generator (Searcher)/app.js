const emojiList = document.getElementById('emojiList');
const searchBar = document.getElementById('searchBar');
let allEmojis = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredEmojis = allEmojis.filter((emoji) => {
        return (
            emoji.description.toLowerCase().includes(searchString) ||
            emoji.category.toLowerCase().includes(searchString)
        );
    });
    displayEmojis(filteredEmojis);
});

const loadEmojis = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json');
        allEmojis = await res.json();
        displayEmojis(allEmojis);
    } catch (err) {
        console.error(err);
    }
};

const displayEmojis = (emojis) => {
    const htmlString = emojis
        .map((emoji) => {
            return `
            <li class="emoji">
                <h1>${emoji.emoji}</h1>
                <h3>&nbsp;</h3>
                <h2 class="desc">Description: ${emoji.description}</h2>
                <p class="cat">Category: ${emoji.category}</p>
            </li>
        `;
        })
        .join('');
    emojiList.innerHTML = htmlString;
};

loadEmojis();
