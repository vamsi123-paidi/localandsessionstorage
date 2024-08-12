// Setting a key-value pair in localStorage
localStorage.setItem('myKey', 'myValue');

// Retrieving and printing the value from localStorage
const localStorageValue = localStorage.getItem('myKey');
console.log('Value from localStorage:', localStorageValue);

// Setting a key-value pair in sessionStorage
sessionStorage.setItem('mySessionKey', 'mySessionValue');

// Retrieving and printing the value from sessionStorage
const sessionStorageValue = sessionStorage.getItem('mySessionKey');
console.log('Value from sessionStorage:', sessionStorageValue);

// Removing a specific item from localStorage
localStorage.removeItem('myKey');

// Verifying the item has been removed by attempting to retrieve it
const removedLocalStorageValue = localStorage.getItem('myKey');
console.log('After removal, value from localStorage:', removedLocalStorageValue); // Should be null

// Removing a specific item from sessionStorage
sessionStorage.removeItem('mySessionKey');

// Verifying the item has been removed by attempting to retrieve it
const removedSessionStorageValue = sessionStorage.getItem('mySessionKey');
console.log('After removal, value from sessionStorage:', removedSessionStorageValue); // Should be null

// JavaScript object to be stored
const myObject = {
    name: 'Vamsi Paidi',
    age: 22,
    city: 'Hyderabad'
};

// Storing the object in localStorage using JSON.stringify
localStorage.setItem('myObject', JSON.stringify(myObject));

// Storing the object in sessionStorage using JSON.stringify
sessionStorage.setItem('mySessionObject', JSON.stringify(myObject));

// Retrieving and parsing the JSON object from localStorage
const retrievedObjectFromLocalStorage = JSON.parse(localStorage.getItem('myObject'));
console.log('Retrieved object from localStorage:', retrievedObjectFromLocalStorage);

// Retrieving and parsing the JSON object from sessionStorage
const retrievedObjectFromSessionStorage = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log('Retrieved object from sessionStorage:', retrievedObjectFromSessionStorage);

// Clearing all items from localStorage
localStorage.clear();

// Verifying that localStorage is empty
const anyLocalStorageItem = localStorage.getItem('anyKey');
console.log('After clearing, localStorage item:', anyLocalStorageItem); // Should be null

// Clearing all items from sessionStorage
sessionStorage.clear();

// Verifying that sessionStorage is empty
const anySessionStorageItem = sessionStorage.getItem('anySessionKey');
console.log('After clearing, sessionStorage item:', anySessionStorageItem); // Should be null
