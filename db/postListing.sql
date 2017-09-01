INSERT INTO Houser
    ( name, description, address, city, state, zip, img, loanAmount, monthlyMortgage, desiredRent, userId )
    VALUES
        ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );