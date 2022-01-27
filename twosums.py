# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

def stringreverse(str) :
    i = len(str) - 1
    newstr = ''
    while i >= 0:
        newstr += str[i]
        i -= 1
        # print(newstr)
    return newstr

print(stringreverse('hello'))
