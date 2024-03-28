CREATE TABLE "todo" (
"id" SERIAL PRIMARY KEY,
"description" VARCHAR(250) NOT NULL,
"complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo"
        ("description")
VALUES('test'),
      ('test')
;