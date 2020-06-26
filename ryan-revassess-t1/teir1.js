

const a = (param) =>{
    return typeof param;
}



const b = (...args)=>{
    let sum = 0
    args.forEach(a => {
        sum+=a;
    });
    return sum;
}


const c = (arr)=>{
    let sum = 0;
    arr.forEach(a=>{
        sum+=a;
    });
    return sum;
}

const d = (num) =>{
    const strArr = num.toString().split('');
    const len = strArr.length;
    let sum = 0;
    strArr.forEach(n=>{
        sum+=Math.pow(n,len);
    })
    return sum===num;
}

console.log(a(1));
console.log(b(1,2,3,4,5));
console.log(c([1,2,3,4,5]));
console.log(d(44));