let btn_1 = document.getElementById('btn_1')
let btn = document.getElementById('btn')
let out = document.getElementById('out')
const students = ['Ivanov', 'Vahin', 'Belov', 'Sidorov', 'Tropin', 'Niniforov', 'Mezulin', 'Fedorov', 'Filimonov', 'Filin'
]
const nums = []


btn_1.onclick = f1
btn.onclick = f2



function f1() {
    for (let i = 0; i < 10; i++) {
        let n = Math.floor(Math.random() * 4) + 2;
        nums.push(n)
    }
    document.querySelectorAll('.fam').forEach((n, i) => n.textContent = students[i] + nums[i])

}


function f2() {
    nums.sort(function (a, b) { return a - b })
    for (x in nums) {
        if (nums[x] == '2') {
            console.log('LOser', x)

        }

    }
    out.innerText = nums[0]

}

let slideIndex = 1;
showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    let slides = document.getElementsByClassName("item");


    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}