# reversing a string 


def reversestring(str_):
    newstr = ''
    i = len(str_)
    while i > 0:
        i -= 1
        newstr += str_[i]
    return newstr

print(reversestring('ball'))
