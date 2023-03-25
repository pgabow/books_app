const prepareData = (data) => {
    // console.log(data)
    if(data) {
        return data.join(', ')
    }
}

export default prepareData