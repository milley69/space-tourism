let navButton = document.querySelector('.nav-menu')
let navUl = document.querySelector('nav ul')
let navUlLi = Array.from(document.querySelectorAll('nav ul li'))

function closeNav() {
  navButton.classList.toggle('nav-menu-open')
  navButton.classList.toggle('nav-menu-close')
  navUl.classList.add('nav-open-fade')
  navUl.classList.add('nav-close')
  setTimeout(() => {
    navUl.classList.remove('nav-open')
    navUl.classList.remove('nav-open-fade')
  }, 500)
}

navButton.addEventListener('click', () => {
  if (navButton.classList.contains('nav-menu-open')) {
    navButton.classList.toggle('nav-menu-open')
    navButton.classList.toggle('nav-menu-close')
    navUl.classList.add('nav-open')
    navUl.classList.remove('nav-close')
  } else if (navButton.classList.contains('nav-menu-close')) {
    closeNav()
  }
})
navUlLi.map((li) => {
  li.addEventListener('click', () => closeNav())
  li.addEventListener('click', () => {
    for (const li of navUlLi) {
      li.classList.remove('nav-active')
    }
    li.classList.add('nav-active')
  })
})

function updateDestination(destinationUlLi) {
  let destinationPlanet = document.querySelector('.destination_planet')
  let moon = document.querySelector('#moon')
  let mars = document.querySelector('#mars')
  let europa = document.querySelector('#europa')
  let titan = document.querySelector('#titan')
  let planets = [moon, mars, europa, titan]

  function reloadDest() {
    for (const planet of planets) {
      planet.classList.add('disable-planet')
    }
  }
  function reloadDestAnim(num) {
    planets[num].classList.toggle('planet_animation')
    setTimeout(() => planets[num].classList.toggle('planet_animation'), 1000)
  }
  if (destinationUlLi[0].classList.contains('tab_active')) {
    // console.log(destinationUlLi[0])
    destinationPlanet.dataset.planet = 'moon'
    reloadDest()
    planets[0].classList.remove('disable-planet')
    reloadDestAnim(0)
  } else if (destinationUlLi[1].classList.contains('tab_active')) {
    // console.log(destinationUlLi[1])
    destinationPlanet.dataset.planet = 'mars'
    reloadDest()
    planets[1].classList.remove('disable-planet')
    reloadDestAnim(1)
  } else if (destinationUlLi[2].classList.contains('tab_active')) {
    // console.log(destinationUlLi[2])
    destinationPlanet.dataset.planet = 'europa'
    reloadDest()
    planets[2].classList.remove('disable-planet')
    reloadDestAnim(2)
  } else if (destinationUlLi[3].classList.contains('tab_active')) {
    // console.log(destinationUlLi[3])
    destinationPlanet.dataset.planet = 'titan'
    reloadDest()
    planets[3].classList.remove('disable-planet')
    reloadDestAnim(3)
  }
  destinationPlanet.classList.toggle('destination_planet_animation')
  setTimeout(
    () => destinationPlanet.classList.toggle('destination_planet_animation'),
    1100
  )
}
function destinationTabsOne() {
  let destinationTabs = document.querySelector('.destination_tabs')
  let destinationPlanet = document.querySelector('.destination_planet')
  let moon = document.querySelector('#moon')
  destinationPlanet.classList.toggle('destination_planet_animation')
  destinationTabs.classList.add('planet_animation')
  moon.classList.toggle('planet_animation')
  setTimeout(() => destinationTabs.classList.remove('planet_animation'), 600)
  setTimeout(() => moon.classList.toggle('planet_animation'), 1000)
  setTimeout(
    () => destinationPlanet.classList.toggle('destination_planet_animation'),
    1100
  )
}
function destinationTabs() {
  let destinationUlLi = Array.from(
    document.querySelectorAll('.destination_tabs ul li')
  )
  destinationUlLi.map((li) => {
    li.addEventListener('click', () => {
      for (const li of destinationUlLi) {
        li.classList.remove('tab_active')
      }
      li.classList.add('tab_active')
      updateDestination(destinationUlLi)
    })
  })
}
function exploreBtn() {
  let exploreBtn = document.querySelector('.main-exp a')
  exploreBtn.addEventListener('click', () => {
    for (const li of navUlLi) {
      li.classList.remove('nav-active')
    }
    navUlLi[1].classList.add('nav-active')
    updateNav()
  })
}

