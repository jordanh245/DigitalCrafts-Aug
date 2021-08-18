
class GroceryStore:
    def __init__(self, name, address):
        self.name = name
        self.address = address





class Items:
    def __init__(self, name, price, quantity):
        self.name  = name
        self.price = price
        self.quantity = quantity


class ToBuy:
    def __init__(self):
        self.contents = []







userInput = ""
allStores = []
allCarts = []

while userInput != 'x':
    userInput = int(input("""
Press 1 to create a list
Press 2 to add an item to a list
Press 3 to view your lists
Press q to quit"""))

    if userInput == 1:
        storeName = input("What is the name of the store?")
        storeAddress = input("What is the store's address?")
        groupStore = GroceryStore(storeName, storeAddress)
        allStores.append(groupStore)




    if userInput == 2:
        cart = ToBuy()
        itemName = input("What is the name of your item?")
        itemPrice = input("What is the price of the item?")
        itemQuantity = input("What is the quantity?")
        intoItems = cart(itemName, itemPrice, itemQuantity)
        cart.contents.append(intoItems)
        allCarts.append(cart)

    if userInput == 3:
        for bag in allCarts:
            for content in cart.contents:
                print(content.name)
                print(content.price)
                print(content.quantity)

    