def  compleng(lst):
    return len(lst) == len(set(lst)) #중복되는 숫자가 있으면 제거

a = [ 1, 4, 5, 20, 44, 13, 45]
b = [ 1,4,4, 5, 5, 20, 45, 44]

print(compleng(a))
print(compleng(b))
