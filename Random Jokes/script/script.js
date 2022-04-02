const getJoke = async (e) => {
    const res = await fetch("https://icanhazdadjoke.com/slack");
    const data = await res.json()
    document.getElementById("joke").innerHTML = data.attachments[0].text;
}