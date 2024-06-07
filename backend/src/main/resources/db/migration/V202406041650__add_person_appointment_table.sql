CREATE TABLE person_appointment
(
    person_id      UUID NOT NULL,
    appointment_id UUID NOT NULL,
    PRIMARY KEY (person_id, appointment_id)
);