const addHabitButton = document.getElementById("habitButton");

function addHabit() {
    var node = document.createElement("LI");
    var habit = document.getElementById('newHabit').value;

    var textnode = document.createTextNode(habit);
    node.appendChild(textnode);
    document.getElementById("habits").appendChild(node);

    if (habit != "") {
        let numCheckboxes = 7;
        for (let i = 0; i < numCheckboxes; i++) {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            node.appendChild(x);
        }
    }

    var textBox = document.getElementById('newHabit');
    textBox.value = "";
}

addHabitButton.addEventListener("click", addHabit);