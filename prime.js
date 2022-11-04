//Identify_Prime...//


function checkprime(num){

    let factor = 0;
    for(let i=1 ; i<=num ; i++)
    {
       if(num%i==0)
       {
          factor++;
       }
    }
       if(count==2)
       {
          console.log("Yes");
       }
       else
       {
          console.log("No");
       }
}

checkprime(13)