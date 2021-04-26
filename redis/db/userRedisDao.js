const Redis = require('ioredis');

const redisKeyPrefix = 'myRedis:info:user:';


class UserRedisDao {
    //创建Redis连接
    getRedisConnection() {
            return new Redis({
                host: '127.0.0.1',
                port: 6379
            });
        }
        /**
         * 存数据
         * @param {*} userSessionId 
         * @param {*} userId 
         */
    async storeUserId(userSessionId, userId) {
        const redis = this.getRedisConnection();
        redis.set(redisKeyPrefix + userSessionId, userId, 'ex', 1800, (err, res) => {
            //redis连接关闭
            redis.quit();
        });
    }

    /**
     * 
     * @param {获取数据key} userSessionId 
     * @returns 
     */
    async getUserIdFromUserSessionByUserSessionId(userSessionId) {
            const redis = this.getRedisConnection();
            return redis.get(redisKeyPrefix + userSessionId, (err, res) => {
                if (!err) {
                    //redis连接关闭
                    redis.quit();
                    //退出函数，返回值
                    return res;
                }
            });
        }
        /**
         * 
         * @param {重置过期时间} userSessionId 
         */
    async resetUserSessionExpirationTime(userSessionId) {
            const redis = this.getRedisConnection();
            // 将制定的key，设置过期时间
            redis.expire(redisKeyPrefix + userSessionId, 1800, (err, res) => {
                if (!err) {
                    redis.quit();
                }
            })
        }
        /**
         * 
         * @param {删除数据key} userSessionId 
         */
    async removeUserSessionByUserSessionId(userSessionId) {
        const redis = this.getRedisConnection();
        redis.del(redisKeyPrefix + userSessionId, (err, res) => {
            Redis.quit();
        })
    }


}

module.exports = new UserRedisDao();