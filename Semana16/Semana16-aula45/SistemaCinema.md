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
##### b)
##### c)
##### d)