let nav = document.querySelector('nav')

let home = `<main>
<div class="main-title">
  <h4>SO, YOU WANT TO TRAVEL TO</h4>
  <h1>SPACE</h1>
  <p>
    Let’s face it; if you want to go to space, you might as well genuinely
    go to outer space and not hover kind of on the edge of it. Well sit
    back, and relax because we’ll give you a truly out of this world
    experience!
  </p>
</div>
<div class="main-exp">
  <a href="#destination">EXPLORE</a>
</div>
</main>`
//
//
let destination = `
<section id="destination">
      <h4><span>01</span>Pick your destination</h4>
      <div class="destination_planets">
        <div class="destination_planet" data-planet="moon"></div>
        <div class="destination_main">
          <div class="destination_tabs">
            <ul>
              <li class="tab_active">moon</li>
              <li>mars</li>
              <li>europa</li>
              <li>titan</li>
            </ul>
          </div>
          <div id="moon" class="">
            <h1>moon</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div class="destination_table">
              <div class="info">
                <p>AVG. DISTANCE</p>
                <h5>384,400 KM</h5>
              </div>
              <div class="info">
                <p>Est. travel time</p>
                <h5>3 DAYS</h5>
              </div>
            </div>
          </div>
          <div id="mars" class="disable-planet">
            <h1>mars</h1>
            <p>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
            <hr />
            <div class="destination_table">
              <div class="info">
                <p>AVG. DISTANCE</p>
                <h5>225 MIL. km</h5>
              </div>
              <div class="info">
                <p>Est. travel time</p>
                <h5>9 months</h5>
              </div>
            </div>
          </div>
          <div id="europa" class="disable-planet">
            <h1>europa</h1>
            <p>
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            <hr />
            <div class="destination_table">
              <div class="info">
                <p>AVG. DISTANCE</p>
                <h5>628 MIL. km</h5>
              </div>
              <div class="info">
                <p>Est. travel time</p>
                <h5>3 years</h5>
              </div>
            </div>
          </div>
          <div id="titan" class="disable-planet">
            <h1>titan</h1>
            <p>
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
            <hr />
            <div class="destination_table">
              <div class="info">
                <p>AVG. DISTANCE</p>
                <h5>1.6 BIL. km</h5>
              </div>
              <div class="info">
                <p>Est. travel time</p>
                <h5>7 years</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
let crew = `<section id="crew"><h1>crew</h1></section>`
let technology = `<section id="technology"><h1>technology</h1></section>`

let homeHTML = document.querySelector('main')
let destinationHTML = document.querySelector('#destination')
let crewHTML = document.querySelector('#crew')
let technologyHTML = document.querySelector('#technology')

nav.insertAdjacentHTML('afterend', home)
exploreBtn()

function updateNav() {
  if (navUlLi[0].classList.contains('nav-active')) {
    nav.nextElementSibling.remove()
    nav.insertAdjacentHTML('afterend', home)
  } else if (navUlLi[1].classList.contains('nav-active')) {
    nav.nextElementSibling.remove()
    nav.insertAdjacentHTML('afterend', destination)
    destinationTabsOne()
    destinationTabs()
  } else if (navUlLi[2].classList.contains('nav-active')) {
    nav.nextElementSibling.remove()
    nav.insertAdjacentHTML('afterend', crew)
  } else if (navUlLi[3].classList.contains('nav-active')) {
    nav.nextElementSibling.remove()
    nav.insertAdjacentHTML('afterend', technology)
  }
}

navUlLi.map((li) => {
  li.addEventListener('click', () => {
    updateNav()
    if (navUlLi[0].classList.contains('nav-active')) {
      exploreBtn()
    }
  })
})
