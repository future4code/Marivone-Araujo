##EXERCICIO 1

#### a) Ele devolve pra gente o resultado da query e outras informações. Os dados que queremos estão na primeira posição do array. Então, para acessá-los é só pegar a primeira posição da resposta da query. (result[0])

#### b) 
```sql
const getActorByName = async (req: Request, res: Response): Promise<any> => {
    const name = req.params.name
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE "${name}"
`)  
    res.status(200).send(result)
  }
export default getActorByName
```

#### c)


```sql
const getActorByGender = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
};
export default getActorByGender;
```

##EXERCICIO 2

#### a)
#### b)
#### c)