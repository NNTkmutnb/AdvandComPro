let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

for (let ch_1 of values1) {
    for (let ch_3 of values3) {
        if (ch_1 === ch_3) {
            console.log(ch_1, ch_3);
        }
    }
}

for (let ch_1 of values1) {
    for (let ch_2 of values2) {
        if (ch_1 === ch_2) {
            console.log(ch_1, ch_2);
        }
    }
}

for (let ch_2 of values2) {
    for (let ch_3 of values3) {
        if (ch_2 === ch_3) {
            console.log(ch_2, ch_3);
        }
    }
}