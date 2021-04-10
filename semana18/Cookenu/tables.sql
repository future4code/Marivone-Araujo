
CREATE TABLE cookenu_user (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
); 

CREATE TABLE cookenu_recipes (
	id VARCHAR(255) PRIMARY KEY,
	user_id VARCHAR(255),
    title VARCHAR (255) NOT NULL,
    description TEXT NOT NULL,
	date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
);