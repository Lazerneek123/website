CREATE TABLE person
(
    id         UUID PRIMARY KEY,
    name       VARCHAR NOT NULL,
    surname    VARCHAR NOT NULL,
    patronymic VARCHAR NOT NULL,
    image      BYTEA   NOT NULL,
    party_id   UUID
        CONSTRAINT person_party_id REFERENCES party (id)
);