// Redux reducer for fetching all products
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, ...state };

    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };

    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Redux reducer for fetching a specifc product's details
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return { loading: true, ...state };

    case "PRODUCT_DETAILS_SUCCESS":
      return { loading: false, product: action.payload };

    case "PRODUCT_DETAILS_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
