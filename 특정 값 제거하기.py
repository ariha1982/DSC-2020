def FilRem(lst):
    return list(filter(None, lst))

a=[2,5,4,'f', 'd', '', False]
print(FilRem(a))
