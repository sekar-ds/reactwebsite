export const fieldValidator = fieldName =>{
    const fieldRegex = /^[a-zA-Z]+$/;
    return fieldRegex.test(fieldName)
}

export const Emailtype = email =>{
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return emailRegex.test(email)
}