//TODO: 효율성테스트
function solution(no, works) {
    var result = 0;
    works = works.sort();

    while(no > 0){
        let maxNum = Math.max.apply(null, works);
        let idx = works.indexOf(maxNum);
        if(maxNum - 1 < 0){
            break;
        }
        works[idx] = maxNum - 1;
        no -= 1;
    }

    works.forEach(element => {
        element *= element;
        result = result + element;
    });
    return result;
}