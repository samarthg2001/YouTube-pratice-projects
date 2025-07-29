
list_number=int(input("Enter the number of list : "))
my_list=[]
flag=False
for i in range(list_number):
    my_list.append(int(input(f"enter the {i} element of list value:  ")))

search_element=int(input("Enter the number the element need to find"))
count=0
for i ,j in enumerate(my_list):
    if j==search_element:
        print(f"{search_element}element found at {i} index ")
        count +=1
        flag=True
    

if flag==True:
        print(f"total {count} element are in list")
else :
        print(f"{search_element} is not entered in list")    