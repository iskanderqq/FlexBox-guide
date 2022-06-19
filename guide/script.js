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
    document.querySelector('#dp-flex-button-1_3').classList.add('active')
    document.querySelector('#dp-flex-button-2_3').classList.remove('active')
    document.querySelector('#dp-flex-button-3_3').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_3').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[2].style.display = 'flex'
    a[2].style.flexWrap = 'wrap'
    document.querySelector('#dp-flex-button-1_3').classList.remove('active')
    document.querySelector('#dp-flex-button-2_3').classList.add('active')
    document.querySelector('#dp-flex-button-3_3').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_3').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[2].style.display = 'flex'
    a[2].style.flexWrap = 'wrap-reverse'
    document.querySelector('#dp-flex-button-1_3').classList.remove('active')
    document.querySelector('#dp-flex-button-2_3').classList.remove('active')
    document.querySelector('#dp-flex-button-3_3').classList.add('active')
}

// 

document.querySelector('#dp-flex-button-1_4').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    console.log(a[3])
    a[3].style.display = 'flex'
    a[3].style.flexFlow = 'row nowrap'
    document.querySelector('#dp-flex-button-1_4').classList.add('active')
    document.querySelector('#dp-flex-button-2_4').classList.remove('active')
    document.querySelector('#dp-flex-button-3_4').classList.remove('active')
    document.querySelector('#dp-flex-button-4_4').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_4').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[3].style.display = 'flex'
    a[3].style.flexFlow = 'column-reverse'
    document.querySelector('#dp-flex-button-1_4').classList.remove('active')
    document.querySelector('#dp-flex-button-2_4').classList.add('active')
    document.querySelector('#dp-flex-button-3_4').classList.remove('active')
    document.querySelector('#dp-flex-button-4_4').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_4').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[3].style.display = 'flex'
    a[3].style.flexFlow = 'column wrap'
    document.querySelector('#dp-flex-button-1_4').classList.remove('active')
    document.querySelector('#dp-flex-button-2_4').classList.remove('active')
    document.querySelector('#dp-flex-button-3_4').classList.add('active')
    document.querySelector('#dp-flex-button-4_4').classList.remove('active')
}
document.querySelector('#dp-flex-button-4_4').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[3].style.display = 'flex'
    a[3].style.flexFlow = 'row-reverse wrap-reverse'
    document.querySelector('#dp-flex-button-1_2').classList.remove('active')
    document.querySelector('#dp-flex-button-2_2').classList.remove('active')
    document.querySelector('#dp-flex-button-3_2').classList.remove('active')
    document.querySelector('#dp-flex-button-4_2').classList.add('active')
}

// 

document.querySelector('#dp-flex-button-1_5').onclick = function(ev){
    let a =document.querySelector('.third')
    a.style.order = '-1'
    document.querySelector('#dp-flex-button-1_5').classList.add('active')
    document.querySelector('#dp-flex-button-2_5').classList.remove('active')
    document.querySelector('#dp-flex-button-3_5').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_5').onclick = function(ev){
    let a =document.querySelector('.third')
    a.style.order = '0'
    document.querySelector('#dp-flex-button-1_5').classList.remove('active')
    document.querySelector('#dp-flex-button-2_5').classList.add('active')
    document.querySelector('#dp-flex-button-3_5').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_5').onclick = function(ev){
    let a =document.querySelector('.third')
    a.style.order = '1'
    document.querySelector('#dp-flex-button-1_5').classList.remove('active')
    document.querySelector('#dp-flex-button-2_5').classList.remove('active')
    document.querySelector('#dp-flex-button-3_5').classList.add('active')
}

// 

document.querySelector('#dp-flex-button-1_6').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[5].style.display = 'flex'
    a[5].style.justifyContent = 'flex-start'
    document.querySelector('#dp-flex-button-1_6').classList.add('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_6').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[5].style.display = 'flex'
    a[5].style.justifyContent = 'flex-end'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.add('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_6').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[5].style.display = 'flex'
    a[5].style.justifyContent = 'center'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.add('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-4_6').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[5].style.display = 'flex'
    a[5].style.justifyContent = 'space-between'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.add('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-5_6').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[5].style.display = 'flex'
    a[5].style.justifyContent = 'space-around'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.add('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-6_6').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[5].style.display = 'flex'
    a[5].style.justifyContent = 'space-evenly'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.add('active')
}

// 

document.querySelector('#dp-flex-button-1_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'flex-start'
    document.querySelector('#dp-flex-button-1_6').classList.add('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'flex-end'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.add('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'center'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.add('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-4_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'baseline'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.add('active')
    document.querySelector('#dp-flex-button-5_6').classList.remove('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}
document.querySelector('#dp-flex-button-5_7').onclick = function(ev){
    let a = document.querySelectorAll('.show-container')
    b = a[6].querySelectorAll('.block')
    b.forEach(element => element.style.height = '')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'stretch'
    document.querySelector('#dp-flex-button-1_6').classList.remove('active')
    document.querySelector('#dp-flex-button-2_6').classList.remove('active')
    document.querySelector('#dp-flex-button-3_6').classList.remove('active')
    document.querySelector('#dp-flex-button-4_6').classList.remove('active')
    document.querySelector('#dp-flex-button-5_6').classList.add('active')
    document.querySelector('#dp-flex-button-6_6').classList.remove('active')
}