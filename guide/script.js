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
    document.querySelector('#dp-flex-button-1_7').classList.add('active')
    document.querySelector('#dp-flex-button-2_7').classList.remove('active')
    document.querySelector('#dp-flex-button-3_7').classList.remove('active')
    document.querySelector('#dp-flex-button-4_7').classList.remove('active')
    document.querySelector('#dp-flex-button-5_7').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'flex-end'
    document.querySelector('#dp-flex-button-1_7').classList.remove('active')
    document.querySelector('#dp-flex-button-2_7').classList.add('active')
    document.querySelector('#dp-flex-button-3_7').classList.remove('active')
    document.querySelector('#dp-flex-button-4_7').classList.remove('active')
    document.querySelector('#dp-flex-button-5_7').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'center'
    document.querySelector('#dp-flex-button-1_7').classList.remove('active')
    document.querySelector('#dp-flex-button-2_7').classList.remove('active')
    document.querySelector('#dp-flex-button-3_7').classList.add('active')
    document.querySelector('#dp-flex-button-4_7').classList.remove('active')
    document.querySelector('#dp-flex-button-5_7').classList.remove('active')
}
document.querySelector('#dp-flex-button-4_7').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'baseline'
    document.querySelector('#dp-flex-button-1_7').classList.remove('active')
    document.querySelector('#dp-flex-button-2_7').classList.remove('active')
    document.querySelector('#dp-flex-button-3_7').classList.remove('active')
    document.querySelector('#dp-flex-button-4_7').classList.add('active')
    document.querySelector('#dp-flex-button-5_7').classList.remove('active')
}
document.querySelector('#dp-flex-button-5_7').onclick = function(ev){
    let a = document.querySelectorAll('.show-container')
    b = a[6].querySelectorAll('.block')
    b.forEach(element => element.style.height = '')
    a[6].style.display = 'flex'
    a[6].style.alignItems = 'stretch'
    document.querySelector('#dp-flex-button-1_7').classList.remove('active')
    document.querySelector('#dp-flex-button-2_7').classList.remove('active')
    document.querySelector('#dp-flex-button-3_7').classList.remove('active')
    document.querySelector('#dp-flex-button-4_7').classList.remove('active')
    document.querySelector('#dp-flex-button-5_7').classList.add('active')
}

// 


document.querySelector('#dp-flex-button-1_8').onclick = function(ev){
    let a = document.querySelectorAll('.show-container')
    a[7].style.display = 'flex'
    let b = a[7].querySelector('.third')
    b.style.alignSelf = 'flex-start'
    document.querySelector('#dp-flex-button-1_8').classList.add('active')
    document.querySelector('#dp-flex-button-2_8').classList.remove('active')
    document.querySelector('#dp-flex-button-3_8').classList.remove('active')
    document.querySelector('#dp-flex-button-4_8').classList.remove('active')
    document.querySelector('#dp-flex-button-5_8').classList.remove('active')
}
document.querySelector('#dp-flex-button-2_8').onclick = function(ev){
    let a = document.querySelectorAll('.show-container')
    a[7].style.display = 'flex'
    let b = a[7].querySelector('.third')
    b.style.alignSelf = 'flex-end'
    console.log(b)
    document.querySelector('#dp-flex-button-1_8').classList.remove('active')
    document.querySelector('#dp-flex-button-2_8').classList.add('active')
    document.querySelector('#dp-flex-button-3_8').classList.remove('active')
    document.querySelector('#dp-flex-button-4_8').classList.remove('active')
    document.querySelector('#dp-flex-button-5_8').classList.remove('active')
}
document.querySelector('#dp-flex-button-3_8').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[7].style.display = 'flex'
    let b = a[7].querySelector('.third')
    b.style.alignSelf = 'center'
    document.querySelector('#dp-flex-button-1_8').classList.remove('active')
    document.querySelector('#dp-flex-button-2_8').classList.remove('active')
    document.querySelector('#dp-flex-button-3_8').classList.add('active')
    document.querySelector('#dp-flex-button-4_8').classList.remove('active')
    document.querySelector('#dp-flex-button-5_8').classList.remove('active')
}
document.querySelector('#dp-flex-button-4_8').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[7].style.display = 'flex'
    let b = a[7].querySelector('.third')
    b.style.alignSelf = 'baseline'
    document.querySelector('#dp-flex-button-1_8').classList.remove('active')
    document.querySelector('#dp-flex-button-2_8').classList.remove('active')
    document.querySelector('#dp-flex-button-3_8').classList.remove('active')
    document.querySelector('#dp-flex-button-4_8').classList.add('active')
    document.querySelector('#dp-flex-button-5_8').classList.remove('active')
}
document.querySelector('#dp-flex-button-5_8').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[7].style.display = 'flex'
    let b = a[7].querySelector('.third')
    b.style.alignSelf = 'stretch'
    document.querySelector('#dp-flex-button-1_8').classList.remove('active')
    document.querySelector('#dp-flex-button-2_8').classList.remove('active')
    document.querySelector('#dp-flex-button-3_8').classList.remove('active')
    document.querySelector('#dp-flex-button-4_8').classList.remove('active')
    document.querySelector('#dp-flex-button-5_8').classList.add('active')
}

