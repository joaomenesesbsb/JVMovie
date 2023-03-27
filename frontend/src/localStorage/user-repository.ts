import { User } from "../models/user";
import { USER_KEY } from "../utils/system";

export function save() {
    const str = JSON.stringify(users);
    localStorage.setItem(USER_KEY, str);
}

export function exist(key: string): boolean {
    if (localStorage.getItem(USER_KEY) === null) {
        return true;
    }
    else return false;
}

let users: User[] = [
    {
        "id" : 1,
        "email" : "maria@gmail.com"
    },
    {
        "id" : 2,
        "email" : "joao@gmail.com"
    },
    {
        "id" : 3,
        "email" : "ana@gmail.com"
    },
    {
        "id" : 4,
        "email" : "lucia@gmail.com"
    },
    {
        "id" : 5,
        "email" : "joaquim@gmail.com"
    }
]