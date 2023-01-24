export const addUser=(user)=>{
    return {type:"Add_user",payload:user}
}
export const updateUser=(newser)=>{
    return {type:"Update_user",payload:newser}
}
export const deleteUser=(id)=>{
    return {type:"Delete_user",payload:id}
    
}


