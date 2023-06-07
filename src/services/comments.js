// import { pathExists } from 'fs-extra';
import { post } from '../utils/request';

// create comments
export const createComment = (params) => post('/api/comments',params);

// likes interface
export const likes = (params) => post('/api/likes',params);

// cancel likes
export const cancelLike = (params) => post('/api/likes/cancel',params);