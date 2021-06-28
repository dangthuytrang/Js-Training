let stuff = ["adidas", "gucci", "converse", "chanel"];
let option = prompt("What do you want? (C, R, U, D)").toLocaleUpperCase();
if (option === "C") {
    let new_item = prompt("Enter your new stuff");
    stuff.push(new_item)
}
else if (option === "D") {
    let del = Number(prompt("Enter the index of stuff you want to delete : "));
    if (del < 0 || del >= stuff.length) {
        alert("Please other index :");
    } else {
        stuff.splice(del, 1);
    }
}

else if (option === "U") {
    let update = Number(prompt("Enter the index of stuff : "));
    if (update < 0 || update >= stuff.length) {
        alert("Please other index :");
    } else {
        let valueUpdate = (prompt("Enter value to update :"));
        stuff[update] = valueUpdate;
    }
}
else if (option === "R") {
    let read = Number(prompt("Enter the index of stuff : "));
    console.log(stuff[read]);
}
else {
    prompt("What do you want? (C, R, U, D)").toLocaleUpperCase();
}
for (let i = 0; i < stuff.length; i++) {
    console.log(i, stuff[i]);
}