// TEST DATA

let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)

const about = (foods)=>{
  blah = foods.map((x)=> {
    return `The price of ${x.name} is ${x.price}`
  })
 return blah
}

// [...]

// foods:[{id:number,name:string, price:number},...]

// food: {id:number,name:string, price:number}

/// returns new array with food add

const addFood1=(foods, food)=>{
  let addFood = [...foods, food]
  return addFood
}


// [...]

// foods:[{id:number,name:string, price:number},...]

// id:number,

// name:string, 

// price:number}

/// returns new array with food add

const addFood2 = (foods, id,name,price)=>{
  let addFood = [...foods, {id: id, name: name, price: price}]
  return addFood
}


//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given

const updateFood1=(foods, id, price)=>{
  let update = foods.map((x) => {
    if (x.id === id) {
      return {...x, price: price}
    } 
    return x
  })
  return update

 // Update - Map
}



//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given

const updateFood2=(foods, id, food)=>{
  let update = foods.map((x) => {
    if (x.id === id) {
      return food
    }
    return x
  })
  return update

 }

// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

const deleteFood1 = (foods,id)=>{
  let filteredFood = foods.filter((x) => {
    return x.id != id
  })
  return filteredFood
}


// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

const deleteFood2 = (foods,price)=>{
  return foods.filter((x) => {
    return x.price > price
  })
}