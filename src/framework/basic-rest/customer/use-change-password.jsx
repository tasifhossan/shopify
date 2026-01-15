import { useMutation } from '@tanstack/react-query';

async function changePassword(input) {
    return input;
}
export const useChangePasswordMutation = () => {
    return useMutation({
        mutationFn: (input) => changePassword(input),
        onSuccess: (data) => {
            console.log(data, 'ChangePassword success response');
        },
        onError: (data) => {
            console.log(data, 'ChangePassword error response');
        },
    });
};
