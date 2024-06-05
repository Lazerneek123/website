CREATE TABLE investigation
(
    id           UUID PRIMARY KEY,
    label        VARCHAR   NOT NULL,
    publish_date TIMESTAMP NOT NULL,
    content      TEXT      NOT NULL,
    content_en   TEXT      NOT NULL
);