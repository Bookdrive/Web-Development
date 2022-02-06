let low=2,high=20;
for(let i=low;i<=high;i++)
{
    let isPrime=true;
    for(let j=2;j*j<=i;j++)
    {
        if(i%j==0)
        {
            isPrime=false;
            break;
        }
    }
    if(isPrime)
    {
        console.log(`${i} -> Prime`);
    }
    else
    {
        console.log(`${i} -> Not Prime`);
    }
}