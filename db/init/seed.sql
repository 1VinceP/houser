DROP TABLE IF EXISTS Houser;
DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users
    (
        userId SERIAL PRIMARY KEY,
        username TEXT,
        password TEXT
    );

INSERT INTO Users
    ( username, password )
    VALUES
        ( 'test', 'test' );


CREATE TABLE Houser
    (
        id SERIAL PRIMARY KEY,
        name TEXT,
        description TEXT,
        address TEXT,
        city TEXT,
        state TEXT,
        zip INTEGER,
        img TEXT,
        loanAmount INTEGER,
        monthlyMortgage INTEGER,
        desiredRent INTEGER,
        userId INTEGER,
        FOREIGN KEY (userId) REFERENCES Users(userId)
    );

INSERT INTO Houser
    ( name, description, address, city, state, zip, img, loanAmount, monthlyMortgage, desiredRent )
    VALUES
        ( 'Victorian', 'Victorian', '1234 Seseme St', 'Provo', 'UT', 12345, 'image_url', 5000, 500, 1300 ),
        ( 'Victorian', 'Victorian', '1234 Seseme St', 'Provo', 'UT', 12345, 'image_url', 5000, 500, 1500 ),
        ( 'Condo', 'Condo', '1235 Seseme St', 'Provo', 'UT', 12345, 'image_url', 3000, 500, 700 );