// 


document.querySelector('#dp-flex-button-1_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'flex-start'
    document.querySelector('#dp-flex-button-1_9').classList.add('active')
    document.querySelector('#dp-flex-button-2_9').classList.remove('active')
    document.querySelector('#dp-flex-button-3_9').classList.remove('active')
    document.querySelector('#dp-flex-button-4_9').classList.remove('active')
    document.querySelector('#dp-flex-button-5_9').classList.remove('active')
    document.querySelector('#dp-flex-button-6_9').classList.remove('active')
    document.querySelector('#dp-flex-button-7_9').classList.remove('active')
}

document.querySelector('#dp-flex-button-2_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'flex-end'
    document.querySelector('#dp-flex-button-1_9').classList.remove('active')
    document.querySelector('#dp-flex-button-2_9').classList.add('active')
    document.querySelector('#dp-flex-button-3_9').classList.remove('active')
    document.querySelector('#dp-flex-button-4_9').classList.remove('active')
    document.querySelector('#dp-flex-button-5_9').classList.remove('active')
    document.querySelector('#dp-flex-button-6_9').classList.remove('active')
    document.querySelector('#dp-flex-button-7_9').classList.remove('active')
}

document.querySelector('#dp-flex-button-3_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'center'
    document.querySelector('#dp-flex-button-1_9').classList.remove('active')
    document.querySelector('#dp-flex-button-2_9').classList.remove('active')
    document.querySelector('#dp-flex-button-3_9').classList.add('active')
    document.querySelector('#dp-flex-button-4_9').classList.remove('active')
    document.querySelector('#dp-flex-button-5_9').classList.remove('active')
    document.querySelector('#dp-flex-button-6_9').classList.remove('active')
    document.querySelector('#dp-flex-button-7_9').classList.remove('active')
}

document.querySelector('#dp-flex-button-4_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'space-between'
    document.querySelector('#dp-flex-button-1_9').classList.remove('active')
    document.querySelector('#dp-flex-button-2_9').classList.remove('active')
    document.querySelector('#dp-flex-button-3_9').classList.remove('active')
    document.querySelector('#dp-flex-button-4_9').classList.add('active')
    document.querySelector('#dp-flex-button-5_9').classList.remove('active')
    document.querySelector('#dp-flex-button-6_9').classList.remove('active')
    document.querySelector('#dp-flex-button-7_9').classList.remove('active')
}

document.querySelector('#dp-flex-button-5_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'space-around'
    document.querySelector('#dp-flex-button-1_9').classList.remove('active')
    document.querySelector('#dp-flex-button-2_9').classList.remove('active')
    document.querySelector('#dp-flex-button-3_9').classList.remove('active')
    document.querySelector('#dp-flex-button-4_9').classList.remove('active')
    document.querySelector('#dp-flex-button-5_9').classList.add('active')
    document.querySelector('#dp-flex-button-6_9').classList.remove('active')
    document.querySelector('#dp-flex-button-7_9').classList.remove('active')
}

document.querySelector('#dp-flex-button-6_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'space-evenly'
    document.querySelector('#dp-flex-button-1_9').classList.remove('active')
    document.querySelector('#dp-flex-button-2_9').classList.remove('active')
    document.querySelector('#dp-flex-button-3_9').classList.remove('active')
    document.querySelector('#dp-flex-button-4_9').classList.remove('active')
    document.querySelector('#dp-flex-button-5_9').classList.remove('active')
    document.querySelector('#dp-flex-button-6_9').classList.add('active')
    document.querySelector('#dp-flex-button-7_9').classList.remove('active')
}

