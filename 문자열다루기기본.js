function solution(s){
    const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?.]/
    const string_pattern = /[a-zA-Z]/
    const blank_pattern = /[\s]/g;
    return s*1 >= 0
        && (s.length === 4 || s.length === 6 )
        && !isNaN(s)
        && !special_pattern.test(s)
        && !string_pattern.test(s)
        && !blank_pattern.test(s);
}