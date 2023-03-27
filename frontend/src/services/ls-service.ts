export function exist(key: string): boolean {
    if (localStorage.getItem(key) === null) {
        return true;
    }
    else return false;
}