# FOR
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0

for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# Compreensão de lista (list comprehension)

min_rating = 3.0
filtered_restaurants = [
    restaurant
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# A compreensão de listas também funciona com listas de strings. A seguinte cria uma nova lista de strings com os nomes que contém a letra ‘a’.
names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']


# O exemplo a seguir usa uma compreensão de listas para criar uma lista com o quadrado dos números entre 1 e 10.
quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


# WHILE

# Com o while nós podemos executar um conjunto de declarações enquanto a condição for verdadeira.
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next


# ENUMERATE

# Porém, às vezes, pode acontecer de você querer uma variável que muda em cada iteração do loop. Em vez de criar e incrementar uma variável você mesmo, você pode usar enumerate() do Python para obter um contador e o valor do iterável ao mesmo tempo!

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]


# Você também pode desestruturar (unpack) os itens da lista ou tupla:
languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# Saída:
# 0 - Python
# 1 - Java