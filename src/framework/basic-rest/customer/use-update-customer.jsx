import { useMutation } from '@tanstack/react-query';

async function updateUser(input) {
    return input;
}
export const useUpdateUserMutation = () => {
    return useMutation({
        mutationFn: (input) => updateUser(input),
        onSuccess: (data) => {
            console.log(data, 'UpdateUser success response');
        },
        onError: (data) => {
            console.log(data, 'UpdateUser error response');
        },
    });
};
