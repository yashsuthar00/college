/*Implementation and Time analysis of linear and binary search algorithms */

// Solution (Linear Search):

#include<stdio.h>
#include<conio.h>
void main()
{
int arr[100],i,j,n,num;
printf("Enter the size of array : ");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("Enter a value : ");
scanf("%d",&arr[i]);
}

printf("Enter the number to be searched : ");
scanf("%d",&num);
for(j=0;j<n;j++)
{
if(arr[j]==num)
{
printf("Number is %d at position %d",arr[j],j+1);
break;
}
}
getch();
}


