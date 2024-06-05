CREATE TABLE appointment
(
    id UUID PRIMARY KEY,
    person_appointment VARCHAR NOT NULL,
    image              BYTEA   NOT NULL
);