document.querySelector('#dp-flex-button-7_9').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[8].querySelectorAll('.block').forEach((element) => {
        element.style.width = '30%'
        element.style.height = "auto"
    })
    a[8].style.display = 'flex'
    a[8].style.flexWrap = 'wrap'
    a[8].style.alignContent = 'stretch'
    document.querySelector('#dp-flex-button-1_9').classList.remove('active')
    document.querySelector('#dp-flex-button-2_9').classList.remove('active')
    document.querySelector('#dp-flex-button-3_9').classList.remove('active')
    document.querySelector('#dp-flex-button-4_9').classList.remove('active')
    document.querySelector('#dp-flex-button-5_9').classList.remove('active')
    document.querySelector('#dp-flex-button-6_9').classList.remove('active')
    document.querySelector('#dp-flex-button-7_9').classList.add('active')
}


// 


document.querySelector('#dp-flex-button-1_10').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[9].querySelectorAll('.block').forEach((element) => {
        element.style.width = 'auto'
        element.style.height = "80%"
    })
    a[9].style.display = 'flex'
    a[9].querySelector('.third').style.flexGrow = '0'
    document.querySelector('#dp-flex-button-1_10').classList.add('active')
    document.querySelector('#dp-flex-button-2_10').classList.remove('active')
}

document.querySelector('#dp-flex-button-2_10').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[9].querySelectorAll('.block').forEach((element) => {
        element.style.width = 'auto'
        element.style.height = "80%"
    })
    a[9].style.display = 'flex'
    a[9].querySelector('.third').style.flexGrow = '1'
    document.querySelector('#dp-flex-button-1_10').classList.remove('active')
    document.querySelector('#dp-flex-button-2_10').classList.add('active')
}


// 


document.querySelector('#dp-flex-button-1_11').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[10].querySelectorAll('.block').forEach((element) => {
        element.style.height = "80%"
        element.style.width = "40%"
    })
    a[10].style.display = 'flex'
    a[10].querySelector('.third').style.flexShrink = '0'
    document.querySelector('#dp-flex-button-1_11').classList.add('active')
    document.querySelector('#dp-flex-button-2_11').classList.remove('active')
}

document.querySelector('#dp-flex-button-2_11').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[10].querySelectorAll('.block').forEach((element) => {
        element.style.height = "80%"
        element.style.width = "20%"
    })
    a[10].style.display = 'flex'
    a[10].querySelector('.third').style.flexShrink = '1'
    document.querySelector('#dp-flex-button-1_11').classList.remove('active')
    document.querySelector('#dp-flex-button-2_11').classList.add('active')
}


// 


document.querySelector('#dp-flex-button-1_12').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[11].style.display = 'flex'
    a[11].style.flexWrap = 'wrap'
    a[11].querySelector('.third').style.flexBasis = '30%'
    document.querySelector('#dp-flex-button-1_11').classList.add('active')
    document.querySelector('#dp-flex-button-2_11').classList.remove('active')
    document.querySelector('#dp-flex-button-3_11').classList.remove('active')
}

document.querySelector('#dp-flex-button-2_12').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[11].style.display = 'flex'
    a[11].style.flexWrap = 'wrap'
    a[11].querySelector('.third').style.flexBasis = '50%'
    document.querySelector('#dp-flex-button-1_11').classList.remove('active')
    document.querySelector('#dp-flex-button-2_11').classList.add('active')
    document.querySelector('#dp-flex-button-3_11').classList.remove('active')
}

document.querySelector('#dp-flex-button-3_12').onclick = function(ev){
    let a =document.querySelectorAll('.show-container')
    a[11].style.display = 'flex'
    a[11].style.flexWrap = 'wrap'
    a[11].querySelector('.third').style.flexBasis = 'content'
    document.querySelector('#dp-flex-button-1_11').classList.remove('active')
    document.querySelector('#dp-flex-button-2_11').classList.remove('active')
    document.querySelector('#dp-flex-button-3_11').classList.add('active')
}