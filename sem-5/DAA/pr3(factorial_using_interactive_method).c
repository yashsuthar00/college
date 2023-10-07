//Implementation and Time analysis of factorial program using iterative and recursive methods.

//solution of factorial(using iteractive method):

#include <stdio.h>
int main()
{
    int num, i;
    int fact=1;

    printf("Iterative Method");
    printf("Enter a number : ");
    scanf("%d",&num);

    for(i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    printf("The factorial of %d is %d",num,fact);
    return 0;
}