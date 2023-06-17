// setTimeOut function to reverse a string aftera delay of 2 sec
let str="pratik";
var name=prompt("enter name","om");
function rev()
{
   const split=str.split('');
   const reverse=split.reverse();
   const join=reverse.join('');
   console.log(join);
}
 setTimeout(rev,2000);






//another way
// function rev()
// {
//     for(let i=str.length;i>=0;i--)
//     {
//        console.log(str[i]);
//     }
// }
//  setTimeout(rev,2000);
