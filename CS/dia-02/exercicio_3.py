import random

def retrieve_words(file):
    return [word.strip() for word in file]


def word_game(list_words):
    random_word = random.choice(list_words)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    print(scrambled_word)
    first = input("Primeira tentativa: ")
    if first == random_word:
        print("Você ganhou!")
        return
    second = input("Segunda tentativa: ")
    if second == random_word:
        print("Você ganhou!")
        return
    third = input("Terceira tentativa: ")
    if third == random_word:
        print("Você ganhou!")
        return
    print("Você perdeu!")
    
with open("words.txt") as file:
    words = retrieve_words(file)
    
word_game(words)