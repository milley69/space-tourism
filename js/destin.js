let destvUl = document.querySelector('#destination ul')
let destUlLi = Array.from(document.querySelectorAll('#destination ul li'))

destUlLi.map((li) => {
  li.addEventListener('click', () => {
    for (const li of destUlLi) {
      li.classList.remove('active-tab')
    }
    li.classList.add('active-tab')
  })
})
