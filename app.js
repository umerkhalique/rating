let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let submit = document.querySelector('.btn');
let state = "";

one.addEventListener('click', function() {
    document.querySelector('.one').classList.add('classD');
    document.querySelector('.two').classList.remove('classD');
    document.querySelector('.three').classList.remove('classD');
    document.querySelector('.four').classList.remove('classD');
    document.querySelector('.five').classList.remove('classD');
    state = "one";
})

two.addEventListener('click', function() {
    document.querySelector('.two').classList.add('classD');
    document.querySelector('.one').classList.remove('classD');
    document.querySelector('.three').classList.remove('classD');
    document.querySelector('.four').classList.remove('classD');
    document.querySelector('.five').classList.remove('classD');
    state = "two";
})

three.addEventListener('click', function() {
    document.querySelector('.three').classList.add('classD');
    document.querySelector('.one').classList.remove('classD');
    document.querySelector('.two').classList.remove('classD');
    document.querySelector('.four').classList.remove('classD');
    document.querySelector('.five').classList.remove('classD');
    state = "three";
})

four.addEventListener('click', function() {
    document.querySelector('.four').classList.add('classD');
    document.querySelector('.two').classList.remove('classD');
    document.querySelector('.three').classList.remove('classD');
    document.querySelector('.one').classList.remove('classD');
    document.querySelector('.five').classList.remove('classD');
    state = "four";
})

five.addEventListener('click', function() {
    document.querySelector('.five').classList.add('classD');
    document.querySelector('.two').classList.remove('classD');
    document.querySelector('.three').classList.remove('classD');
    document.querySelector('.four').classList.remove('classD');
    document.querySelector('.one').classList.remove('classD');
    state = "five";
})

submit.addEventListener('click', function() {
    if(state === "one"){
        document.querySelector('.g').style.display = "block";
        document.querySelector('.span').textContent = "1"
    }else if(state === "two"){
        document.querySelector('.g').style.display = "block";
        document.querySelector('.span').textContent = "2"
    }else if(state === "three"){
        document.querySelector('.g').style.display = "block";
        document.querySelector('.span').textContent = "3"
    }else if(state === "four"){
        document.querySelector('.g').style.display = "block";
        document.querySelector('.span').textContent = "4"
    }else if(state === "five"){
        document.querySelector('.g').style.display = "block";
        document.querySelector('.span').textContent = "5"
    }
})