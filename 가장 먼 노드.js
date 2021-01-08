function solution(n, edge) {
    let answer = Array(n).fill(false);
    let stack = [1];
    let count = 0;

    while(stack.length !== 0){
        for(let i=0; i<stack.length; i++){
            answer[stack[i]-1] = count
        }
        count++
        stack = nextNode(stack, answer, edge)
    }

    const max = Math.max(...answer);
    return answer.filter(element => element === max).length;
}

function nextNode(stack, answer, edge){
    let tempStack = [];
    while(stack.length !== 0){
        const key = stack.pop();

        for(let i=0; i<edge.length; i++){
            if(edge[i][0] === key && answer[edge[i][1]-1] === false){
                tempStack.push(edge[i][1])
                edge.splice(i, 1)
                i--;
            } else if(edge[i][1] === key && answer[edge[i][0]-1] === false){
                tempStack.push(edge[i][0]);
                edge.splice(i, 1)
                i--;
            }
        }
    }
    return tempStack
}