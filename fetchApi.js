//fetch is javascript inbuilt api which is used to make http request (GET , POST ,PUT ,PATCH ,DELETE) to server
// it return the promise to Response object 

// difference between axios and fetch 
// axios is external library which automatically parse the json 

 async function getData(){
 const response = await fetch('https://dummyjson.com/users');

 const data = await response.json();

 console.log(data);
 
 
}

getData();