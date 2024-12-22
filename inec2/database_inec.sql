CREATE TABLE tblUserAccess (
    acc_id INT AUTO_INCREMENT,
    username VARCHAR(20),
    password VARCHAR(100),
    accessType INT DEFAULT 2,
    isApproved VARCHAR(100) DEFAULT 'pending',
    dateApproved DATE,
    PRIMARY KEY (acc_id)
);

CREATE TABLE tblConsumer (
    acc_id INT,
    accNum BIGINT UNIQUE, -- Using BIGINT to ensure it can hold 10-digit numbers
    accName VARCHAR(50),
    accStatus VARCHAR DEFAULT 'disconnected',
    townID INT,
    zoneID INT,
    consumerTypeCode VARCHAR(25),
    phonenumber VARCHAR(11),
    dateConnected DATE,
    PRIMARY KEY (acc_id),
    FOREIGN KEY (acc_id) REFERENCES tblUserAccess(acc_id)
);

CREATE TABLE tblBillingInfo (
    acc_id INT,
    accNum BIGINT,
    billCode VARCHAR(6),
    totalEB INT,
    totalServiceCharge INT,
    totalSurCharge INT,
    totalAmountDue INT,
    billingDate DATE,
    billDueDate DATE,
    FOREIGN KEY (accNum) REFERENCES tblConsumer(accNum),
    FOREIGN KEY (acc_id) REFERENCES tblConsumer(acc_id)
);
