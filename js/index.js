const icon = document.querySelector('.icon') // Selecciono para manejar el domm

const navv = document.querySelector('nav')// selecciono para manejar el domm

icon.addEventListener('click', () => {

    icon.classList.toggle('ico')
    navv.classList.toggle('aparecer')

    const aa = document.querySelectorAll('a')
 
    document.body.classList.toggle('scrol')

    aa.forEach(ll => {

        setTimeout(() => {
            ll.classList.toggle('aparen')
        }, 500);

    });

})



navv.addEventListener('click', (e) => { 
    e.stopPropagation()
})

const aparece = document.querySelector('.conta')
const aparecee = document.querySelector('h1')
const apareceee = document.querySelector('p')



window.addEventListener('load', (e) => {
    e.preventDefault()
    aparece.classList.add('visi')
    aparecee.classList.add('visii')
    apareceee.classList.add('visee')
})
/** Animacion de las cajas de servicios*/

const cajas = document.querySelectorAll('.caja')
const observer = new IntersectionObserver((entri) => {
    entri.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('aparicion')

            }, i * 200);
        } else {
            entry.target.classList.remove('aparicion')
        }
    })
}, {
    threshold: 0.1
})

/**Animacion del formulario */
cajas.forEach(caja => observer.observe(caja));


const formm = document.querySelector('form')
const obser= new IntersectionObserver((entrada)=>{
    const entre = entrada[0]
    if (entre.isIntersecting) {
        entre.target.classList.add('apare')
    }else{
        entre.target.classList.remove('apare')
    }
},{threshold:0.1}
)
obser.observe(formm)