//Implementation and Time analysis of sorting algorithms: Bubble sort, Selection sort and Quick sort.


//Solution(Bubble sort):

#include<stdio.h>

void bubble(int a[], int size);
void get_array(int a[], int size);

int main()
    {
        int size,a[100],i;

        printf("Enter the size of the array : ");
        scanf("%d",&size);
        
        for(i=0;i<size;i++)
        {
            printf("Enter a : ");
            scanf("%d",&a[i]);
        }

        printf("Array before sorting : \n");
        get_array(a,size);
        bubble(a,size);
        printf("\nArray after sorting : \n");
        get_array(a,size);
        return 0;
    }
    
void bubble(int a[], int size)
    {
    int i,j,temp;

    for(i=0;i<size-1;i++)
        {
        for(j=0;j<size-i-1;j++)
            {
                if(a[j+1]<a[j])
                {
                    temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
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