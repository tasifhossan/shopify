import { useMutation } from '@tanstack/react-query';

async function checkout(input) {
    return input;
}
export const useCheckoutMutation = () => {
    return useMutation({
        mutationFn: (input) => checkout(input),
        onSuccess: (data) => {
            console.log(data, 'Checkout success response');
        },
        onError: (data) => {
            console.log(data, 'Checkout error response');
        },
    });
};
