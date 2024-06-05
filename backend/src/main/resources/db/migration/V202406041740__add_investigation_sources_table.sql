CREATE TABLE investigation_source
(
    investigation_id UUID
        CONSTRAINT fk_investigation_id REFERENCES investigation (id) ON DELETE CASCADE,
    source_id        UUID
        CONSTRAINT fk_source_id REFERENCES source (id) ON DELETE CASCADE,
    PRIMARY KEY (investigation_id, source_id)
);