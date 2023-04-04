let dbUsers = [
    {
        username: "HazimSofian",
        password: "12345",
        name: "Hazim",
        email: "Hazim@utem.edu.com"

    },
    {
        username: "JimLaureth",
        password: "password",
        name: "Laureth",
        email: "Laureth@utem.edu.com"
    },
    {
        username: "Alipjir",
        password: "12345",
        name: "Alip",
        email: "Alip@utem.edu.com"
    }

]

 function login(reqUsername, reqPassword){
     let matchUser = dbUsers.find(
         user => user.username == reqUsername 
     )
     console.log(matchUser)
 }

// function login(reqUsername, reqPassword){
//     let matchUser = dbUsers.find(
//         x => x.username == reqUsername 
//     )
    
//     if(!matchUser) return "User not found!"
//     if(matchUser.password == reqPassword){
//         return matchUser
//     }else{
//         return "Invalid password"
//     }
// }


function register(reqUsername,reqPassword,name,email){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: name,
        email: email
    })
}

//try login
console.log(login("Alipjir", "12345"))
register("Alipjir","12345","Alip","Alip@utem.edu.com")

