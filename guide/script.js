document.querySelector('#dp-flex-button-1').onclick = function(ev){
    document.querySelector('.show-container').style.display = 'block'
    document.querySelector('#dp-flex-button-1').classList.add('active')
    document.querySelector('#dp-flex-button-2').classList.remove('active')
}
document.querySelector('#dp-flex-button-2').onclick = function(ev){
    document.querySelector('.show-container').style.display = 'flex'
    document.querySelector('#dp-flex-button-2').classList.add('active')
    document.querySelector('#dp-flex-button-1').classList.remove('active')
}


// 


document.querySelector('#dp-flex-button-1_2').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[1].style.display = 'flex'
    a[1].style.flexDirection = 'row'
    document.querySelector('#dp-flex-button-1_2').classList.add('active')
    document.querySelector('#dp-flex-button-2_2').classList.remove('active')
    document.querySelector('#dp-flex-button-3_2').classList.remove('active')
    document.querySelector('#dp-flex-button-4_2').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_2').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[1].style.display = 'flex'
    a[1].style.flexDirection = 'row-reverse'
    document.querySelector('#dp-flex-button-2_2').classList.add('active')
    document.querySelector('#dp-flex-button-1_2').classList.remove('active')
    document.querySelector('#dp-flex-button-3_2').classList.remove('active')
    document.querySelector('#dp-flex-button-4_2').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_2').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[1].style.display = 'flex'
    a[1].style.flexDirection = 'column'
    document.querySelector('#dp-flex-button-3_2').classList.add('active')
    document.querySelector('#dp-flex-button-1_2').classList.remove('active')
    document.querySelector('#dp-flex-button-2_2').classList.remove('active')
    document.querySelector('#dp-flex-button-4_2').classList.remove('active')
}
document.querySelector('#dp-flex-button-4_2').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[1].style.display = 'flex'
    a[1].style.flexDirection = 'column-reverse'
    document.querySelector('#dp-flex-button-4_2').classList.add('active')
    document.querySelector('#dp-flex-button-2_2').classList.remove('active')
    document.querySelector('#dp-flex-button-3_2').classList.remove('active')
    document.querySelector('#dp-flex-button-1_2').classList.remove('active')
}

// 

document.querySelector('#dp-flex-button-1_3').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[2].style.display = 'flex'
    a[2].style.flexWrap = 'nowrap'
}
document.querySelector('#dp-flex-button-2_3').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[2].style.display = 'flex'
    a[2].style.flexWrap = 'wrap'
}
document.querySelector('#dp-flex-button-3_3').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[2].style.display = 'flex'
    a[2].style.flexWrap = 'wrap-reverse'
}
