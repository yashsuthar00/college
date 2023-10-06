//Implementation and Time analysis of sorting algorithms: Bubble sort, Selection sort and Quick sort.


//Solution(Quick sort):

#include <stdio.h>

int partition(int arr[], int low, int high)
{
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j < high; j++)
    {
        if (arr[j] <= pivot)
        {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void array_op(int arr[], int size)
{
    for (int i = 0; i < size; ++i)
    {
        printf("%d ",arr[i]);
    }
    printf("\n");
}

int main() 
{
    int n,i,a[100];

    printf("Enter the size of array : ");
    scanf("%d",&n);

    for(i=0;i<n;i++)
    {
        printf("Enter a : ");
        scanf("%d",&a[i]);
    }

    printf("Quick Sort : \n");
    printf("Array before Sorting: \n");
    array_op(a, n);
    quickSort(a, 0, n - 1);
    printf("Array after Sorting: \n");
    array_op(a, n);
}
