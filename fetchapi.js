fetchRequest = async(url) => {
    const response = await fetch(url,{mode:'no-cors'})
    return response.json()
}
