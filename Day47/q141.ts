// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript


async function fetchData() {
    let fetchSomething = new Promise((res, rej)=>{
        res("Promise resolved")
    })
    let data = await fetchSomething
    console.log(data)
}

fetchData()