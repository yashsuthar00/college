#Demonstrate functions and all categories of functions in C/C++/java/python.

#functions with no return value and no arguments.

a=10
b=20

def sum():
    print("sum is: ",a+b)
    
def sub():
    print("sub is: ",a-b)

def mul():
    print("mul is:",a*b)
    
def div():
    print("div is: ",a/b)
    
    
sum()
sub()
mul()
div()

#function with no return value but with arguments:
    
def sum_no(a,b):
    print("sum is ",a+b)
    
    
def sub_no(a,b):
    print("sub is ",a-b)
    
    
def mul_no(a,b):
    print("mul is ",a*b)
    
def div_no(a,b):
    print("div is ",a/b)
    
sum_no(10,20)
sub_no(10,20)
mul_no(10,20)
div_no(10,20)

#function with return value but no arguments:
    
a=10
b=10

def sum_no():
    c=a+b
    return c
def sub_no():
    c=a-b
    return c
def mul_no():
    c=a*b
    return c
def div_no():
    c=a/b
    return c

ans = sum_no()
print("sum is ",ans)
ans=sub_no()
print("sub is ",ans)
ans=mul_no()
print("mul is ",ans)
ans=div_no()
print("div is ",ans)

#function with both return value and arguments:
    
def sum_no(a,b):
    c=a+b
    return c

def sub_no(a,b):
    c=a-b
    return c

def mul_no(a,b):
    c=a*b
    return c

def div_no(a,b):
    c=a/b
    return c

ans=sum_no(30,20)
print("sum is ",ans)

ans=sub_no(30,20)
print("sub is ",ans)

ans=mul_no(30,20)
print("mul is ",ans)

ans=div_no(30,20)
print("div is ",ans)


