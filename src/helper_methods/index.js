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

export const addItemToCart = (item, count, next) => {
    let cart = []
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }
         cart.push({
            ...item,
            count: count
        })

        cart = Array.from(new Set(cart.map((p) => (p._id)))).map(id => {
            return cart.find(p => p._id === id)
        })

        localStorage.setItem("cart", JSON.stringify(cart))
        next()
    }
}

export const itemTotal = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).length
        }
    }
    return 0
}

export const getCart = () => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }
    }
    return []
}
export const setTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme))
}

export const getTheme = (theme) => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('theme')) {
            return JSON.parse(localStorage.getItem('theme'))
        }
    }
    return theme
}

export const updateItem = (productId, count) => {
    let cart = []
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.map((product, i) => {
            if(product._id === productId) {
                cart[i].count = count
            }
            
        })

        localStorage.setItem('cart', JSON.stringify(cart))
        
       
    }
    
}

export const removeItem = (productId) => {
    let cart = []
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        cart.map((product, i) => {
            if(product._id === productId) {
                cart.splice(cart.indexOf(cart[i]), 1)
            }

         
        })

        localStorage.setItem('cart', JSON.stringify(cart))
    }
    return cart
}


export const CalculateQty = (quantity, sqFtPerBox) => {
    let boxesNeeded = Math.round(quantity / sqFtPerBox)
    return boxesNeeded
}

export const emptyCart = async () => {
    return new Promise((resolve, reject) => {
        if(typeof window !== 'undefined') {
            localStorage.removeItem('cart')
            resolve()
        } else {
            console.log('cart is empty')
            reject()
        }
    })
}

export const read = async (userId, token) => {
    return await fetch(`http://localhost:8000/api/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then((res) => {
        return res.json()
    })
    .catch(err => console.log(err))
}


