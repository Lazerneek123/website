CREATE TABLE person_investigation
(
    investigation_id UUID
        CONSTRAINT fk_investigation_id REFERENCES investigation (id) ON DELETE CASCADE,
    person_id        UUID
        CONSTRAINT fk_person_id REFERENCES person (id) ON DELETE CASCADE,
    PRIMARY KEY (investigation_id, person_id)
);