/**
 * @Author: mac
 * @Date:   2021-04-27T10:14:28+03:00
 * @Last modified by:   mac
 * @Last modified time: 2021-04-27T14:03:53+03:00
 */



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

/**
 * returns label text of the corresponding input.
 */
function getLabelText(id) {
    return document.querySelector(`label[for='${id}']`).innerText;
}

/**
 * Adding event listeners for every
 * required fields on focus and focusout.
 */
inputs.forEach((item, i) => {
    item.addEventListener("focus", (event) => {
        let st = checkForPrevs(i);
        // if previous required fields not filled then give an alert message
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

/**
 * when submit button is clicked, gives alert message when
 * any of the required fileds is not filled.
 */
document.querySelector("input[type='submit']").addEventListener('click', (event) => {
    var notFilled = [];

    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value === "") {
            notFilled.push(getLabelText(inputs[i].id));
            // highlight the empty required fields
            inputs[i].style.borderColor = "red";
            inputs[i].blur();
        }
    }

    if (notFilled.length > 0) {
        alert(`These required field(s) are not filled!\n\n${notFilled.join("\n")}`);
    }
})

/**
 * On clicking reset button,
 * clears the form.
 */
document.querySelector('[type="reset"]').addEventListener('click', () => {
    document.querySelector('form').reset();
})

/**
 * When save button is clicked, if valid
 * shows message that the application is
 * saved along with the username. Else,
 * alerts with error message.
 */
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
