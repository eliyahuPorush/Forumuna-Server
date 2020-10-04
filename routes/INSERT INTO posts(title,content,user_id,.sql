INSERT INTO posts(title,content,user_id) 
VALUES ('third post!', 
        'third post content bla bla bla bla bla bla bla bla bla bla',
        1) ;

-- insert into users(name,date_of_joined)
-- VALUES('Eli', CURRENT_DATE) ;


-- CREATE TABLE posts(
--     id serial primary key not null,
--     title text not null,
--     content text,
--     user_id integer references users(id) not null,
--     date_created timestamp DEFAULT CURRENT_DATE
-- )
