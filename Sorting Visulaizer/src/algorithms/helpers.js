export function swap(array, i , j){
    let c = array[i];
    array[i] = array[j];
    array[j] = c;

    return array;
}