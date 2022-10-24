deep = input("Wahat is the ansqer to the Great Question Of Life, the Universe and Everything? ")

match deep.lower().strip():
    case "42" | "forty-two" | "forty two":
        print("Yes")
    case _:
        print("No")