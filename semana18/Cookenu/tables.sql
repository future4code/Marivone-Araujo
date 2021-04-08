
CREATE TABLE cookenu_user (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password INT NOT NULL
);

CREATE TABLE cookenu_recipes (
	user_id INT(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    method TEXT NOT NULL,
    date DATE NOT NULL,
	FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
);