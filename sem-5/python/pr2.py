#demonstrate array(insertion, deletion, arithmetic operations)

arr = [1,2,3,4,5]
arr.append(6)
print("after insertion using append: ,"arr)
arr. insert(2,9)
print("After insertion using insert:", arr)

arr=[1,2,9,3,4,5,6]
arr.remove(9)
print("After deletion using remove: ", arr)

arr.pop(1)
print("after deletion using pop", arr)

arr1=[1,2,3]
arr2=[4,5,6]

sum-arr=[arr1[i]+arr2[i] for i in range (len(arr1))]
print("sum of arrays: ", sum_arr)

sub_arr = [arr1[i]-arr[i] for i in range (len(arr1))]
print("sub of arrays: ", sub_arr)

scalar = 2
mult_arr = [elem * scalar for elem in arr1]
print("multiplication of an array1 by a scalar =" mult_arr)

div_arr=[elem/scalar foe elem in arr2]
