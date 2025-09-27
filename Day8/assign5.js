
$(document).ready(function(){
    $("button").click(function(){
        // reading the data from the user
        let read=$("#t1").val();
        console.log(read);

        // reading the rows from the user
        let row1=parseInt($("#gh").val());
        console.log(row1);

       let div=read.length/row1;
        let partLength=Math.ceil(div);

       for(let i = 0; i < row1; i++){
            let start = i * partLength;
            let end = start + partLength;
            // let var = read.slice(start, end);
            console.log(read.slice(start, end)); // Print each segment
             ($("#pz").val());
        }
       
    });
});