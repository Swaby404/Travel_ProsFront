DROP DATABASE IF EXISTS puppybowl;
CREATE DATABASE puppybowl;
\c puppybowl;

CREATE TABLE teams (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL
);

CREATE TABLE puppies (
    id serial PRIMARY KEY,
    name text NOT NULL,
    team_id int REFERENCES teams(id)
);

INSERT INTO teams
    (name)
VALUES
    ('Barkers'),
    ('Chompers'),
    ('Growlers'),
    ('Bad Dogs');

INSERT INTO puppies
    (name, team_id)
VALUES
    ('Toph', 2),
    ('Zelda', 3),
    ('Pickle', NULL),
    ('Iggy', (SELECT id from teams WHERE name = 'Barkers')),
    ('Nigel', 2),
    ('Pipa', 3),
    ('Chloe', 2),
    ('Snow', 1),
    ('Siren', 1);

-- Get all puppies on team 1
SELECT * FROM puppies WHERE team_id = 1;

-- Inner Join - Get all puppies on a team with a team name
\echo 'Inner Join'
SELECT
    puppies.*,
    teams.name
FROM
    puppies
    JOIN teams ON teams.id = puppies.team_id;

-- Left Outer Join (Left Join) - Get all puppies, and teams if applicable
\echo 'Left Join'
SELECT
    puppies.*,
    teams.name
FROM
    puppies
    LEFT JOIN teams ON teams.id = puppies.team_id;

-- Right Outer Join (Right Join) - Get all teams, and puppies if applicable
\echo 'Right Join'
SELECT
    puppies.*,
    teams.name
FROM
    puppies
    RIGHT JOIN teams ON teams.id = puppies.team_id;

-- Full Outer Join (Full Join) - Get all teams and puppies, even if there's no relation
\echo 'Full Join'
SELECT
    puppies.*,
    teams.name
FROM
    puppies
    FULL JOIN teams ON teams.id = puppies.team_id;