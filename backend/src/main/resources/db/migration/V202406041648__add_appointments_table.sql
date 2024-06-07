CREATE TABLE appointment
(
    id          UUID PRIMARY KEY,
    appointment VARCHAR NOT NULL,
    person_id   UUID
        CONSTRAINT appointment_person_id REFERENCES person (id),
    image       BYTEA   NOT NULL
);