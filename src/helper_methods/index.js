

export const authenticate = (data) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
    }  
}

export const signout = async () => {
    return new Promise((resolve, reject) => {
        if(typeof window !== 'undefined') {
            localStorage.removeItem('jwt')
            resolve()
        } else {
            console.log('error with signout method')
            reject()
        }
    })
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};


export const getReviewAvg = (ratings) => {
    let sum
    let length = ratings.length
    ratings.reduce((a, b) => {
        sum = a + b
        return sum
    }) 
    let result = (sum / length)
    return result.toFixed(1)
    
}