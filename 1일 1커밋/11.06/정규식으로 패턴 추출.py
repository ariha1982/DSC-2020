import re
x='From: Using the : character'
y=re.findall('^F.+?:',x)
print(y)

a='From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008'
b=re.findall('\S+@\S+',X)
print(b)
