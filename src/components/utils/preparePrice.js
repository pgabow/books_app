const preparePrice = (price, free) => {
    if(price){
    return `Цена: ${Math.floor(price)} руб`
    } else if(free) {
        return free
    }
    
}

export default preparePrice