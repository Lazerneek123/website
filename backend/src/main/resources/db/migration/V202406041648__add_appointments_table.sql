CREATE TABLE appointment
(
    id          UUID PRIMARY KEY,
    appointment VARCHAR NOT NULL,
    image       BYTEA   NOT NULL
);