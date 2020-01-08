import axios from 'axios'

export const doA = () => {
    console.log("doA...........");
}

export const addToServer = async (title, targetDate) => {
    const result = await axios.post('http://localhost:8080/todos/', { title, targetDate }).then((response, error) => {
        return response
    })
    return result
}



export const getServerData = async (page) => {
    let res

    // axios는 default가 promise
    await axios.get('http://localhost:8080/todos/list?page=' + (page || 1)).then((response, error) => {
        console.log("1.....");

        res = { content: response.data.content, pageInfo: response.data.pageable }
    })

    console.log("1.5...");
    console.log(res);
    console.log("2....");

    return res
}