# Crypto Warmup 1

Points: 50

## Category

General skills

## Question

> What is 0x3D (base 16) in decimal (base 10)?

### Hint

> Submit your answer in our flag format. For example, if your answer was '22', you would submit 'picoCTF{22}' as the flag.

## Solution

The hexadecimal number system has 16 symbols (base 16) instead of the decimal system which has 10 numbers (base 10). The hex symbols are 0 1 2 3 4 5 6 7 8 9 A B C D E F where A=10, B=11, C=12. D=13, E=14, and F=15.

Multiply the last digit by 1, Multiply the second to last digit by 16

D x 1 = 13
3 x 16 = 48

13 + 48 = 61

### Flag

`picoCTF{61}`
