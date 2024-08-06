let furniture = ['Table', 'Chairs', 'Couch'];

for ( let index = 0; index < furniture.length; index++) {
    const fur = furniture[index];
    for (let char of fur){
        console.log(char)
    }
    if (index != furniture.length-1){
        console.log("");
    }
}