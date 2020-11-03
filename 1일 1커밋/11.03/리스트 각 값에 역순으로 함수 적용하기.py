def EaRi(a,b):
    for x in a[::-1]: #역순으로 선택
        b(x) #b함수 적용

a=[1,2,3,4,5,6,7]
print(EaRi(a,print))
