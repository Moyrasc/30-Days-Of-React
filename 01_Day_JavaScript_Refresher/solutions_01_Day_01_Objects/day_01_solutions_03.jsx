
// 2º **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(user) {
    for (let i = 0; i < users.length; i++) {
      const person = users[i];
      if (person[username] === user[username]) {
        console.log('The user is already existed');
        break;
      }
      users.push(user);
    };
  }
// b. Create a function called signIn which allows user to sign in to the application
function signIn(user){
    user.isLoggedIn = true
}
signIn(users[4])
// 3ºThe products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
function rateProduct(userId,prod,rate){
    for(let i= 0; i<products.length;i++){
        const produc = products[i];
        if(produc[_id]===prod){
            produc[ratings].push({userId, rate})
            break;
        }
    }
}
// b. Create a function called averageRating which calculate the average rating of a product
function likeProduct(userId, prod) {
    for (let i = 0; i < products.length; i++) {
      const produc = products[i];
      if (produc[_id] === prod) {
        produc[likes].push(userId);
        break;
      }
    }
  }

