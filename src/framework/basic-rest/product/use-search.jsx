import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchSearchedProducts = async ({ queryKey }) => {
    const options = queryKey[1];

    const { data } = await http.get(API_ENDPOINTS.SEARCH);

    function searchProduct(product) {
        return product.name.toLowerCase().indexOf(options.text.toLowerCase()) > -1;
    }

    return data.filter(searchProduct);
};
export const useSearchQuery = (options) => {
    return useQuery({
        queryKey: [API_ENDPOINTS.SEARCH, options],
        queryFn: fetchSearchedProducts,
    });
};
