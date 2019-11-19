const createParams = (query) => {
    if(!query) return {}

    let params = {}

    let queryArray = query.split("?")[1]


    let finalQuery = queryArray.split("&&")

    let finalQueryArray = finalQuery.map(element => {
        return element.split("=")
    })

    finalQueryArray.forEach(element => {
        params[element[0]] = element[1]
    });

    return params

}

export default createParams;