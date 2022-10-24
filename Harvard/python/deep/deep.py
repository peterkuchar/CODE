deep = input("Wahat is the ansqer to the Great Question Of Life, the Universe and Everything? ")

match deep:
    case "42" | "forty-two" | "forty two" | "Forty-Two" | "Forty Two" | "Forty-two" | "Forty two" | "forty-Two" | "forty Two":
        print("Yes")
    case _:
        print("No")