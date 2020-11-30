//효율성테스트
function solution(s)
{
    var answer = 0;
    s = s.split('');
    
    while(s.length > 0){
        s = removeDuplication(s);
        if(s === 'end'){
            break;
        }
    }
    
    if(s.length === 0){
        answer = 1;
    }
    
    return s.length === 0 ? 1:0;
}

function removeDuplication(array){
    let isNotDuplication = true;
    for(let i=0; i<array.length; i++){
        if(array[i] === array[i+1]){
            array.splice(i,2);
            isNotDuplication = false;
            break;
        }
    }
    return isNotDuplication ? 'end' : array;
}