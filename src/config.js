import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  NODE: 'https://api.steemit.com',
  BOT_TOKEN: process.env.BOT_TOKEN,
  BOT_OWNER_ID: '412077846626959360',
  POSTING_WIF: process.env.POSTING_WIF,
  STEEM_ACCOUNT: process.env.STEEM_ACCOUNT || 'bdcommunity',
  VOTING_WEIGHT: 10000,
  VP_LIMIT: 8000,
  PROJECT_ROOT: path.dirname(__dirname),
  ALLOWED_UPVOTE_ROLES: ['Admin', 'Moderator'],
  ALLOWED_UPVOTE_REQUEST_ROLES: ['Admin', 'Moderator', 'Explorer'],
  COMMAND_PREFIX: '$',
  COMMENT_LOCATION: 'comment.md',
};

export default config;
