//Implementation and Time analysis of factorial program using iterative and recursive methods.

//solution of factorial(using recursive method):

#include <stdio.h>

int factorial(int n)
{
    if(n==0)
    {
        return 1;
    }
    else
    {
        return(n*factorial(n-1));
    }
    }
    
int main()
{
    int num, i,fact;
    
    printf("Recursive Method : \n");
    printf("Enter a number : ");
    scanf("%d",&num);

    fact = factorial(num);
    printf("The factorial of %d is %d",num,fact);
    return 0;
}