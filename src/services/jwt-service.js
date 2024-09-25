import jsonwebtoken from "jsonwebtoken"

export const generateAccessToken = (user) => {
     const token = jsonwebtoken.sign ({
        _id: user._id,
        email: user.email,
        role: user.role,
        nickname: nickname
     }, process.env.JWT_PRIVATE_KET,
    {
        expiresIn: "7d"
    }
);

return token;
};