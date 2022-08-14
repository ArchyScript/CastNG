// const { default: Splide } = require('@splidejs/splide')
// import { Splide } from '@splidejs/splide'

const nav_links_container = document.getElementById('nav_links_container')
const nav_link_mobile = document.getElementById('nav_link_mobile')
const celebs_container = document.getElementById('celebs_container')
const nav_links = [
  {
    title: 'About',
    href: 'https://casting.ng/mtv-shuga-naija#',
  },
  {
    title: 'Audition',
    href: 'https://casting.ng/mtv-shuga-naija#',
  },
  {
    title: 'Past seasons',
    href: 'https://casting.ng/mtv-shuga-naija#',
  },
  {
    title: 'MTV SHUGA Stars',
    href: 'https://casting.ng/mtv-shuga-naija#',
  },
  {
    title: 'TAP',
    href: 'https://casting.ng/mtv-shuga-naija#',
  },
  {
    title: 'Cast.i.ng community',
    href: 'https://casting.ng/mtv-shuga-naija#',
  },
]

const celebs = [
  // {
  //   name: '',
  //   image: '',
  // },
  {
    name: 'Lupita Nyong’o',
    image: './src/img/lupita.png',
  },
  {
    name: 'Timini Egbuson',
    image: './src/img/timini.png',
  },
  {
    name: 'Abayomi Alvin',
    image: './src/img/aby.png',
  },
  {
    name: ' Adebukola Oladipupo',
    image: './src/img/bukky.png',
  },
  {
    name: 'Adesua Etomi',
    image: './src/img/adesua.png',
  },
  {
    name: 'Dorcas Shola Fapson',
    image: './src/img/dorcas.png',
  },
  {
    name: 'Jemima Osunde',
    image: './src/img/jemina.png',
  },
  {
    name: 'Olumide Owuru',
    image: './src/img/olumide.png',
  },
  {
    name: 'Maria Okanrende',
    image: './src/img/maria.png',
  },
  {
    name: 'Rahma Sadau',
    image: './src/img/rhama.png',
  },
  {
    name: 'Emmanuel Ikibese',
    image: './src/img/emma.png',
  },
]

//
const handleNavLinks = async () => {
  nav_links_container.innerHTML = ''
  nav_link_mobile.innerHTML = ''

  nav_links.forEach((nav_link) => {
    nav_links_container.innerHTML += `
       <li class="text-gray-200  hover:text-white hover:underline px-1 sm:px-2  font-medium lg:font-semibold text-sm xl:text-lg">
            <a href="#" class="">
                ${nav_link.title}
            </a>
        </li>
    `
    nav_link_mobile.innerHTML += `
        <div title="${nav_link.title}" class="nav_link_mobile_link text-purple-200   block w-full text-center  hover:text-white  py-3 sm:py-4 px-1 sm:px-2 font-semibold text-xl sm:text-2xl">
            <a href="#" class="text-2xl">
                ${nav_link.title}
            </a>
        </div>
    `
  })
}

// const nav_link_mobile_links = document.querySelectorAll('.nav_link_mobile_link')
// nav_link_mobile_links.forEach((nav_link_mobile_link) => {
//   nav_link_mobile_link.addEventListener('click', () => {
//     alert(876)
//   })
// })

const displayCelebs = () => {
  celebs_container.innerHTML = ''

  celebs.forEach((celeb) => {
    celebs_container.innerHTML += `
        <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 w-full  mb-1 sm:mb-2 lg:mb-4">
            <div class="relative  w-full">
                <div class="flex-shrink-0 cursor-pointer  flex justify-center items-center">
                    <img src="${celeb.image}"   />
                </div>

                <p class="text-purple-100 text-center cursor-pointer uppercase font-medium md:font-semibold text-base lg:text-lg flex-wrap mt-4">
                    ${celeb.name}
                </p>
            </div>
        </div>
    `
  })
}

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    // user is scrolled
    // if (scrollShadowBoolean.value) scrollShadowBoolean.value = false
  } else {
    // user is at top of page
    // if (!scrollShadowBoolean.value) scrollShadowBoolean.value = true
  }
}

document.getElementById('close_menu_btn').onclick = () => toggleMenuBar()
document.getElementById('open_menu_btn').onclick = () => toggleMenuBar()
const modal = document.getElementById('modal')

const toggleMenuBar = () => {
  // modal.classList.toggle('fixed')
  modal.classList.toggle('hidden')
}

//
//
window.onload = function () {
  // modal.classList.add('hidden')
  handleNavLinks()
  displayCelebs()
}
