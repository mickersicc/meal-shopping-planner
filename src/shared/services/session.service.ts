export default () => {
    let session: any = {};
    const key = 'msp-';

    if (window && window.localStorage) {
        session = window.localStorage ? window.localStorage : null;
    }

    const retrieve = (token: string): any => {
        const storedToken: string = session.getItem(`${key}${token}`);
        if (!storedToken) {
            return null;
        }
        const parsedToken = JSON.parse(storedToken);
        return parsedToken;
    }

    /**
     * Sets a session param for reuse durring this user session
     * @param token the name of the token to set
     * @param obj the data that token contains
     */
    const setItem = (token: string, obj: any): void => {
        const stringObj = JSON.stringify(obj);
        session.setItem(`${key}${token}`, stringObj);
    }

    /**
     * Returns the deserialized object from the session table
     * @param token a string to search for
     * @returns any and object
     */
    const getItem = (token: string): any => {
        return retrieve(token);
    }

    /**
     * Removes an item from the session table
     * @param token a string token to search for
     */
    const removeItem = (token: string): void => {
        session.removeItem(`${key}${token}`);
    }

    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem
    }
}