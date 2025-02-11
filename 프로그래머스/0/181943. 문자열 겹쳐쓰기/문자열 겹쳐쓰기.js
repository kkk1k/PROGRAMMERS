function solution(my_string, overwrite_string, s) {
    var answer = '';
    return my_string.slice(0,s).concat(overwrite_string).concat(my_string.slice(s+overwrite_string.length));
}