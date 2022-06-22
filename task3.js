let go = false;
const doing = new Promise((resolve, reject) => {
    if(go) {
        setTimeout(()=>{
            resolve('go vacation!')
        }, 2000)
    }else{
        setTimeout(()=>{
            reject('not going anywhere..')
        }, 2000)
    }
})
doing
.then((param1)=>console.log(param1))
.catch((param1)=> console.log(param1))


let sugar = false;
function coffe() {
    return new Promise((resolve, reject) => {
        if(sugar) {
            setTimeout(() => {
                resolve('good coffe')
            }, 2000)
        }else{
            reject('too sweet')
        }
    })
} 
const taste = coffe()

async function evalCoffe() {
    try {
        const taste = await coffe();
        console.log(taste);
    }catch(err) {
        console.log(err);
    }
}
