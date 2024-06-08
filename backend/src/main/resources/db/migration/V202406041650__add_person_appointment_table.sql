CREATE TABLE person_appointment
(
    person_id      UUID
        CONSTRAINT fk_person_id REFERENCES person (id) ON DELETE CASCADE,
    appointment_id UUID
        CONSTRAINT fk_appointment_id REFERENCES appointment (id) ON DELETE CASCADE,
    PRIMARY KEY (person_id, appointment_id)
);