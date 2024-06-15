CREATE TABLE investigation
(
    id              UUID PRIMARY KEY,
    label           VARCHAR   NOT NULL,
    description     VARCHAR   NOT NULL,
    publish_date    TIMESTAMP NOT NULL,
    content         TEXT      NOT NULL,
    content_english TEXT      NOT NULL
);