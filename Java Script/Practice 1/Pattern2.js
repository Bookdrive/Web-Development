let range=5;

for(let i=1;i<=range;i++)
{
    let pattern="";

    for(let j=1;j<=range-i;j++)
    pattern+=" ";
    
    for(let j=1;j<=i;j++)
    pattern+="*";
    console.log(pattern);
}