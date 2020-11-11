function clickme()
{
var x = prompt("enter your name");
document.getElementById('555').innerHTML = "welcome  "+x ;
}






var productsContainer = [];

var inps = document.getElementsByClassName("form-control");

function addproduct()
{
    var productName = document.getElementById("productNameInput").value ;
    var productNumber = document.getElementById("productNumberInput").value ;
    var productPrice = document.getElementById("productPriceInput").value ;

    
    var product = 
    {
        name : productName ,
        number : productNumber ,
        price : productPrice
    }

    productsContainer.push(product);

/* validation */

    if(productName==''||productName==' ')
{
    window.alert("product name is invalid");
}
else if(productNumber===''||productNumber===' '||productNumber==String)
{
    window.alert("product num is invalid");

}
else if(productPrice===''||productPrice===' '||productPrice===String)
{
    window.alert("product price is invalid");

}
else{
    window.alert("product store successfully");

}



    displayData()

}




function displayData(){


var temp = "";
for(var i=0; i<productsContainer.length ;i++ )
{
    temp +="<tr><td>"+i+"</td><td>"+productsContainer[i].name+"</td><td>"+productsContainer[i].number+"</td><td>"+productsContainer[i].price+"</td><td>"+(productsContainer[i].number+productsContainer[i].price)+"</td><td><button class'btn2' onclick'delbtn()'> delete </button></td></tr>"
}

document.getElementById("tableBody").innerHTML = temp;

}



function clearForm()
{
for(var i=0 ; i<inps.length ; i++)
{

    inps[i].value = "";
}
}




 function delbtn()
 {
    var element = document.getElementById(tableBody);
    element.parentNode.removeChild(element);
 

 var index, table = document.getElementById('table1');
 for(var i = 1; i < table.rows.length; i++)
 {
     table.rows[i].cells[5].onclick = function()
     {
         var c = confirm("do you want to delete this row");
         if(c === true)
         {
             index = this.parentElement.rowIndex;
             table.deleteRow(index);
         }
         
         //console.log(index);
     };
     
 }

}







