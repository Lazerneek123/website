CREATE TABLE appointment
(
    person_id          UUID
        CONSTRAINT fk_appointment_person_id REFERENCES person (id),
    person_appointment VARCHAR NOT NULL,
    image              BYTEA   NOT NULL,
    PRIMARY KEY (person_id, person_appointment)
);