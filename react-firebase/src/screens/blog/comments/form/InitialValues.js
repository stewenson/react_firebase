
export const InitialValues = (currentUser) => ({
    author: currentUser ? currentUser.displayName : '',
    comment: ' ',

});