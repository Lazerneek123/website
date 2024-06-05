CREATE TABLE person_appointment
(
    person_id UUID PRIMARY KEY,
    appointment_id VARCHAR NOT NULL,
    PRIMARY KEY (person_id, appointment_id)
);