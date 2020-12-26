function solution(files) {

    files.sort((a,b) => {
        let objectA = slice(a);
        let objectB = slice(b);

        return objectA.head < objectB.head ?
                -1 : objectA.head > objectB.head ?
                1 : objectA.number - objectB.number
    })

    return files;
}

function slice(string){
    let Object = {
        head: '',
        number: '',
    };
    string.split('');
    for(let i=0; i<string.length; i++){
        if( (isNaN(string[i]) || string[i] === ' ') && Object.number === ''){
            Object.head += string[i].toLowerCase();
        } else if(!isNaN(string[i])){
            Object.number += string[i];
        } else {
            break;
        }
    }
    return Object
}