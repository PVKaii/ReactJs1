export const ROLE_ADMIN="ROLE_ADMIN"
export const ROLE_MEMBER="ROLE_MEMBER"

export const checkRole= roleCheck =>{
    return JSON.parse(localStorage.getItem("user")).roles.some(role=>role.authority===roleCheck)
}