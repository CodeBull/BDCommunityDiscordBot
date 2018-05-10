--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS upvotes (
  id INTEGER PRIMARY KEY,
  user TEXT,
  link TEXT,
  createdAt TIMESTAMP DEFAULT (datetime('now','localtime')) NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_upvotes_user ON upvotes (user);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE upvotes;
