const notes = [{
    title: 'work',
    body: '5 days a week'
}, {
    title: 'train',
    body: '2 times per week'
}, {
    title: 'rest',
    body: 'at least 6 hours sleep'
}]

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'the button was clicked!'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

// // DOM - Document Object Model

// // Query and remove
// // const p = document.querySelector('p')
// // p.remove()

// // Queary all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '********'
//     // console.log(p.textContent)
//     // p.remove()
// })

// // add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)

// -- Single --
// package
// #replace
// .item

// -- Multiple --
// p#order
// button.inventory
// h1#title.application
// h1.application#title