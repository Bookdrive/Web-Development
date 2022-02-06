let range=7;

for(let i=1;i<=range;i++)
{
    let pattern="";
    for(let j=1;j<=range-i;j++)
    pattern+="   ";
    for(let j=1;j<=i*2-1;j++)
    pattern+=" * ";
    console.log(pattern);
}
for(let i=range-1;i>=0;i--)
{
    let pattern="";
    for(let j=1;j<=range-i;j++)
    pattern+="   ";
    for(let j=1;j<=i*2-1;j++)
    pattern+=" * ";
    console.log(pattern);
}