// Gordon Bosley  CSC 515  Assignment 3 part 1
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function displayWall(type)
{
    if(type == "nowall")
    {
        noWall('wall');
    }
    else if(type == "squarewall")
    {
        makeSquare('square', 'wall');
    }
    else if(type == "triangularwall")
    {
        makeTriangle('triangle', 'wall');
    }
}

function noWall(div)
{
  var str = "<h2>No Wall Selected!</h2>";
	var divElement = document.getElementById(div);
	divElement.innerHTML = str;
	return str;
}

function makeSquare(n, div)
{
  var str = makeSquareTable(n);
  var divElement = document.getElementById(div);
  divElement.innerHTML = str;
}

function makeSquareTable(n)
{
  var str = "<h2>Square Wall</h2><table>";
  for (k = 0; k < 5; k++)
    str += makeSquareTableEntry(k);
  str += "</table>";
  return str;
}

function makeSquareTableEntry(index)
{
   var str = "<tr>";
   for(x=0; x<5; x++){
     str += "<td> <input type = 'text' style='background-color:red'  \n\
        id = '" + x + "' size = '5' />";
   };
   str += "</tr>";
   return str;
}

function makeTriangle(n, div)
{
  var str = makeTable(n);
  var divElement = document.getElementById(div);
  divElement.innerHTML = str;
}

function makeTable(n)
{
  var str = "<h2>Triangle Wall</h2><table>";
  for (k = 0; k < 5; k++)
    str += makeTableEntry(k);
  str += "</table>";
  return str;
}

function makeTableEntry(index)
{
   var str = "<tr>";
   for(x=0; x<index+1; x++){
     str += "<td> <input type = 'text' style='background-color:red'\n\
         id = '" + x + "' size = '5' />";
   };
   str += "</tr>";
   return str;
}
