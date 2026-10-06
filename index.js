const bill = document.getElementById("bill")
const tips = document.querySelectorAll(".tips")
const peopleminus = document.querySelector(".minus")
const peopleplus = document.querySelector(".plus")
const persontip = document.getElementById("pertip")
const persontotal = document.getElementById("perperson")
const reset = document.getElementById("reset")
const people = document.getElementById("people")
const custom = document.getElementById("customtip")
const theme = document.getElementById("theme")

let totalTip
let totalBill
let tipperperson
let totalperperson
let numPeople
let peopleNum = 1
let tipValue = 5
let themeStatus = false

const digits = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}

bill.addEventListener('input', () => {
    totalBill = Number(bill.value)
    calculateTotalTip(tipValue, peopleNum, totalBill)
})

peopleplus.addEventListener('click', () => {
    peopleNum = Number(people.value)
    peopleNum += 1
    people.value = peopleNum
    calculateTotalTip(tipValue, peopleNum, totalBill)
})

peopleminus.addEventListener('click', () => {
    if (people.value === '1') {
        people.value = '1'
        return
    }
    peopleNum = Number(people.value)
    peopleNum -= 1
    people.value = peopleNum
    calculateTotalTip(tipValue, peopleNum, totalBill)
})

people.addEventListener('input', () => {
    if (people.value === '') {
        people.value = ''
        peopleNum = 1
        calculateTotalTip(tipValue, peopleNum, totalBill)
        return
    }
    peopleNum = Number(people.value)
    people.value = peopleNum
    calculateTotalTip(tipValue, peopleNum, totalBill)
})

function calculateTotalTip(num, num1, num3) {
    totalTip = num3 * Number(num) / 100
    tipperperson = totalTip / num1
    totalperperson = (num3 + totalTip) / num1
    persontip.textContent = `$ ${tipperperson.toLocaleString('en-US', digits)}`
    persontotal.textContent = `$ ${totalperperson.toLocaleString('en-US', digits)}`
}

tips.forEach(tip => {
    tip.addEventListener('click', () => {
        tipValue = tip.value
        if (people.value === '') {
            people.value = '1'
        }
        numPeople = people.value
        switch (tipValue) {
            case "5":
                calculateTotalTip(tipValue, numPeople, totalBill)
                break
            case "10":
                calculateTotalTip(tipValue, numPeople, totalBill)
                break
            case "15":
                calculateTotalTip(tipValue, numPeople, totalBill)
                break
            case "20":
                calculateTotalTip(tipValue, numPeople, totalBill)
                break
            case "25":
                calculateTotalTip(tipValue, numPeople, totalBill)
                break
        }
    })
})

custom.addEventListener('input', () => {
    tipValue = Number(custom.value)
    calculateTotalTip(tipValue, peopleNum, totalBill)
})

reset.addEventListener('click', () => {
    totalBill = 0
    bill.value = ""
    people.value = "1"
    peopleNum = 1
    tipValue = 5
    custom.value = ""
    persontip.textContent = `$ 0.00`
    persontotal.textContent = `$ 0.00`
})

theme.addEventListener('click', () => {
    if (themeStatus === false) {
        document.body.classList.add("dark")
        theme.src = "icon-sun.svg"
        themeStatus = true
    } else {
        document.body.classList.remove("dark")
        theme.src = "icon-moon.svg"
        themeStatus = false
    }
})