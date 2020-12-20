function solution(line) {
    let stack = [line];
    let answer = 0;

    while (true) {
        answer++;
        if (line === '1') break;
        console.log('stack', stack);
        let temp = stack.pop();
        if (temp !== 1) {
            stack.push(temp - 1);
            stack.push(1);
        } else {
            let sum = 2;
            while (stack.length !== 0 && stack[stack.length - 1] === 1) {
                stack.pop();
                sum++;
            }

            if (stack.length === 0 || stack === []) {
                break;
            }

            let pivot = stack.pop() - 1;
            stack.push(pivot);
            while (sum > pivot) {
                stack.push(pivot);
                sum -= pivot;
            }

            stack.push(sum);
        }
    }

    return answer;
}

console.log(solution(6))
