function solution(s){
    s = s.split('');
    const count_y = s.filter(element => element === 'y' || element === 'Y')
    const count_p = s.filter(element => element === 'p' || element === 'P')

    return count_y.length === count_p.length;
}