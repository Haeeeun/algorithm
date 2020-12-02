function solution(w,h){
    let gcd = 1; //최대공약수

    const min = Math.min(w,h);
    for(let i=min; i>0; i--){
        if((w%i===0) && (h%i===0)){
            gcd = i;
            break;
        }
    }

    //참고: https://velog.io/@sso/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-ouk5urcahz
    const answer = w*h - (w+h-gcd);
    return answer;
}

