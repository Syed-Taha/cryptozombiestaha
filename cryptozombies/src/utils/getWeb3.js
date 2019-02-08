import Web3 from 'web3'
const getWeb3 = new Promise(function(resolve,reject) {
    var web3js = window.web3
    if(typeof web3js !== 'undefined'){
        console.log('BLOCkCHAIN IS ALREADY INJECTED')
        //resolve
        console.log('Check 1:',web3js)
        console.log('Check 2:',web3js.currentProvider)

        var web3 = new Web3(web3js.currentProvider)
        console.log('Check 3:',web3)

        resolve({
            web3() {
                return web3
            },
            injectedWeb3 : web3.eth.net.isListening
        }) 

    } else{
        console.log('BLOCkCHAIN IS NOT INJECTED')
        //reject
        reject(new Error('Cannot connect to blockchain.Please get blockchain injected into your app'))
    }
})
    .then(result => {
        return new Promise(function (resolve,reject){
            let networkId = result.web3().givenProvider.networkVersion ? result.web3().givenProvider.networkVersion : "1234"
            result = Object.assign({}, result, {networkId})
            resolve(result)
        })
        console.log(result)
    })

    .then(result => {
        return new Promise(function (resolve,reject){
            let selectedAddress = result.web3().givenProvider.selectedAddress ? result.web3().givenProvider.selectedAddress : reject(new Error('Address is not found, Are you logged in?'))
            result = Object.assign({}, result, {selectedAddress})
            resolve(result)
        })
        console.log(result)
    })

getWeb3
.then(result =>{
    console.log('Here is what our function helped load:',result)
})
.catch(error => {
    console.log('Here is an error if blockchain is not loaded properly',error)
})

export default getWeb3;