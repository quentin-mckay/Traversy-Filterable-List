// hook up DOM
const $filterInput = document.querySelector('#filterInput')
const $lis = document.querySelectorAll('li.collection-item')

// add event listener
$filterInput.addEventListener('keyup', filterNames)

// listener function
// this is my code and it seems more updated, readable, cleaner, shorter, better :)
function filterNames(event) {
  let searchString = event.target.value.toLowerCase()

  $lis.forEach((li) => {
    if (li.querySelector('a').innerText.toLowerCase().includes(searchString)) {
      li.style.display = ''
    }
    else {
      li.style.display = 'none'
    }
  })
}

// ====== Traversy's Code ======
// function filterNames() {
//     // get value of input
//     const filterValue = document.getElementById('filterInput').value.toUpperCase()
//
//     // get names ul
//     const ul = document.getElementById('names')
//     // get li's from ul
//     const lis = ul.querySelectorAll('li.collection-item')
//
//     //loop through collection-item li's
//     for (let i = 0; i < lis.length; i++) {
//         const a = lis[i].getElementsByTagName('a')[0]  // b/c there's only plural function
//         // if matched
//         if (a.innerText.toUpperCase().indexOf(filterValue) > -1) {
//             lis[i].style.display = '' // makes it block?
//         }
//         else {
//             lis[i].style.display = 'none'
//         }
//     }
//
//
// }
