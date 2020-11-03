def difference(a,b):
    nb = set(b) #중복값 제거
    return [item for item in a if item not in nb] #nb에 없는 a의 자료값만 따로 모아 리스트 만들기

a=[3,4,5,3,5,6,4,6,2,7,34]
b=[3,4,4,6,7,5,24,64]
print(difference(a,b))
