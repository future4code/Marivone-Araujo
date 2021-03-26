## Exercício 1

##### a)
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
-- O Comando exclui a coluna "salary".

##### b)
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
-- O comando altera o título da coluna de "gender" para "sex". 
##### c)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
-- O comando altera o VARCHAR em "gender" de 6 para 255 caracteres. 

##### d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres 
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercício 2
##### a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
```sql
UPDATE Actor
SET 
name = "Moacyr Franco", 
birth_date = "2020-02-10"
WHERE id = "003";
```

##### b)
```sql
UPDATE Actor
SET 
name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
```sql
UPDATE Actor
SET 
name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```
##### c)
```sql
UPDATE Actor
SET 
name = "Juliana Couto Paes",
birth_date = "1979-03-26",
salary = 600000,
gender = "female"
WHERE id = "005";
```
##### d)
-- Tentei atualizar o id "012", que não existe com o comando: 
```sql
UPDATE Actor
SET 
name = "Juliana Couto Paes"
WHERE id = "012";
```
--Ele me deu um status positivo, mas não realizaou qualquer alteração: 

--15:22:03	UPDATE Actor SET  name = "Juliana Couto Paes" WHERE id = "012"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.172 sec

## Exercício 3
##### a) --A atriz Fernanda Motenegro foi alterada no Exercicio 2 letra a), mas rodei a query assim mesmo para ver a resposta.

--15:34:56	DELETE FROM Actor WHERE name = "Fernanda Montenegro"	0 row(s) affected	0.171 sec

##### b)
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```
--15:53:03	DELETE FROM Actor WHERE  gender = "male" AND  salary > 1000000	0 row(s) affected	0.187 sec

##### c) 

## Exercício 4
##### a)
```sql
SELECT MAX(salary) FROM Actor;
```
##### b)
```sql 
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
##### c)
```sql  
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
-- O resultado deveria ter sido 2, porque há apenas 2 atrizes do sexo feminino, mas como não tinha alterado o gender do id 003 (item 2, a), que é um homem, o resultado acabou sendo 3
##### d)
```sql   
SELECT SUM(salary) FROM Actor;
```

## Exercício 5
##### a)
```sql  
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```
-- Essa query agrupa por gênero, ou seja, agrupa em relação à coluna "gender" da tabela. Assim, o resultado foram duas linhas: uma para male e outra para female.

##### b)
```sql  
SELECT id, name FROM Actor
ORDER BY name DESC;
```
##### c)
```sql  
SELECT * FROM Actor
ORDER BY salary;
```
##### d)
```sql  
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

##### e)
```sql  
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

## Exercício 6
##### a)
```sql  
ALTER TABLE Movie ADD playing_limit_date DATE;
```
##### b)
```sql  
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
##### c)
```sql  
UPDATE Movie
SET	playing_limit_date = "2021-03-23"
WHERE id = "004"
```
```sql  
UPDATE Movie
SET	playing_limit_date = "2012-03-23"
WHERE id = "001"
```
##### d)
```sql  
DELETE FROM Movie WHERE id = "004"
```
```sql  
UPDATE Movie
SET	synopsis = "Um dos melhores filmes brasileiros!"
WHERE id = "004"
```
-- 20:28:33	UPDATE Movie SET synopsis = "Um dos melhores filmes brasileiros!" WHERE id = "004"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.172 sec
Ele retorna um status positivo, mas não faz qualquer alteração. 


## Exercício 7
##### a)Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
-- RESPOSTA: dois filmes 

##### b)  Qual a média das avaliações dos filmes?
```sql
SELECT AVG(rating) FROM Movie;
```
-- RESPOSTA:'8.333333333333334'

##### c) Qual a quantidade de filmes em cartaz?
```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date;
```
-- RESPOSTA: 1

##### d) Qual a quantidade de filmes que ainda irão lançar?
```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
-- RESPOSTA: 0
##### e) Qual a maior nota dos filmes?
```sql
SELECT MAX(rating) FROM Movie;
```
-- RESPOSTA: 10

##### f) Qual a menor nota dos filmes?
```sql
SELECT MIN(rating) FROM Movie;
```
-- RESPOSTA: 7


## EXERCICIO 8

##### a) Retorne todos os filmes em ordem alfabética
```sql
SELECT * FROM Movie
ORDER BY title ASC;
```
##### b) Retorne os 5 primerios filmes em ordem descrente alfabética
```sql
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```
##### c) Retorne os 3 filmes mais recentes em cartaz
```sql
SELECT * FROM Movie
ORDER BY release_Date DESC
LIMIT 3;
```

##### d) Retorne os 3 filmes melhor avalidos
```sql
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```
