// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//  Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

//belajar funtion

function AddName () {
    return 'halo nama saya rifaldi'
}

alert(AddName())

//function console

function addname (firstname, lastname) {
    console.log('nama depan', firstname)
    console.log('nama belakang', lastname)
}

addname('ipai', 'rifal')

//function console 2.0

function aDdnAme () {
    console.log('nama depan', arguments[0])
    console.log('hobi saya', arguments[1])
    console.log('suka makan', arguments[2])
}

aDdnAme('rifaldi', 'pullup', 'ayam')

//fungtion dengan pengulangan
function nameadd () {
for (let i = 0; i < arguments.length;i++)
{
console.log('nama lengkap anda: ',arguments[i])
}
}

nameadd('arga' , 'mansur')

