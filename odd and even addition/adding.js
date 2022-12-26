/*var n =parseInt(prompt("Enter the number"));
sum = 0
while(n>0)
{
	var rem = n%10
	sum = sum+rem;
	n=(n-rem)/10;
}
console.log(sum)*/

/*var n =parseInt(prompt("Enter the number"));
sum = 0
sum1 = 0
while(n>0)
{
	var rem = n%10
	if(rem%2==0)
	{
		sum=sum+rem;
	}
	else
	{
		sum1=sum1+rem;
	}
	n=(n-rem)/10;
}
console.log(sum,sum1)*/

/*var number = parseInt(prompt("Enter the number:"));
var temp = 0;
while(number>0)
{
	rem=number%10;
	temp+=rem;
	number=(number-rem)/10;
	if(number%10==0)
	{
		document.write(rem);
	}
	else
	{
		document.write(rem+"+");
	}
}
document.write("="+temp);*/

/*function table(){
var num=prompt("Enter the number");
var i=0;
document.write('<table border="3">');
for(i=1; i<=20; i++)
{
document.write("<tr><td>"+num+"X"+i+"="+num*i+"</td></tr>");
}
}*/

var num = parseInt(prompt("Enter the number"));
var temp = num;
var sum = 0;
while(temp>0)	
{
var digit=temp%10;
sum=sum+digit**3;
temp=parseInt(temp/10);
}
if(sum==num)
{
	alert("The number "+ sum+" is armstrong number");	
}
else
{
	alert("The number "+ sum+" is not armstrong number");	
}