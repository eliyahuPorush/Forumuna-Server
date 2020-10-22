CREATE TABLE answers (
    answer_id serial primary key not null,
    user_id integer not null,
    post_id integer not null,
    CONSTRAINT fk_user_id foreign key (user_id) references users(id),
    CONSTRAINT fk_post_id foreign key (post_id) references posts(id),
    -- user_id numeric references users(id) NOT NULL,
    -- post_id numeric NOT NULL references posts(id),
    -- foreign key(id, user_id) references posts(id, user_id),
    --   foreign key (isbn, book_type) references books (isbn, book_type),


    content text not null
)