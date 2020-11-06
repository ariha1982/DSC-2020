import re

hand=open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    if line.startswith('^From:',line):
        print(line)
