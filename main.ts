#!/usr/bin/env node
import inquirer from"inquirer";
let systemgenerateno = Math.floor(Math.random()*10+1)
let answer:{
    userguess:number
}=await inquirer.prompt({
    type:"number",
    name:"userguess",
    message:"Guess the number betweeen 1 to 10"
})
if(answer.userguess ===systemgenerateno){
    console.log("You Win")
}else{
    console.log("oops You Loose",systemgenerateno)

}
