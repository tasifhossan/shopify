import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';

async function signUp(input) {
    return {
        token: `${input.email}.${input.name}`.split('').reverse().join(''),
    };
}
export const useSignUpMutation = () => {
    const { authorize, closeModal } = useUI();
    return useMutation({
        mutationFn: (input) => signUp(input),
        onSuccess: (data) => {
            Cookies.set('auth_token', data.token);
            authorize();
            closeModal();
        },
        onError: (data) => {
            console.log(data, 'login error response');
        },
    });
};
