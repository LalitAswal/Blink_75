#solution 1 


def dup(arr):
    check_array =[]
    for x in range(len(arr)):
        if(arr[x] in check_array):
            print(arr[x])
            print(check_array)
            return True
        else:
            check_array.append(arr[x])
    return False

print('dublicate',dup([1,2,3,4,5]))
print('dublicate',dup([1,2,3,4,4,5,6,343,3,3]))        