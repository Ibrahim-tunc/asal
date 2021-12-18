
const argumens = process.argv.slice(2)

function asal (low_num, high_num ) {
    for(i= low_num; i<=high_num; i++) {
        let flag=true
        for(j=2 ; j<i; j++){
            if(i % j === 0) {
                flag=false
            }
        }
        if(flag){
            console.log(i)
        }
    }
}


asal(Number(argumens[0]) , Number(argumens[1]))

