import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';

async function login(input) {
    return {
        token: `${input.email}.${input.remember_me}`.split('').reverse().join(''),
    };
}
export const useLoginMutation = () => {
    const { authorize, closeModal } = useUI();
    return useMutation({
        mutationFn: (input) => login(input),
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
