function algoAsinc() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let n = Math.random()
            if (n < 0.5) {
                // OK
                resolve(`Acierto ${n}`)

            } else {
                // Error
                reject(new Error(`Error ${n}`))
            }


        }, 2000)
    })
}
let resultado
algoAsinc()
.then(
    (response) => { 
        resultado = response
        console.log(resultado)
    }
)
.catch(
    (error) => {
        console.log(error.message)
    }
)
