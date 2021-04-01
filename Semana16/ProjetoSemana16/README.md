### TO DO LIST

### ESTRUTURA DE DADOS

###### Usuários
+ id
+ name
+ nickname
+ email

###### Tarefas 
+ id
+ title
+ description
+ deadline
+ status: "to_do" || "doing" || "done"
+ author
+ assigness

___

### CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE User (
id FLOAT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL
);
```

```sql
CREATE TABLE todolist_task (
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR(255) NOT NULL, 
description VARCHAR(255) DEFAULT "No Description provided",
deadline DATE,
status ENUM ("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
author_id FLOAT,
FOREIGN KEY (author_id) REFERENCES User(id)
) 
```


___
### Endpoints Mínimos

- **1. Criar usuário**

    **Método:** PUT
    **Path:** `/user`

    **Body:**

    ```json
    {
        "id": 1,
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```

- **2. Pegar usuário pelo id**

    **Método:** GET
    **Path:** `/user/:id`

    **Path Param**: é o id do usuário

    **Body de Resposta:**

    ```json
    {
    	"id": "001",
    	"nickname": "astrodev"
    }
    ```
- **3. Editar usuário**

    **Método:** POST
    **Path:** `/user/edit/:id`

    **Path Param**: é o id do usuário

    **Body:**

    ```json
    {
        "id": 1,
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```

- **4. Criar tarefa**


    **Método:** PUT
    **Path:** `/task`

    **Body:**

    ```json
    {
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001"
    }
    ```

### Desafios
- **6. Pegar todos os usuários**

    **Método:** GET
    **Path:** `/user/all`

    **Body de Resposta:**

    ```json
    {
    	"users": [{
    		"id": "001",
    		"nickname": "astrodev"
    	}]
    }
    ```
