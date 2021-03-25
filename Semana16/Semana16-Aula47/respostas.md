## EXERCICIO 1

#### a. Explique o que é uma chave estrangeira

FOREIGN KEY (chave estrangeira) é o elemento que indica que uma determinada propriedade é a mandeira utilizada para relacionar ou referenciar uma tabela com a outra. Essa FOREIGN KEY deve sempre se referenciar a uma PRIMARY KEY da outra tabela. 

#### b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
"001",
"Sessão da tarde",
6,
"001"
);
```
#### c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
"002",
"Mais ou menos",
4,
"007"
);
```
```sql
13:54:48	INSERT INTO Rating (id, comment, rate, movie_id)  VALUES ( "002", "Mais ou menos", 4, "007" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-marivone-araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.187 sec
```
-- Como não existe o "id" na tabela de "movie" ele retorna um erro e não adiciona. 

#### d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

```sql
ALTER TABLE Movie DROP COLUMN rating;
```

#### e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
```sql
DELETE FROM Movie WHERE title = "Se Eu Fosse Você"
```
```sql
0	6	14:19:47 DELETE FROM Movie WHERE title = "Se Eu Fosse Você"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-marivone-araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.172 sec
```
-- Ele aponta que não pode deletar ou atualizar a linha porque há uma foreign key associada. 

## EXERCICIO 2

#### a. Essa tabela é criada para estruturar as informações sobre o elenco de um filme. E ela estará associada ao id dos atores que, por sua vez, integram a tabela de filmes. 

#### b. 
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"001"
)
```
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"002"
)
```
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"1616628275646"
)
```
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"006"
)
```
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"007"
)
```
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"006"
)
```
#### c. 

```sql 
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-marivone-araujo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
#### d. O ator foi deletado.

## EXERCICIO 3

#### a. "On" significa "em", ou seja, é uma condição que limite a informação a ser retornada; se uma condição não é provida, são retornadas combinações de todos os itens das duas tabelas.  

#### b. 
```sql 
SELECT title, movie_id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

## EXERCICIO 4
#### a.
```sql 
SELECT title, movie_id, rate, comment 
FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```
#### b. 
```sql 
SELECT movie_id, title, actor_id FROM Movie 
RIGHT JOIN MovieCast ON movie_id = id;
```
#### c. 
```sql 
SELECT AVG(rate), movie_id, title FROM Movie 
LEFT JOIN Rating ON Movie.id = movie_id
GROUP BY (Movie.id);
```

## EXERCICIO 5
#### a. JOIN significa "juntar". Então, dois JOIN são necessários porque duas tabelas (Actor e Rating) estão sendo unidas a uma principal (Movie). Essa query reune todas as informações das três tabelas.  

#### b.
```sql 
SELECT Movie.id, title,  actor_id, name FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

#### c. Retorna um erro "Error Code: 1054. Unknown column 'm' in 'field list'". Porque em SELECT a query está pedindo para retornar m, mas m não é coluna alguma em nenhuma das tabelas.

#### d.