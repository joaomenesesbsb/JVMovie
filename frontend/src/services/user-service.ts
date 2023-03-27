import * as userRepository from "../localStorage/user-repository";

export function saveUsers(){
    return userRepository.save();
}