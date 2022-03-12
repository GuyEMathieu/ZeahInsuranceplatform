

export const stringifyAddress = (address, states) =>{
    if(address){
        return `${address.streetAddress}, ${address.city}, ${address.state}, ${address.zipcode}`
    }
}