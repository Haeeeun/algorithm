function solution(n, m){
    var answer = 0
    for(let i = n; i <= m; i++){
        let numToString = i.toString().split('').reverse().join('');
        if(i == numToString){
            answer++
        }
    }
    return answer
}