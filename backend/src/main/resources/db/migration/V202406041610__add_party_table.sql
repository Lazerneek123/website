CREATE TABLE party
(
    id    UUID PRIMARY KEY,
    name  VARCHAR UNIQUE NOT NULL,
    image BYTEA          NOT NULL
);