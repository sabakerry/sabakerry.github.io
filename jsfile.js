/**
 * @Author: mac
 * @Date:   2021-04-27T10:14:28+03:00
 * @Last modified by:   mac
 * @Last modified time: 2021-04-27T14:10:04+03:00
 */

var inputs = Array.from(document.querySelectorAll("[required]"));

function checkForPrevs(index) {
    let st = "", labels = [];
    for (let i = 0; i < index; i++){
        if (inputs[i].value === "") {
            labels.push(getLabelText(inputs[i].id));
        }
    }
    if (labels.length > 0) {
        st = "Please fillout the required previous field(s):\n\n";
        st += labels.join("\n");
    }
    return st;
}


function getLabelText(id) {
    return document.querySelector(`label[for='${id}']`).innerText;
}


inputs.forEach((item, i) => {
    item.addEventListener("focus", (event) => {
        let st = checkForPrevs(i);

        if (st !== "") {
            alert(st);
            item.blur();
        }
        item.style.borderColor = "none";
    })

    item.addEventListener('focusout', () => {
        if (item.value !== "") {
            item.style.borderColor = "black"
        }
    })
})


document.querySelector("input[type='submit']").addEventListener('click', (event) => {
    var notFilled = [];

    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value === "") {
            notFilled.push(getLabelText(inputs[i].id));
            inputs[i].style.borderColor = "red";
            inputs[i].blur();
        }
    }

    if (notFilled.length > 0) {
        alert(`These required field(s) are not filled!\n\n${notFilled.join("\n")}`);
    }
})


document.querySelector('[type="reset"]').addEventListener('click', () => {
    document.querySelector('form').reset();
})


document.querySelector("[type='save']").addEventListener('click', () => {
    let username = document.querySelector("[type='email']").value;
    if (username !== "") {
        username = username.split("@")[0];
        alert(`The application of ${username} is saved!`);
    }
    else {
        alert("Error: Email not entered!")
    }
})
