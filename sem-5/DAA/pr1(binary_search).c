 /*Implementation and Time analysis of linear and binary search algorithms */

// Solution (Binary Search):

#include <stdio.h>
#include <conio.h>

int binary_search(int arr[], int num, int l, int h)
    {
        int mid=(l+h)/2;
        
        if(arr[mid]==num)
            {
                return mid;
            }
            else if(num<arr[mid])
            {
                return binary_search(arr,num,l,mid-1);
            }
            else
            {
                return binary_search(arr,num,mid+1,h);
            }
    }

void main()
    {
        int arr[100],i,j,n,num,search;

        printf("Enter the size of array : ");
        scanf("%d",&n);

        for(i=0;i<n;i++)
        {
            printf("Enter a value : ");
            scanf("%d",&arr[i]);
        }

        printf("Enter the number to be searched : ");
        scanf("%d",&num);

        int l=0;

        search=binary_search(arr,num,l,n);

        printf("Element %d found at %d position",arr[search],search+1);

        getch();
    }