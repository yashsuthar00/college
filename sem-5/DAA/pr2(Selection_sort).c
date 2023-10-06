//Implementation and Time analysis of sorting algorithms: Bubble sort, Selection sort and Quick sort.


//Solution(Selection sort):

#include<stdio.h>

void selection(int a[], int size);
void get_array(int a[], int size);

int main()
{
    int size,i,a[100];

    printf("Enter the size of array : ");
    scanf("%d",&size);

    for(i=0;i<size;i++)
    {
        printf("Enter a : ");
        scanf("%d",&a[i]);
    }
    
    printf("Before sorting: \n");
    get_array(a,size);
    selection(a,size);
    printf("\nAfter sorting: \n");
    get_array(a,size);
    return 0;
}
void selection(int a[],int size)
{
    int i,j,temp,min;

    for(i=1;i<size-1;i++)
    {
        min=i;

        for(j=i+1;j<size;j++)
        {
            if(a[j]<a[min])
            {
                min=j;
            }
        }

        temp=a[min];
        a[min]=a[i];
        a[i]=temp;
    }
}

void get_array(int a[], int size)
{
    int i;
    
    for(i=0;i<size;i++)
    {
        printf("%d ",a[i]);
    }
}