



import axios from 'axios';

async function getData(userid){
    const {data:usersdata} = await axios("https://jsonplaceholder.typicode.com/users/"+userid);
    const {data:postdata}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+userid);

    
    return{usersdata,postdata};
}
let datas = await getData(1)
console.log(datas)