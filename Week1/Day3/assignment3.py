numberEntered = int(input("Enter a number"))
if ((numberEntered % 3 == 0) and (numberEntered % 5 == 0)):
    print("Fizz Buzz")
elif(numberEntered % 5 == 0):
    print("Buzz")
elif(numberEntered % 3 == 0):
    print("Fizz")


