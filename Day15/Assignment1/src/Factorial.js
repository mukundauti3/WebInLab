function Factorial(prop)
{

    let factorial=1
    let num=parseInt(prop.num1);

    for(let i=1;i<=num;i++)
    {
        factorial*=i;
    }

    return <>
        <h1>call from Factorial function component </h1><br/><p>Factorial is :-</p>  {factorial}
    </>
}

export function Calculater(prop)
{
    
    let num=Number(prop.num2);
    let num2=Number(prop.num3);
    let operation=prop.operation;
    var add="Not call yet";
    var sub="Not call yet";
    var mul="Not call yet";
    var Div="Not call yet";
    if(operation=="Addition")
    {
        add=num+num2;
    }

    if(operation=="Subtraction")
    {
        sub=num-num2;
    }

    if(operation=="Multiplication")
    {
        mul=num*num2;
    }

    if(operation=="Division")
    {
        Div=num/num2;
    }
    return <>
        <h1>Call from Calculator function</h1>
        <p>Addition is :- {add}</p>
        <p>Subtraction is :- {sub}</p>
       <p>Multiplication is :- {mul}</p>
        <p>Division is :- {Div}</p>  
    </>
}


export default Factorial;