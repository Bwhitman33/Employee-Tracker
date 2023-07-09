INSERT INTO department (name)
VALUES ("Management/Supervisors"),
       ("Accounts Management"), 
       ("Logistics"),
       ("Dropship"),
       ("Warehouse"),
       ("Inventory Control");

INSERT INTO role (title, salary, department_id)
VALUES ("Warehouse Manager", 150000.00, 1),
       ("Acounts Manager", 120000.00, 1),
       ("Shipping/Logistics Manager", 100000.00, 1),
       ("Operations Manager", 90000.00, 1),
       ("Dropshipping Manager", 75000.00, 1),
       ("Accounts Rep", 68000.00, 2),
       ("Local Shipping Rep", 65000.00, 3),
       ("CDL Truck Driver", 70000.00, 3),
       ("Dropship Section Lead", 45000.00, 4),
       ("Dock Lead", 50000.00, 5),
       ("Forklift Driver", 45000.00, 5),
       ("Receiving Rep", 45000.00, 5),
       ("Inventory Control Rep", 48000.00, 6),
       ("Inventory Clerk", 35000.00, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Salvatore", "DeRienzo", 1, NULL),
       ("Chani", "Kraus", 2, 1),
       ("Nathan", "Scheff", 3, 1),
       ("Jhony", "Herrera", 4, 1),
       ("Rosa", "Peralta", 5, 4),
       ("Angela", "Brown", 6, 2),
       ("George", "Nellen", 7, 3),
       ("Dwayne", "Childs", 8, 3),
       ("Lisandro", "Campos", 8, 3),
       ("Alex", "Martinez", 9, 5),
       ("Carlos", "Cortez", 10, 3),
       ("Bebe", "Osso", 11, 3),
       ("Alejandro", "Cruz", 12, 3),
       ("Julian", "Carro", 13, 4),
       ("Christian", "Tejada", 14, 4),
       ("Joharri", "Lara", 14, 4);       
        