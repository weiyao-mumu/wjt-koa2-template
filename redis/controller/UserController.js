const userService = require('../service/userService');
const uuid = require('uuid');

class UserController {
    async userLogin(value) {
        const userId = value;
        const userSessionId = uuid.v1();
        await userService.storeUserId(userSessionId, userId);
    }

    async UserLoginOut(userSessionId) {
        await userService.removeUserSessionByUserSessionId(userSessionId);
    }

    async userOtherOperation(userSessionId) {
        const userId = await userService.resetUserSessionExpirationTime(userSessionId);
        console.log('userId from UserController' + userId);
        //重置userService的过期时间   
        await userService.resetUserSessionExpirationTime(userSessionId);
    }
}

module.exports = new UserController();