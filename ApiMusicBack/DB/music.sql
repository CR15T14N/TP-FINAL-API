

-----------------------------------------------------------------------------
CREATE SCHEMA IF NOT EXISTS musics;

USE musics;
CREATE TABLE IF NOT EXISTS musics (
id BINARY (16) PRIMARY KEY  DEFAULT (UNHEX(REPLACE(UUID(), '-',''))),
artist   VARCHAR(50) NOT NULL ,
members     VARCHAR(150) NOT NULL ,
poster  TEXT ,
origin      VARCHAR(50)  ,
start      YEAR NOT NULL     ,
songs      INT NOT NULL    
);

-----------------------------------------------------------------------------

INSERT INTO musics (artist, members , poster , origin ,start , songs)
VALUES 

('The Beatles', 'John Lennon, Paul McCartney, George Harrison, Ringo Starr', 'https://i.scdn.co/image/5f70d98d3e4616a02a3afe2aa9a840b9157b92a1', 'Reino Unido', 1960, 200),
  ('Pink Floyd', 'Roger Waters, David Gilmour, Richard Wright, Nick Mason', 'https://i.scdn.co/image/d011c95081cd9a329e506abd7ded47535d524a07', 'Reino Unido', 1965, 150),
  ('The Rolling Stones', 'Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood', 'https://i.scdn.co/image/2556e9b6665dd8104b454a67088c8265706497b3', 'Reino Unido', 1962, 250),
  ('Queen', 'Freddie Mercury, Brian May, Roger Taylor, John Deacon', 'https://i.scdn.co/image/bc4e2b6a9abcef513b17c3bc7576a42e4f4947a3', 'Reino Unido', 1970, 170),
  ('Los Tipitos', 'Raúl Quique, Walter Piancioli, Federico Bugallo, Pablo Tévez', 'https://i.scdn.co/image/ab6761670000ecd45848df373cc4d50104ee4e83', 'Argentina', 1994, 100),
  ('Fito Paez', 'Fito Paez', 'https://i.scdn.co/image/ab6761670000ecd406ff8bf92e05142ac1daeb0d', 'Argentina', 1982, 80),
  ('Gustavo Cerati', 'Gustavo Cerati', 'https://i.scdn.co/image/d5f8ed259ea6945681a42335d7ccb20ffa81a2e5', 'Argentina', 1984, 60),
  ('Callejeros', 'Patricio Santos Fontanet, Eduardo Vázquez, Christian Torrejón, Juan José Carbone', 'https://i.scdn.co/image/ab6761610000e5eb955fe34eada328d7c586ba31', 'Argentina', 1995, 120),
  ('Los Cafres', 'Guillermo Bonetto, Claudio Illobre, Gonzalo Albornoz', 'https://i.scdn.co/image/ab6761610000e5eb1b30f67e5011f6943d5eaa7d', 'Argentina', 1987, 90),
  ('Rammstein', 'Till Lindemann, Richard Z. Kruspe, Paul Landers, Oliver Riedel, Christoph Schneider, Christian "Flake" Lorenz', 'https://i.scdn.co/image/ab6761670000ecd4673598291336a37b7f52cb49', 'Alemania', 1994, 80),
  ('Falling in Reverse', 'Ronnie Radke, Derek Jones, Zakk Sandler, Christian Thompson, Johnny Mele', 'https://i.scdn.co/image/ab6761670000ecd42e3075f9e7838be53846d300', 'Estados Unidos', 2008, 50),
  ('In This Moment', 'Maria Brink, Chris Howorth, Travis Johnson, Randy Weitzel, Kent Diimmel', 'https://i.scdn.co/image/ab6761670000ecd4313e390505672b01f163197e', 'Estados Unidos', 2005, 60),
  ('Marilyn Manson', 'Marilyn Manson, Twiggy Ramirez, Tyler Bates, Gil Sharone, Paul Wiley', 'https://i.scdn.co/image/6925ea0c7c98fe8593ee4fefeea499898e13b797', 'Estados Unidos', 1989, 70),
  ('Motionless In White', 'Chris Motionless, Ryan Sitkowski, Ricky Olson, Vinny Mauro, Justin Morrow', 'https://i.scdn.co/image/ff39780bc4bdbeac9c354cf866392c67b1e0be7c', 'Estados Unidos', 2005, 40);


----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS genres(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE
);

---------------------------------------------------------------------------
INSERT INTO genres (name)
VALUES 
('Heavy Metal'),
('Rock'), 
('Rock Progresivo'),
('Reggae'),
('Industrial Metal'),
('Post-Hardcore'), 
('Metal Alternativo'), 
('Rock Industrial'),
('Metalcore');

-------------------------------------------------------------------------
CREATE TABLE music_genres (
music_id BINARY(16),
genre_id INT,
PRIMARY KEY (music_id, genre_id),
FOREIGN KEY (music_id) REFERENCES musics(id) ON DELETE CASCADE,
FOREIGN KEY (genre_id) REFERENCES genres(id)
);

-------------------------------------------------

INSERT INTO music_genres (music_id, genre_id)
SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = 
"Rammstein" AND g.name IN ("Industrial Metal")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Metallica" AND g.name IN ("Heavy Metal")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "The Beatles" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Pink Floyd" AND g.name IN ("Rock Progresivo")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "The Rolling Stones" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Queen" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Los Tipitos" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Fito Paez" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Gustavo Cerati" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Callejeros" AND g.name IN ("Rock")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Los Cafres" AND g.name IN ("Reggae")

UNION


SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Falling in Reverse" AND g.name IN ("Post-Hardcore")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "In This Moment" AND g.name IN ("Metal Alternativo")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Marilyn Manson" AND g.name IN ("Rock Industrial")

UNION

SELECT m.id, g.id
FROM musics m
JOIN genres g ON m.artist = "Motionless In White" AND g.name IN ("Metalcore")
;

------------------------------------------------------------------------------


SELECT m.artist, m.start , m.members ,g.name as genres
FROM musics m
JOIN music_genres mg ON mg.music_id = m.id
JOIN genres g ON mg.genre_id = g.id;
