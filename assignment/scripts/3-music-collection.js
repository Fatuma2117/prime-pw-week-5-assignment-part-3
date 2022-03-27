console.log('***** Music Collection *****')
// Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
let collection = [];

function addToCollection(title,artist,yearPublished) {
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newAlbum)
    return newAlbum
}
// console.log(addToCollection('some album','matt',1990))
// console.log(addToCollection('album2','fatuma',2000))
console.log('Expect collection to be empty', collection)




// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

addToCollection('Purple Rain','Prince',1984)
addToCollection('Miseducation of Lauryn Hill','Lauryn Hill',1998)
addToCollection('Innervisions','Stevie Wonder',1973)
addToCollection('Blonde','Frank Ocean',2016)
addToCollection('Channel Orange','Frank Ocean',2012)
addToCollection('Sonder Son','Brent Faiyaz',2017)


console.log('My collection is ==>', collection)




// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.


function showCollection(array){
    console.log('number of albums :', array.length);
    for (let object of array){
       console.log(`${object.title} by ${object.artist}, published in ${object.yearPublished}`) 
    }
}

console.log(collection);



// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.


// 
function findByArtist(artist) {
    let emptyArray = [];
    for ( let album of collection ) {
       if ( artist === album.artist){
            emptyArray.push(album)
   
       } 
    }   return emptyArray ;
}
//
// return matching results if else return emptyArray
//
console.log(findByArtist('Frank Ocean'));
console.log(findByArtist('Beyounce'));
console.log(findByArtist('Micheal Jackson'));
console.log(findByArtist('50 cent'));
console.log(findByArtist('Prince'));

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.



// Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search(artist, title){
    let sArray = [];
for(let album of collection)
    if (album.titile === title)

}