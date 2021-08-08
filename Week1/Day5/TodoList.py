todoList = []
answer = " "

todoOptions =("""
To Do List
-------------------

1. Add a task
2. Delete a task
3. View tasks


Press q to close program

""")

while answer != 'q':
    answer = input(todoOptions)
    if answer == '1':
        addTask = input("Enter your new task "" ")
        addPriority = input("Enter High, Medium or Low for your priority "" ")
        newTask = addTask + " " + addPriority
        todoList.append(newTask )
        print(todoList) 

    elif answer == '2':
        print("This is your current to do list: ", todoList)
        deleteTask = int(input("Enter the number of the task you would like to delete.")) -1
        del todoList[deleteTask]
        print("Here is your updated to do list ", todoList)

    elif answer == '3':
        taskDict = {}
        taskDict = todoList
    count = 1
    for todo in todoList:
           print("%d: %s" % (count,todoList))


    else: 
        print("Enter a valid option")

    
    