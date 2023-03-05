#!/usr/bin/env node
var Prompt=require("prompt-sync")({sigint:true});
let Idlist:number[]=[];
let Tasklist:string[]=[];
let Titlelist:string[]=[];
let statuslist:string[]=[];
let choice:string="";
let numberOfTasks:number=-1;
let message:string="";
do{
console.log("Menu\nEnter 1 for adding task\nEnter 2 for deleting task\nEnter 3 for updating task \nEnter 4 mark it as completed\nEnter 5 for checking all the tasks\nEnter 0 for exit");
choice=Prompt("The choice is: \t");
if(choice=="1")
{
    console.log("Enter your task:\n");
    message=Prompt("Title: \t");
    Titlelist.push(message);
    
   
    message="";
    message=Prompt("Message: \t");
    Tasklist.push(message);

    numberOfTasks++;

    console.log("Task is added to list");
    Idlist[numberOfTasks]=numberOfTasks;
    console.log("Task ID: \t"+Idlist[numberOfTasks]+"\n");
    console.log("Task Title: \t "+Titlelist[numberOfTasks]);
    console.log("Task: \t"+Tasklist[numberOfTasks]);
    statuslist[numberOfTasks]="Not Completed";
    console.log("Status: \t"+statuslist[numberOfTasks]);
}
else if(choice=="2")
{
    let ID:number=parseInt(Prompt("Enter the ID of the task\n"));
    let Flag:boolean=false;
    for(let i=0;i<numberOfTasks;i++)
    {
        if(ID==Idlist[i])
        {
            Flag=true;
            Idlist.splice(i,1);
            Tasklist.splice(i,1);
            Titlelist.splice(i,1);
            statuslist.splice(i,1); 
            console.log("Your task is deleted successfully!");
        }
    }
    if(Flag==false)
    {
        console.log("Your task is not found!");
    }
}
else if(choice=="3")
{
let ID:number=-1;
ID=parseInt(Prompt("Enter the ID of the task\t"));
let Flag:boolean=false;
for(let i=0;i<=numberOfTasks;i++)
{
    if(ID==Idlist[i])
    {
        Flag=true;
        console.log("Your Task is: \n");
        console.log("Task ID: \t"+Idlist[i]+"\n");
        console.log("Task Title: \t "+Titlelist[i]);
        console.log("Task: \t"+Tasklist[i]);
        console.log("Status: \t"+statuslist[i]);

        console.log("Update your task\n");  
        message="";
        message=Prompt("Message: \t");
        Tasklist[i]=message;
        console.log("Your task is updated!");

    }
}
if(Flag==false)
{
    console.log("Your task is not found!");
}
}
else if(choice =="4")
{
    let ID:number=-1;
    ID=parseInt(Prompt("Enter the ID of the task\t"));
    let Flag:boolean=false;
    for(let i=0;i<=numberOfTasks;i++)
{
    if(ID==Idlist[i])
    {
        Flag=true;
        console.log("Your Task is: \n");
        console.log("Task ID: \t"+Idlist[i]+"\n");
        console.log("Task Title: \t "+Titlelist[i]);
        console.log("Task: \t"+Tasklist[i]);
        console.log("Status: \t"+statuslist[i]);

        console.log("Update the status of the task\n");
        statuslist[i]=Prompt("Status: \t");
        console.log("Your task is completed!");

        console.log("Your Task is: \n");
        console.log("Task ID: \t"+Idlist[i]+"\n");
        console.log("Task Title: \t "+Titlelist[i]);
        console.log("Task: \t"+Tasklist[i]);
        console.log("Status: \t"+statuslist[i]);

    }
}
if(Flag==false)
{
    console.log("Your task is not found!");
}
}
else if(choice=="5")
{
    for(let i=0;i<Tasklist.length;i++)
    {
        console.log("Task ID: \t"+Idlist[i]+"\n");
        console.log("Task Title: \t "+Titlelist[i]);
        console.log("Task: \t"+Tasklist[i]);
        console.log("Status: \t"+statuslist[i]);
    }
}
else if(choice=="0")
{
    console.log("Thank you for using this program!");
}
else
{
    console.log("Please enter the right choice!");
}
}while(choice!="0");