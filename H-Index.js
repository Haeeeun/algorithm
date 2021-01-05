function solution(citations) {
    let answer = [];

    for(let i=0; i<=citations.length; i++){
        answer.push(check_h_index(i, citations));
    }

    return Math.max(...answer);
}

function check_h_index(element, citations){
    let use_count = 0;
    let other_count = 0;
    for(let i=0; i<citations.length; i++){
        citations[i] >= element ? use_count++ : other_count++
    }

    return use_count >= element && other_count <= element ? element : 0;
}