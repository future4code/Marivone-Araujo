### EXERCICIO 1
##### a)

* CREATE TABLE Actor ( -- CREAT (Criar) TABLE (Tabela) é o comando mandatório incial que cria a tabela de nome Actor
* id VARCHAR(255) PRIMARY KEY, -- VARCHAR: usada quando não sabemos quantos dados serão armazenados em determinada coluna. Oposta a CHAR, sequência de caracteres de tamanho fixo. 
* name VARCHAR (255) NOT NULL, -- NOT NULL significa que são itens obrigatórios
* salary FLOAT NOT NULL, 
 * birth_date DATE NOT NULL, -- representa uma data (YYYY-MM-DD)
* gender VARCHAR(6) NOT NULL 
); 

##### b) 
SHOW DATABASES;
-- o comando retornou uma lista com as database existentes: "epps-marivone-araujo" e "information_schema"
SHOW TABLES;
-- o comando retorna todas as tabelas existentes. 
#### c)
DESCRIBE Actor;
-- O comando retora as linhas e as colunas de uma tabela.

---------------------------------------
## EXERCICIO 2
#### a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001", "Tony Ramos", 400000, "1948-08-25", "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
 "002", "Glória Pires", 1200000, "1963-08-23", "female"
);

#### b)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", "Glória Pires", 1200000, "1963-08-23", "male"
);

######  "Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'": ele informa que há entrada em duplicidade para a id "002" e não permite a alteração. 

#### c)

INSERT INTO Actor (id, name, salary)
VALUES("003", "Fernanda Montenegro", 300000,"1929-10-19", "female");

######  "Error Code: 1136. Column count doesn't match value count at row 1. Faltou passar como parâmetros  birth_date e gender. Assim, ele aponta que o valor da coluna e da linha não correspondem". 

#### Correção: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000,"1929-10-19", "female");
#### d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES("004", 400000,"1949-04-18","male");
###### "Error Code: 1364. Field 'name' doesn't have a default value". Name tem valor "NOT NULL", ou seja, é obrigatório. Assim, é preciso inserir um nome para que o item seja criado.

#### Correção

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("004", "Antônio de Carvalho Barbosa", 400000,"1949-04-18","male");
#### e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

######  "Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1". Faltou as aspas para a data, que é uma string.
#### Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005","Juliana Paes",719333.33,"1979-03-26","female");

#### f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006","Wagner Moura", 13025.42,"1976-06-26","male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("007","Lázaro Ramos",13025.42,"1978-11-26","male");

---------------------------------------
SELECT * FROM `epps-marivone-araujo`.Actor;

## EXERCICIO 3
#### a)
SELECT * from Actor WHERE gender = "female";

#### b)

SELECT salary from Actor WHERE name = "Tony Ramos";

#### c)

SELECT * from Actor WHERE gender = "invalid";
-- 0 rows returned


---------------------------------------
## Exercício 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#### a)
#### b)

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

#### c)

SELECT * FROM Actor
WHERE name LIKE "%G%";

#### d)

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN  35000000 AND 90000000;

---------------------------------------
## Exercício 5
#### a)

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

#### b)

INSERT INTO Movie (id,  title, synopsis,  release_Date, rating)
VALUES(
  "001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7
);
#### c)
INSERT INTO Movie (id,  title, synopsis,  release_Date, rating)
VALUES(
  "002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.", "2012-12-27", 10
);

#### d)

INSERT INTO Movie (id,  title, synopsis,  release_Date, rating)
VALUES(
  "003", "Dona Flor e seus dois maridos", "Dona flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8
);

#### e)

INSERT INTO Movie (id,  title, synopsis,  release_Date, rating)
VALUES(
  "004", "Bye Bye Brasil", "Bye Bye Brasil é um filme brasileiro de 1979, uma comédia dirigida por Carlos Diegues e considerada por muitos como uma das mais importantes produções da década de 70. Em novembro de 2015 o filme entrou na lista feita pela Associação Brasileira de Críticos de Cinema (Abraccine) dos 100 melhores filmes brasileiros de todos os tempos.", "1980-02-09", 10
);

---------------------------------------
SELECT * FROM `epps-marivone-araujo`.Movie;

## EXERCICIO 6
#### a)

SELECT id, title, rating FROM Movie WHERE id = "004";

#### b)

SELECT * FROM Movie WHERE title = "Bye Bye Brasil";

#### c)

SELECT id, title, synopsis FROM Movie WHERE rating > 7;

---------------------------------------
## EXERCICIO 7

#### a)

SELECT * FROM Movie
WHERE (title LIKE "%VIDA%");

#### b)

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

#### c)

SELECT * FROM Movie
WHERE release_date < CURDATE();

#### d)

SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%");
     



