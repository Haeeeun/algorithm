function solution(s) {
    s = s.split('');
    s.sort((a,b) => (a < b) - (a > b))
    return s.join('');
}