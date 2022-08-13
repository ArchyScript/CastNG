// const { default: Splide } = require('@splidejs/splide')
// import { Splide } from '@splidejs/splide'

const nav_links_container = document.getElementById('nav_links_container')
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
  {
    name: '',
    image: '',
  },
  {
    name: 'Lupita Nyong’o',
    image: './img/lupita.png',
  },
  {
    name: 'Timini Egbuson',
    image: './img/timini.png',
  },
  {
    name: 'Abayomi Alvin',
    image: './img/aby.png',
  },
  {
    name: ' Adebukola Oladipupo',
    image: './img/bukky.png',
  },
  {
    name: 'Adesua Etomi',
    image: './img/adesua.png',
  },
  {
    name: 'Dorcas Shola Fapson',
    image: './img/dorcas.png',
  },
  {
    name: 'Jemima Osunde',
    image: './img/jemina.png',
  },
  {
    name: 'Olumide Owuru',
    image: './img/olumide.png',
  },
  {
    name: 'Maria Okanrende',
    image: './img/maria.png',
  },
  {
    name: 'Rahma Sadau',
    image: './img/rhama.png',
  },
  {
    name: 'Emmanuel Ikibese',
    image: './img/emma.png',
  },
]

//
const handleNavLinks = async () => {
  nav_links_container.innerHTML = ''

  nav_links.forEach((nav_link) => {
    nav_links_container.innerHTML += `
       <li class="text-gray-200  hover:text-white hover:underline px-1 sm:px-2  font-semibold text-sm xl:text-lg">
            <a href="#" class="">
                ${nav_link.title}
            </a>
        </li>
    `
  })
}

const displayCelebs = () => {
  celebs_container.innerHTML = ''

  celebs.forEach((celeb) => {
    celebs_container.innerHTML += `
        <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 w-full mb-4">
            <div class="relative  w-full">
                <div class="flex-shrink-0 cursor-pointer">
                    <img src="${celeb.image}"   />
                </div>
                <p class="text-white text-center cursor-pointer uppercase font-medium md:font-semibold text-xl flex-wrap mt-4">
                    ${celeb.name}
                </p>
            </div>
        </div>
    `
  })
}
//
//
window.onload = function () {
  handleNavLinks()
  displayCelebs()
}
