
export const InitialValues = (props) => ({
    firstName: props.data.firstName ? props.data.firstName : ' ',
    lastName: props.data.lastName ? props.data.lastName : ' ',
    nickName: props.data.nickName ? props.data.nickName : ' ',
    city: props.data.city ? props.data.city : ' ',
    email: props.data.email ? props.data.email : ' ',
    State: props.data.state ? props.data.state : ' ',
    phoneNumber: props.data.phoneNumber ? props.data.phoneNumber : ' ',
    intro: props.data.intro ? props.data.intro : ' ',
});