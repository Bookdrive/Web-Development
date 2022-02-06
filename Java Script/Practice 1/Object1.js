let OurMusic = {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": ["CD", "Cassette", "LP"],
    "gold": true
}
console.log(OurMusic);
for(let key in OurMusic)
{
    console.log(`${key} : ${OurMusic[key]}`)
}
