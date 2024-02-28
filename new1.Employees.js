function employees (input){
    let name = " "
    let id = 0
for (let i=0; i<input.length; i++){
    let curStudent = input[i]
    name = curStudent;
    id = curStudent.length
    console.log(`Name: ${name} -- Personal Number: ${id}`);
}

}
// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);
