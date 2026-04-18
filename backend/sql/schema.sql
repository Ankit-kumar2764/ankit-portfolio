CREATE TABLE IF NOT EXISTS leetcode_stats (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  total_solved INTEGER NOT NULL DEFAULT 0,
  easy_solved INTEGER NOT NULL DEFAULT 0,
  medium_solved INTEGER NOT NULL DEFAULT 0,
  hard_solved INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO leetcode_stats (username, total_solved, easy_solved, medium_solved, hard_solved)
VALUES ('ankit-kumar2764', 412, 183, 181, 48)
ON CONFLICT (username)
DO UPDATE SET
  total_solved = EXCLUDED.total_solved,
  easy_solved = EXCLUDED.easy_solved,
  medium_solved = EXCLUDED.medium_solved,
  hard_solved = EXCLUDED.hard_solved,
  updated_at = NOW();
