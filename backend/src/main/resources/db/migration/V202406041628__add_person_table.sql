CREATE TABLE person
(
    id         UUID PRIMARY KEY,
    name       VARCHAR NOT NULL,
    surname    VARCHAR NOT NULL,
    patronymic VARCHAR NOT NULL,
    party      UUID
        CONSTRAINT person_party_id REFERENCES party (id)
);