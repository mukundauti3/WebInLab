import { Component } from "react";

export default class UserValue extends Component
{
   constructor()
   {
    super();
   }

   Uppercase(e)
   {
    console.log("UppperCase value")
    
    const d = e.target.value.toUpperCase();
    console.log(d);

   // console.log("Lowercase value")
    
   // const f = e.target.value.toLowerCase();
   // console.log(f);

   }

   LowerCase(e)
   {
    console.log("UppperCase value")
    const g = e.target.value.toLowerCase();
    console.log(g);
   }

   render()
   {

    return (<>
    
    <label>Enter Your Name:-</label>
        <input type="text" onBlur={this.Uppercase} onClick={ this.LowerCase} id="t1" placeholder="Enter your name"/><br/><br/>
        <input type="button" value="Uppercase" onClick={this.Uppercase} />
        <input type="button" value="Lowercase" onClick={this.LowerCase}/>
    </>)
   }
}

