const url ='https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p='
// 'https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck'
// https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p={player's(first)_(last name} seperated by _ or %20


fetch(url)
.then((res)=>res.json())
.then((resJson)=>console.log(resJson))
.catch(err=>console.log(err))